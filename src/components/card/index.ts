import styled from "@emotion/styled";
import { Card, CardMedia } from "@mui/material";

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  padding: 5px;
`;

export const StyledCardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px;
`;

export const StyledCardHeadingContent = styled(StyledCardContent)`
  flex-grow: 1;
`;

export const StyledCardFooterContent = StyledCardContent;

export const StyledCardMedia = styled(CardMedia)`
  width: 150px;
  flex-grow: 1;
  filter: saturate(300%) brightness(70%);
`;
