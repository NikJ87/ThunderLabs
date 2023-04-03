import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { screen } from "@testing-library/react";
import { ShowCount } from "../components";
import { renderWithProvider } from "./utils/render-with-provider";

test("Render to show count", () => {
  renderWithProvider(<ShowCount currentCount={10} totalCount={25} />);

  expect(screen.getByText(`showing 10 of 25`)).toBeDefined();
});
