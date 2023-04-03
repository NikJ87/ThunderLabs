import { AutocompleteRenderInputParams } from "@mui/material";
import { StyledTextField, StyledAutocomplete } from "./search-field";
import { ChangeEvent } from "react";
import { useContent } from "../../hooks/content-hook";
import { getIdentifiers } from "../../commons";

interface SearchFieldProps {
  onChange: (event: ChangeEvent) => void;
}

const SearchField = ({ onChange }: SearchFieldProps) => {
  const content = useContent();

  return (
    <StyledAutocomplete
      {...getIdentifiers("search-autocomplete")}
      options={[]}
      freeSolo
      renderInput={(params: AutocompleteRenderInputParams) => (
        <StyledTextField
          type="text"
          {...getIdentifiers("search-field")}
          variant="filled"
          {...content.search}
          {...params}
          aria-label={`${content.search.name}`}
          aria-describedby={`${content.search.label}`}
          aria-labelledby="search-autocomplete search-field"
          onChange={onChange}
        />
      )}
    />
  );
};

export default SearchField;
