import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { LazyLoaders } from "../components";
import { renderWithProvider } from "./utils/render-with-provider";

test("Render Search bar", () => {
  const { container } = renderWithProvider(<LazyLoaders />);
  expect(container).toBeTruthy();
});
