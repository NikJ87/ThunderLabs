import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { screen, waitFor } from "@testing-library/react";
import { SearchField } from "../components";
import userEvent from "@testing-library/user-event";
import { renderWithProvider } from "./utils/render-with-provider";

test("Render Search field", () => {
  const handleOnChange = jest.fn();
  renderWithProvider(<SearchField onChange={handleOnChange} />);

  expect(screen.getByTestId("search-field")).toBeDefined();
  expect(screen.getByText("Search albums in iTune")).toBeDefined();
});

test("Render Search field with helper text", () => {
  const handleOnChange = jest.fn();
  renderWithProvider(<SearchField onChange={handleOnChange} />);

  expect(
    screen.getByText("Enter minimum 3 characters to search e.g rol")
  ).toBeDefined();
});

test("onChange search field ", async () => {
  const handleOnChange = jest.fn();
  renderWithProvider(<SearchField onChange={handleOnChange} />);

  userEvent.type(screen.getByRole("combobox"), "123456");
  await waitFor(() => expect(handleOnChange).toHaveBeenCalled());
});
