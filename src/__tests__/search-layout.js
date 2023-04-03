import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { SearchLayout } from "../components";
import { renderWithProvider } from "./utils/render-with-provider";
import { screen } from "@testing-library/dom";

test("Render Search layout", () => {
  const { container } = renderWithProvider(
    <SearchLayout>
      <h1>you are welcome</h1>
    </SearchLayout>
  );
  expect(container).toBeTruthy();
  expect(screen.getByText("you are welcome")).toBeInTheDocument();
});
