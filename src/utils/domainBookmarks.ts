import { getAccessToken } from "./accessTokenStore";
import { refreshSession } from "./refreshSession";
import { apiUrl } from "./apiConfig";

export type DomainBookmark = {
  image: string;
  link: string;
  addedAtDate: string;
};

export const fetchBookmarksByDomain = async (
  domain: string,
): Promise<DomainBookmark[]> => {
  const url = apiUrl(
    `/api/v1/bookmarks?domain=${encodeURIComponent(domain)}`,
  );

  const request = () =>
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
      },
      credentials: "include",
    });

  let response = await request();

  if (response.status === 401 && (await refreshSession())) {
    response = await request();
  }

  if (!response.ok) {
    const error = new Error("Unable to load bookmarks") as Error & {
      status?: number;
    };
    error.status = response.status;
    throw error;
  }

  return response.json();
};
