import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { useContent } from "../../hooks";
import { AppleMusicIcon } from "../icons/apple-music";
import { mediaMaxMd } from "../style.constants";

const StyledContainer = styled.div`
  margin: 75px 0;
`;

const StyledText = styled(Typography)`
  margin-bottom: 10px;
`;

const PrimaryHeading = styled(StyledText)`
  ${mediaMaxMd} {
    font-size: 1.5rem;
  }
`;

const SubHeading = styled(StyledText)`
  ${mediaMaxMd} {
    font-size: 0.8rem;
  }
`;

export const IntroBanner = () => {
  const content = useContent();
  return (
    <StyledContainer>
      <AppleMusicIcon />
      <PrimaryHeading variant="h4" align="center">
        {content.intro.banner.primary}
      </PrimaryHeading>
      <SubHeading variant="body1" align="center">
        {content.intro.banner.secondary}
      </SubHeading>
    </StyledContainer>
  );
};
