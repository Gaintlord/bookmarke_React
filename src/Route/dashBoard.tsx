import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { WebsitesCard } from "../components/websiteCard/WebsiteCard";
import { clearAccessToken, getAccessToken } from "../utils/accessTokenStore";
import { HomeLogoAncher } from "../components/homeLogoAncher";
import {
  fetchBookmarkSummary,
  type BookmarkSummary,
} from "../utils/dashboardBookmarkSummary";
import { getDomainColorClass, toColorClass } from "../utils/domainColor";
import { saveDomainColors } from "../utils/domainColorStore";

type BookmarkCollection = {
  domainName: string;
  color: string;
  totalbokmarke: string;
  lastSaved: string;
  images: string[];
};

const formatLastSaved = (isoDate: string) => {
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return "—";
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
    .format(date)
    .toUpperCase();
};

const toCollection = (summary: BookmarkSummary): BookmarkCollection => ({
  domainName: summary.website,
  color: toColorClass(summary.color)[1],
  totalbokmarke: String(summary.totalBookmarks),
  lastSaved: formatLastSaved(summary.latestDate),
  images: summary.latestImageLinks ?? [],
});

const Dashboard = () => {
  const navigate = useNavigate();
  const profileMenuRef = useRef<HTMLDivElement>(null);
  const [collections, setCollections] = useState<BookmarkCollection[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isAddBookmarkOpen, setIsAddBookmarkOpen] = useState(false);
  const [bookmarkUrl, setBookmarkUrl] = useState("");
  const [formError, setFormError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    const closeProfileMenu = (event: MouseEvent) => {
      if (!profileMenuRef.current?.contains(event.target as Node))
        setIsProfileMenuOpen(false);
    };
    document.addEventListener("mousedown", closeProfileMenu);
    return () => document.removeEventListener("mousedown", closeProfileMenu);
  }, []);

  useEffect(() => {
    if (!getAccessToken()) return;
    let cancelled = false;
    setIsLoading(true);
    setLoadError("");

    fetchBookmarkSummary()
      .then((summaries) => {
        if (cancelled) return;
        saveDomainColors(summaries);
        setCollections(summaries.map(toCollection));
      })
      .catch((error: Error & { status?: number }) => {
        if (cancelled) return;
        if (error.status === 401) {
          clearAccessToken();
          navigate("/Login", { replace: true });
          return;
        }
        setLoadError(
          "Could not load your bookmark collections. Please try again.",
        );
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [navigate, reloadKey]);

  if (!getAccessToken()) return <Navigate to="/Login" replace />;

  const visibleCollections = collections.filter((collection) =>
    collection.domainName
      .toLowerCase()
      .includes(searchQuery.trim().toLowerCase()),
  );

  const logOut = () => {
    clearAccessToken();
    navigate("/Login", { replace: true });
  };

  const addBookmarkCollection = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const domainName = new URL(bookmarkUrl).hostname.replace(/^www\./, "");
      if (!domainName) throw new Error("Missing domain");
      setCollections((current) => [
        {
          domainName,
          color: getDomainColorClass(domainName)[1],
          totalbokmarke: "1",
          lastSaved: formatLastSaved(new Date().toISOString()),
          images: [],
        },
        ...current,
      ]);
      setBookmarkUrl("");
      setFormError("");
      setIsAddBookmarkOpen(false);
    } catch {
      setFormError("Enter a complete URL, such as https://example.com.");
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 text-blue-950">
      <header className="sticky top-0 z-30 border-b-2 border-blue-100 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex min-h-18 max-w-7xl flex-wrap items-center gap-3 px-4 py-3 sm:flex-nowrap sm:px-6">
          <HomeLogoAncher className="w-30 shrink-0 sm:w-36" />
          <label className="relative order-3 w-full sm:order-2 sm:ml-auto sm:max-w-md">
            <span className="sr-only">Search bookmark collections</span>
            <svg
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" />
            </svg>
            <input
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              className="w-full rounded-xl border border-blue-100 bg-blue-50 py-2 pl-9 pr-3 font-mono text-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
              placeholder="Search bookmarks..."
              type="search"
            />
          </label>
          <div className="order-2 ml-auto flex items-center gap-2 sm:order-3 sm:ml-0">
            <button
              className={`hidden rounded-xl border p-2 transition focus:outline-none focus:ring-2 focus:ring-blue-300 sm:block ${viewMode === "grid" ? "border-blue-300 bg-blue-50 text-blue-800" : "border-blue-100 bg-white text-gray-600 hover:bg-blue-50"}`}
              type="button"
              aria-label="Grid view"
              aria-pressed={viewMode === "grid"}
              onClick={() => setViewMode("grid")}
            >
              <svg
                className="size-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="4" y="4" width="6" height="6" rx="1" />
                <rect x="14" y="4" width="6" height="6" rx="1" />
                <rect x="4" y="14" width="6" height="6" rx="1" />
                <rect x="14" y="14" width="6" height="6" rx="1" />
              </svg>
            </button>
            <button
              className={`hidden rounded-xl border p-2 transition focus:outline-none focus:ring-2 focus:ring-blue-300 sm:block ${viewMode === "list" ? "border-blue-300 bg-blue-50 text-blue-800" : "border-blue-100 bg-white text-gray-600 hover:bg-blue-50"}`}
              type="button"
              aria-label="List view"
              aria-pressed={viewMode === "list"}
              onClick={() => setViewMode("list")}
            >
              <svg
                className="size-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 6h11M9 12h11M9 18h11" />
                <path
                  d="M4 6h.01M4 12h.01M4 18h.01"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <button
              className="rounded-xl bg-[rgb(213,231,235)] px-3 py-2 font-mono text-sm font-bold transition hover:scale-105 active:translate-y-0.5 sm:px-4"
              type="button"
              onClick={() => setIsAddBookmarkOpen(true)}
            >
              <span aria-hidden="true">+</span>{" "}
              <span className="hidden sm:inline">Add bookmark</span>
              <span className="sm:hidden">Add</span>
            </button>
            <div className="relative" ref={profileMenuRef}>
              <button
                className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-500 font-mono font-bold text-white shadow-md outline-none ring-offset-2 transition hover:scale-105 focus:ring-2 focus:ring-blue-400"
                type="button"
                aria-label="Open account menu"
                aria-expanded={isProfileMenuOpen}
                onClick={() => setIsProfileMenuOpen((isOpen) => !isOpen)}
              >
                B
              </button>
              {isProfileMenuOpen && (
                <div className="absolute right-0 top-12 w-52 rounded-xl border border-blue-100 bg-white p-2 shadow-xl">
                  <p className="border-b border-blue-50 px-3 py-2 font-mono text-xs text-gray-500">
                    Your Bokmarke account
                  </p>
                  <button
                    className="w-full rounded-lg px-3 py-2 text-left font-mono text-sm hover:bg-blue-50"
                    type="button"
                    onClick={() => setIsProfileMenuOpen(false)}
                  >
                    Profile (coming soon)
                  </button>
                  <button
                    className="w-full rounded-lg px-3 py-2 text-left font-mono text-sm hover:bg-blue-50"
                    type="button"
                    onClick={() => setIsProfileMenuOpen(false)}
                  >
                    Settings (coming soon)
                  </button>
                  <button
                    className="w-full rounded-lg px-3 py-2 text-left font-mono text-sm text-red-600 hover:bg-red-50"
                    type="button"
                    onClick={logOut}
                  >
                    Log out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="font-mono text-sm text-gray-500">
              Your saved corners of the internet
            </p>
            <h1 className="suse-mono text-3xl font-bold text-blue-950 sm:text-4xl">
              My Bokmarke
            </h1>
          </div>
          <p className="font-mono text-sm text-gray-500">
            {visibleCollections.length} collection
            {visibleCollections.length === 1 ? "" : "s"}
          </p>
        </div>
        {isLoading ? (
          <div className="rounded-2xl border-2 border-dashed border-blue-200 bg-white px-6 py-16 text-center font-mono text-lg text-gray-500">
            Loading your collections…
          </div>
        ) : loadError ? (
          <div className="rounded-2xl border-2 border-dashed border-red-200 bg-white px-6 py-16 text-center">
            <p className="font-mono text-lg text-red-600">{loadError}</p>
            <button
              className="mt-4 font-mono text-sm font-bold text-blue-600 hover:underline"
              type="button"
              onClick={() => setReloadKey((key) => key + 1)}
            >
              Try again
            </button>
          </div>
        ) : visibleCollections.length ? (
          <div
            className={
              viewMode === "grid"
                ? "flex flex-wrap justify-center sm:justify-start p-2"
                : "flex flex-col items-center"
            }
          >
            {visibleCollections.map((collection) => (
              <div
                className={viewMode === "list" ? "w-full max-w-md m-5" : "m-5"}
                key={collection.domainName}
              >
                <WebsitesCard
                  {...collection}
                  layout={viewMode}
                  onOpen={() =>
                    navigate(
                      `/bokmarke?domain=${encodeURIComponent(collection.domainName)}`,
                    )
                  }
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border-2 border-dashed border-blue-200 bg-white px-6 py-16 text-center">
            {searchQuery.trim() ? (
              <>
                <p className="font-mono text-lg text-blue-950">
                  No bookmark collections match “{searchQuery}”.
                </p>
                <button
                  className="mt-4 font-mono text-sm font-bold text-blue-600 hover:underline"
                  type="button"
                  onClick={() => setSearchQuery("")}
                >
                  Clear search
                </button>
              </>
            ) : (
              <p className="font-mono text-lg text-blue-950">
                You haven’t saved any bookmarks yet.
              </p>
            )}
          </div>
        )}
      </main>

      {isAddBookmarkOpen && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-blue-950/25 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="add-bookmark-title"
        >
          <form
            className="w-full max-w-md rounded-2xl border-2 border-blue-100 bg-white p-6 shadow-2xl"
            onSubmit={addBookmarkCollection}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-sm text-gray-500">
                  Start a new collection
                </p>
                <h2
                  id="add-bookmark-title"
                  className="suse-mono text-2xl font-bold"
                >
                  Add bookmark
                </h2>
              </div>
              <button
                className="rounded-lg p-1 text-gray-500 hover:bg-blue-50"
                type="button"
                aria-label="Close add bookmark dialog"
                onClick={() => setIsAddBookmarkOpen(false)}
              >
                ×
              </button>
            </div>
            <label className="mt-6 block font-mono text-sm text-gray-700">
              Website URL
              <input
                className="mt-2 w-full rounded-xl border border-blue-200 px-3 py-2 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                value={bookmarkUrl}
                onChange={(event) => setBookmarkUrl(event.target.value)}
                placeholder="https://example.com"
                type="url"
                autoFocus
              />
            </label>
            {formError && (
              <p className="mt-2 font-mono text-sm text-red-600">{formError}</p>
            )}
            <div className="mt-6 flex justify-end gap-3">
              <button
                className="rounded-xl px-4 py-2 font-mono text-sm hover:bg-blue-50"
                type="button"
                onClick={() => setIsAddBookmarkOpen(false)}
              >
                Cancel
              </button>
              <button
                className="rounded-xl bg-[rgb(213,231,235)] px-4 py-2 font-mono text-sm font-bold transition hover:scale-105 active:translate-y-0.5"
                type="submit"
              >
                Create collection
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
