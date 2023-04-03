import styled from "@emotion/styled";
import { getIdentifiers } from "../../commons";
import { useContent } from "../../hooks";
import { StyledButton } from "./styled-button";

const StyledShowMore = styled(StyledButton)`
  width: 150px;
  align-self: center;
  margin-top: 25px;
`;

interface ShowMoreProps {
  onClick: () => void;
}

export const ShowMore = ({ onClick }: ShowMoreProps) => {
  const content = useContent();
  return (
    <StyledShowMore
      variant="outlined"
      onClick={onClick}
      {...getIdentifiers("show-more")}
      aria-describedby={`show-more`}
      aria-label={`show-more`}
      role="button"
    >
      {content.showMore.text}
    </StyledShowMore>
  );
};
