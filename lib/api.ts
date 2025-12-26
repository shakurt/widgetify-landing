const BASE_URL = process.env.API_BASE_URL || "https://api.widgetify.ir";

export const api = async (
  endpoint: string,
  options?: RequestInit
): Promise<Response> => {
  const url = `${BASE_URL}${endpoint}`;

  const defaultHeaders: HeadersInit = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const config: RequestInit = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options?.headers,
    },
  };

  try {
    const response = await fetch(url, config);
    return response;
  } catch (error) {
    console.error("API Fetch Error:", error);
    throw error;
  }
};
