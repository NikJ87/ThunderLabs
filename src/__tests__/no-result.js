import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { screen } from "@testing-library/react";
import { NoResultsText } from "../components";
import { renderWithProvider } from "./utils/render-with-provider";

test("Render to show no album found message", () => {
  renderWithProvider(<NoResultsText />);

  expect(screen.getByText(`No albums found`)).toBeDefined();
});
