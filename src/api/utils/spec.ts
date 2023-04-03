export const ApiSpec = {
  itunes: {
    search: {
      baseUrl: "https://itunes.apple.com",
      endpoint: "/search",
      queryParams: {
        country: "AU",
        media: "music",
        entity: "album",
        limit: "50"
      },
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    }
  }
};
