import { buildUrl } from "./url-builder";

export const call = async (term: string, spec: Record<string, any>) => {
  const url = buildUrl(term, spec.baseUrl, spec.endpoint, spec.queryParams);

  const response = await fetch(url, {
    method: spec.method,
    headers: spec.headers,
  });

  const resultJson = await response.json();
  return resultJson;
};
