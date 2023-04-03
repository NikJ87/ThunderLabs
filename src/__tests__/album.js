import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { screen, waitFor } from "@testing-library/react";
import { Album as Albums } from "../components";
import userEvent from "@testing-library/user-event";
import { renderWithProvider } from "./utils/render-with-provider";

const album = {
  artistName: "Pink Floyd",
  collectionName: "The Wall",
  collectionId: "726390068",
  primaryGenreName: "Rock",
  releaseDate: "2012-12-07T08:00:00Z",
  artworkUrl100: "../assets/TheWall.webp",
  collectionViewUrl: "https://music.apple.com/au/album/the-wall/1065975633"
};

test("Render album", () => {
  const { container } = renderWithProvider(
    <Albums
      artistName={album.artistName}
      collectionName={album.collectionName}
      collectionId={album.collectionId}
      primaryGenreName={album.primaryGenreName}
      releaseDate={album.releaseDate}
      artworkUrl100={album.artworkUrl100}
      collectionViewUrl={album.collectionViewUrl}
    />
  );

  expect(screen.getByTestId(`album-card-${726390068}`)).toBeDefined();
  expect(screen.getByText("Pink Floyd")).toBeDefined();
  expect(screen.getByText("The Wall")).toBeDefined();
  expect(screen.getByText("Rock")).toBeDefined();
  expect(screen.getByText("December 2012")).toBeDefined();
  expect(screen.getByTestId(`album-artwork-${726390068}`)).toBeDefined();

  const img = container.querySelector("img");

  expect(img.src).toEqual(`${window.location.href}assets/TheWall.webp`);
  expect(img.alt).toEqual("album artwork");
});

test("open album", async () => {
  const mockedOpen = jest.fn();

  renderWithProvider(
    <Albums
      onClick={mockedOpen}
      artistName={album.artistName}
      collectionName={album.collectionName}
      collectionId={album.collectionId}
      primaryGenreName={album.primaryGenreName}
      releaseDate={album.releaseDate}
      artworkUrl100={album.artworkUrl100}
      collectionViewUrl={album.collectionViewUrl}
    />
  );

  const albumCard = screen.getByTestId(`album-card-${726390068}`);

  userEvent.click(albumCard);
  await waitFor(() => expect(mockedOpen).toBeCalled());
});
