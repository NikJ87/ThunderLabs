import styled from "@emotion/styled";
import { Skeleton } from "@mui/material";
import {
  StyledCard,
  StyledCardContent,
  StyledCardFooterContent,
  StyledCardHeadingContent
} from "../card";

const StyledLowerSkeleton = styled(Skeleton)`
  margin-top: 10px;
`;

export const LazyLoaders = () => {
  return (
    <StyledCard
      sx={{
        boxShadow: "unset"
      }}
    >
      <Skeleton variant="rectangular" width="200px" height="150px" />
      <StyledCardContent>
        <StyledCardHeadingContent>
          <Skeleton variant="rectangular" width="80%" height="20px" />
          <StyledLowerSkeleton
            variant="rectangular"
            width="33%"
            height="20px"
          />
        </StyledCardHeadingContent>
        <StyledCardFooterContent>
          <Skeleton variant="rectangular" width="30%" height="10px" />
          <StyledLowerSkeleton
            variant="rectangular"
            width="20%"
            height="10px"
          />
        </StyledCardFooterContent>
      </StyledCardContent>
    </StyledCard>
  );
};

export default LazyLoaders;
