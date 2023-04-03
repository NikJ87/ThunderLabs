import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { screen, waitFor } from "@testing-library/react";
import { SearchButton } from "../components";
import userEvent from "@testing-library/user-event";
import { renderWithProvider } from "./utils/render-with-provider";

test("Render Search button", () => {
  const handleOnClick = jest.fn();
  renderWithProvider(<SearchButton onClick={handleOnClick} />);

  expect(screen.getByTestId("search-button")).toBeDefined();
});

test("Render Search button with icon", () => {
  const handleOnClick = jest.fn();
  renderWithProvider(<SearchButton onClick={handleOnClick} />);

  expect(screen.getByTestId("search-icon")).toBeDefined();
});

test("onClick search button ", async () => {
  const handleOnClick = jest.fn();
  renderWithProvider(<SearchButton onClick={handleOnClick} />);

  const searchButton = screen.getByTestId("search-icon");
  expect(searchButton).toBeDefined();
  userEvent.click(searchButton);
  await waitFor(() => expect(handleOnClick).toHaveBeenCalled());
});
