import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { SearchBar } from "../components";
import { renderWithProvider } from "./utils/render-with-provider";
import { TextField } from "@mui/material";

test("Render Search bar", () => {
  const { container } = renderWithProvider(
    <SearchBar>
      <TextField />
    </SearchBar>
  );
  expect(container).toBeTruthy();
});
