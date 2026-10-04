import { apiUrl } from "./apiConfig";

let inFlight: Promise<boolean> | null = null;

export const refreshSession = (): Promise<boolean> => {
  if (inFlight) return inFlight;

  inFlight = (async () => {
    try {
      const response = await fetch(apiUrl("/api/v1/auth/refresh"), {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok) return false;

      const contentType = response.headers.get("content-type") ?? "";
      if (!contentType.includes("application/json")) return false;

      const data = (await response.json()) as { accessToken?: string };
      return Boolean(data.accessToken);
    } catch {
      return false;
    } finally {
      inFlight = null;
    }
  })();

  return inFlight;
};
