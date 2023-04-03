import { Typography } from "@mui/material";

interface ShowCountProps {
  totalCount: number;
  currentCount: number;
}

export const ShowCount = ({ currentCount, totalCount }: ShowCountProps) => {
  return (
    <Typography color="grey" fontSize="sm" variant="subtitle2" align="left">
      {`showing ${currentCount} of ${totalCount}`}
    </Typography>
  );
};
