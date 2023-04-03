import SearchIcon from "@mui/icons-material/Search";
import { getIdentifiers } from "../../commons";
import { StyledButton } from "./styled-button";

interface SearchButtonProps {
  onClick: () => void;
}

export const SearchButton = ({ onClick }: SearchButtonProps) => (
  <StyledButton
    variant="contained"
    onClick={onClick}
    {...getIdentifiers("search-button")}
    aria-describedby={`search-button`}
    aria-label={`search-button`}
    role="button"
  >
    <SearchIcon
      fontSize="large"
      aria-labelledby="search-button search-icon"
      {...getIdentifiers("search-icon")}
    />
  </StyledButton>
);
