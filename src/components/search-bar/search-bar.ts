import styled from "@emotion/styled";
import { mediaMaxMd } from "../style.constants";
import { tokens } from "../tokens";

export const SearchBar = styled.div`
  position: sticky;
  top: 0;
  z-index: 99;
  background: ${tokens.background.grey["400"]};
  padding: 36px 15px;
  margin: 20px 0;
  display: flex;
  flex-flow: wrap;
  flex-direction: row;
  column-gap: 10px;
  justify-content: center;
  box-shadow: ${tokens.boxShadow["400"]};
  ${mediaMaxMd} {
    padding: 36px 7px;
  }
`;
