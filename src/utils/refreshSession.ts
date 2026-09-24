import { setAccessToken } from "./accessTokenStore";

let inFlight: Promise<boolean> | null = null;

export const refreshSession = (): Promise<boolean> => {
  if (inFlight) return inFlight;

  inFlight = (async () => {
    try {
      const response = await fetch(
        "http://localhost:8081/api/v1/auth/refresh",
        {
          method: "GET",
          credentials: "include",
        }
      );

      if (!response.ok) return false;

      const data = (await response.json()) as { accessToken?: string };
      if (data.accessToken) setAccessToken(data.accessToken);
      return true;
    } catch {
      return false;
    } finally {
      inFlight = null;
    }
  })();

  return inFlight;
};
