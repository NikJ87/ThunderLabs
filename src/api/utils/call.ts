import { buildUrl } from "./url-builder";

export const call = async (term: string, spec: Record<string, any>) => {
  console.log("params to call : ", { term, spec });
  const url = buildUrl(term, spec.baseUrl, spec.endpoint, spec.queryParams);
  console.log("caller : ", { url, method: spec.method, headers: spec.headers });

  const response = await fetch(url, {
    method: spec.method,
    headers: spec.headers
  });

  console.log("response : ", response);
  const resultJson = await response.json();
  console.log("result json : ", resultJson);
  return resultJson;
};
