import { apiUrl } from "./apiConfig";
import { refreshSession } from "./refreshSession";

export const checkSession = async (): Promise<boolean> => {
  try {
    const response = await fetch(apiUrl("/api/v1/auth/session"), {
      method: "GET",
      credentials: "include",
    });

    if (response.ok) return true;
    if (response.status === 401) return refreshSession();
    return false;
  } catch {
    return false;
  }
};
