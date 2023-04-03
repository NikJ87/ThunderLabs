import {
  StyledCard,
  StyledCardContent,
  StyledCardFooterContent,
  StyledCardHeadingContent,
  StyledCardMedia
} from "../card";
import moment from "moment";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import { getIdentifiers } from "../../commons";
import { noop } from "lodash";
import { mediaMaxMd } from "../style.constants";

const ReleaseDateFormat = "MMMM YYYY";
const Artwork100Units = "100x100bb";
const Artwork592Units = "592x592bb";

const getReleasedDate = (date: string) => {
  let releaseDate = new Date(date);
  return moment(releaseDate).format(ReleaseDateFormat);
};

const AnimatedCard = styled(StyledCard)`
  cursor: pointer;
  box-shadow: 0px 2px 10px 0 #e1e4e8;
  transition: all 0.35s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const StyledText = styled(Typography)`
  line-height: 1.5;
  text-align: left;
`;

const StyledHeadingText = styled(StyledText)`
  ${mediaMaxMd} {
    line-height: 1.3;
    &.MuiTypography-h6 {
      font-size: 1rem;
    }
    &.MuiTypography-body1 {
      font-size: 0.9rem;
      font-weight: 600;
    }
  }
`;

export interface AlbumsProps {
  artistName: string;
  collectionId: string;
  collectionName: string;
  primaryGenreName: string;
  releaseDate: string;
  artworkUrl100: string;
  collectionViewUrl: string;
  onClick?: () => void;
}

export const Album = ({
  artistName,
  collectionName,
  collectionId,
  primaryGenreName,
  releaseDate,
  artworkUrl100,
  collectionViewUrl,
  onClick = noop
}: AlbumsProps) => {
  const _onClick = () => {
    window.open(`${collectionViewUrl}`, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <AnimatedCard
        onClick={onClick === noop ? _onClick : onClick}
        {...getIdentifiers(`album-card-${collectionId}`)}
        aria-describedby={`album-card-${collectionName}`}
        aria-label={`album-card-${collectionName}`}
        role="button"
      >
        <StyledCardMedia
          {...{
            component: "img",
            alt: "album artwork",
            loading: "lazy",
            ...getIdentifiers(`album-artwork-${collectionId}`)
          }}
          image={artworkUrl100!.replace(Artwork100Units, Artwork592Units)}
        />

        <StyledCardContent {...getIdentifiers(`album-content-${collectionId}`)}>
          <StyledCardHeadingContent
            {...getIdentifiers(`album-heading-${collectionId}`)}
          >
            <StyledHeadingText
              variant="h6"
              fontWeight="bold"
              {...getIdentifiers(`album-name-${collectionId}`)}
            >
              {collectionName}
            </StyledHeadingText>
            <StyledHeadingText
              color="#d60017"
              variant="body1"
              {...getIdentifiers(`album-artist-${collectionId}`)}
            >
              {artistName}
            </StyledHeadingText>
          </StyledCardHeadingContent>
          <StyledCardFooterContent
            {...getIdentifiers(`album-footer-${collectionId}`)}
          >
            <StyledText
              color="grey"
              fontWeight="bold"
              variant="subtitle2"
              {...getIdentifiers(`album-genre-${collectionId}`)}
            >
              {primaryGenreName}
            </StyledText>
            <StyledText
              color="grey"
              variant="caption"
              {...getIdentifiers(`album-release-date-${collectionId}`)}
            >
              {`${getReleasedDate(releaseDate)}`}
            </StyledText>
          </StyledCardFooterContent>
        </StyledCardContent>
      </AnimatedCard>
    </>
  );
};
