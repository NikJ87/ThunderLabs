import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { useContent } from "../../hooks";
import { AppleMusicIcon } from "../icons/apple-music";

const StyledContainer = styled.div`
  margin: 75px 0;
`;

const StyledText = styled(Typography)`
  margin-bottom: 10px;
`;

export const IntroBanner = () => {
  const content = useContent();
  return (
    <StyledContainer>
      <AppleMusicIcon />
      <StyledText variant="h4" align="center">
        {content.intro.banner.primary}
      </StyledText>
      <StyledText variant="body1" align="center">
        {content.intro.banner.secondary}
      </StyledText>
    </StyledContainer>
  );
};
