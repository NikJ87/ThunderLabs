import { Typography } from "@mui/material";
import { useContent } from "../../hooks";

export const NoResultsText = () => {
  const content = useContent();
  return (
    <Typography color="grey" fontSize="lg" variant="subtitle2" align="center">
      {content.noResultsFound.text}
    </Typography>
  );
};
