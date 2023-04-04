import { useEffect, useRef, useState } from "react";
import {
  SearchLayout,
  SearchBar,
  SearchField,
  SearchButton,
  AlbumContainer,
  LazyLoaders,
  ShowMore,
  NoResultsText,
  ShowCount,
  AlbumsList,
} from "./components";
import { content, config, getIdentifiers } from "./commons";
import { AppProvider } from "./context";
import {
  api,
  CountZero,
  DebounceTime,
  LoadersCount,
  MinimumSearchChars,
  IncrementBy,
} from "./api";
import { debounce, isEmpty } from "lodash";

export default function App() {
  /** State Hooks */
  const [searchText, setSearchText] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasSearched, setHasSearched] = useState<boolean>(false);
  const [lastIndex, setLastIndex] = useState<number>(CountZero);
  const [results, setResults] = useState<Record<any, any>>({});
  const [activeList, setActiveList] = useState<Record<any, any>>([]);

  /** Ref Hooks */
  const debounceRef = useRef<any>();

  const debounceSearching = () =>
    debounceRef.current(searchText, setResults, setIsLoading, setHasSearched);

  /** Use Effects */
  useEffect(() => {
    if (!debounceRef.current) debounceRef.current = debounce(api, DebounceTime);
  }, []);

  useEffect(() => {
    if (searchText?.length < MinimumSearchChars) return;
    debounceSearching();
  }, [searchText]);

  useEffect(() => {
    if (isEmpty(results)) {
      setActiveList([]);
      setLastIndex(CountZero);
    } else if (IncrementBy < results?.length) {
      setActiveList(results.slice(CountZero, IncrementBy));
      setLastIndex(IncrementBy);
    }
  }, [results]);

  const onChangeExec = ({ target: { value } }: any) => {
    setSearchText(value);
  };
  const onClickExec = () => {
    debounceSearching();
  };

  const onShowMoreExec = () => {
    const nextCount =
      lastIndex + Math.min(IncrementBy, results!.length - lastIndex);
    setActiveList(results.slice(CountZero, nextCount));
    setLastIndex(nextCount);
  };

  return (
    <AppProvider {...{ content, config }}>
      <SearchLayout {...getIdentifiers("search-layout")}>
        <SearchBar {...getIdentifiers("search-bar")}>
          <SearchField onChange={onChangeExec} />
          <SearchButton onClick={onClickExec} />
        </SearchBar>
        <AlbumContainer>
          {/* Lazy Loaders */}
          {isLoading &&
            [...Array(LoadersCount)].map((e: any, i: number) => (
              <LazyLoaders key={i} />
            ))}

          {isEmpty(results) ? (
            hasSearched &&
            searchText?.length >= MinimumSearchChars &&
            isEmpty(results) && <NoResultsText />
          ) : (
            <>
              <AlbumsList list={activeList} />
              {IncrementBy < results?.length && (
                <ShowCount
                  currentCount={lastIndex}
                  totalCount={results?.length}
                />
              )}
              {lastIndex < results?.length && (
                <ShowMore onClick={onShowMoreExec} />
              )}
            </>
          )}
        </AlbumContainer>
      </SearchLayout>
    </AppProvider>
  );
}
