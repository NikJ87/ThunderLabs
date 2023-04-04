import styled from "@emotion/styled";
import { mediaMaxLg, mediaMaxMd } from "../style.constants";
import { tokens } from "../tokens";

export const SearchLayout = styled.div`
  max-width: ${tokens.layout.container.width};
  margin: auto;
  text-align: center;

  ${mediaMaxLg} {
    padding: 0 36px;
  }

  ${mediaMaxMd} {
    padding: 0 7px;
  }
`;
