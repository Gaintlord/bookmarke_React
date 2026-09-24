import { getAccessToken } from "./accessTokenStore";
import { refreshSession } from "./refreshSession";

export type BookmarkSummary = {
  website: string;
  totalBookmarks: number;
  latestDate: string;
  latestImageLinks: string[];
  color: string;
};

export const fetchBookmarkSummary = async (): Promise<BookmarkSummary[]> => {
  const request = () =>
    fetch("http://localhost:8081/api/v1/dashboard/bookmark-summary", {
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
    const error = new Error("Unable to load dashboard bookmarks") as Error & {
      status?: number;
    };
    error.status = response.status;
    throw error;
  }

  return response.json();
};
