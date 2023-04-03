import { ApiSpec } from "./utils/spec";
import { call } from "./utils/call";
import { MinimumSearchChars } from "./utils/constants";

export const api = async (
  term: string,
  setResults: (data: Record<any, any>) => void,
  setIsLoading: (data: boolean) => void,
  setHasSearched: (data: boolean) => void
) => {
  console.log("ap icalling => ", { term });
  setHasSearched(false);
  if (term!.length < MinimumSearchChars) return;

  setResults([]);
  setIsLoading(true);

  const resultJson = await call(term, ApiSpec.itunes.search);

  console.log("api itunes : ", resultJson);
  setHasSearched(true);
  setResults(resultJson?.results);
  setIsLoading(false);
};
