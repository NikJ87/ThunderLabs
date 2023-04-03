export const buildUrl = (
  term: string,
  baseUrl: string,
  endpoint: string,
  queryParams: Record<string, string>
) => {
  const url = new URL(`${baseUrl}${endpoint}`);
  const searchParams = new URLSearchParams({ term, ...queryParams });
  (url as any).search = searchParams;
  return url.toString();
};
