import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { screen, waitFor } from "@testing-library/react";
import { ShowMore } from "../components";
import userEvent from "@testing-library/user-event";
import { renderWithProvider } from "./utils/render-with-provider";

test("Render Show More button", () => {
  const handleOnClick = jest.fn();
  renderWithProvider(<ShowMore onClick={handleOnClick} />);

  expect(screen.getByTestId("show-more")).toBeDefined();
  expect(screen.getByText("Show more")).toBeDefined();
});

test("onClick show more button ", async () => {
  const handleOnClick = jest.fn();
  renderWithProvider(<ShowMore onClick={handleOnClick} />);

  const showMoreButton = screen.getByText("Show more");
  expect(showMoreButton).toBeDefined();
  userEvent.click(showMoreButton);
  await waitFor(() => expect(handleOnClick).toHaveBeenCalled());
});
