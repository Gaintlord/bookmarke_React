import { refreshSession } from "./refreshSession";
import { apiUrl } from "./apiConfig";

export type BookmarkSummary = {
  website: string;
  totalBookmarks: number;
  latestDate: string;
  latestImageLinks: string[];
  color: string;
};

export const fetchBookmarkSummary = async (): Promise<BookmarkSummary[]> => {
  const request = () =>
    fetch(apiUrl("/api/v1/dashboard/bookmark-summary"), {
      method: "GET",
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
