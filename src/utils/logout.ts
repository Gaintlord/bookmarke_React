import { apiUrl } from "./apiConfig";

export const logout = async () => {
  try {
    await fetch(apiUrl("/api/v1/auth/logout"), {
      method: "POST",
      credentials: "include",
    });
  } catch {
    // Ignore network errors; the session cookies are cleared by the server.
  }
};
