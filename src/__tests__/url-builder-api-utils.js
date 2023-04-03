import { buildUrl, ApiSpec } from "../api";

test("itunes search url generator ", () => {
  const { baseUrl, endpoint, queryParams } = ApiSpec.itunes.search;
  const url = buildUrl("back", baseUrl, endpoint, queryParams);

  expect(url).toEqual(
    "https://itunes.apple.com/search?term=back&country=AU&media=music&entity=album&limit=50"
  );
});
