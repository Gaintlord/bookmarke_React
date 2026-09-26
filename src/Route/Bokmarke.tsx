import { useEffect, useRef, useState } from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { clearAccessToken, getAccessToken } from "../utils/accessTokenStore";
import { HomeLogoAncher } from "../components/homeLogoAncher";
import Listview from "../components/listView/ListView";
import {
  fetchBookmarksByDomain,
  type DomainBookmark,
} from "../utils/domainBookmarks";
import { getDomainColor } from "../utils/domainColorStore";

const formatAddedOn = (isoDate: string) => {
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

const Bokmarke = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const domain = searchParams.get("domain") ?? "";
  const profileMenuRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [bookmarks, setBookmarks] = useState<DomainBookmark[]>([]);
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
    if (!domain || !getAccessToken()) return;
    let cancelled = false;
    setIsLoading(true);
    setLoadError("");

    fetchBookmarksByDomain(domain)
      .then((data) => {
        if (cancelled) return;
        setBookmarks(data);
      })
      .catch((error: Error & { status?: number }) => {
        if (cancelled) return;
        if (error.status === 401) {
          clearAccessToken();
          navigate("/Login", { replace: true });
          return;
        }
        setLoadError("Could not load your bookmarks. Please try again.");
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [domain, navigate, reloadKey]);

  if (!getAccessToken()) return <Navigate to="/Login" replace />;
  if (!domain) return <Navigate to="/dashboard" replace />;

  const logOut = () => {
    clearAccessToken();
    navigate("/Login", { replace: true });
  };

  const colorClass = getDomainColor(domain);
  const visibleBookmarks = bookmarks.filter((bookmark) =>
    bookmark.link.toLowerCase().includes(searchQuery.trim().toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-blue-50 text-blue-950">
      <header className="sticky top-0 z-30 border-b-2 border-blue-100 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex min-h-18 max-w-7xl flex-wrap items-center gap-3 px-4 py-3 sm:flex-nowrap sm:px-6">
          <HomeLogoAncher className="w-30 shrink-0 sm:w-36" disableLink />
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
              className="rounded-xl bg-[rgb(213,231,235)] px-3 py-2 font-mono text-sm font-bold transition hover:scale-105 active:translate-y-0.5 sm:px-4"
              type="button"
              onClick={() => navigate("/dashboard")}
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
      {/* strictly Placeholder */}
      <div className=" w-full flex justify-center">
        <div className="w-[50vw] flex flex-col items-center">
          <div
            className={`w-[90%] h-14 relative bg-gray-400 my-3 rounded-bl-xl rounded-2xl shadow-xl border-2 border-black `}
          >
            <div
              className={`absolute h-full w-full -top-0.5 -right-0.5 ${colorClass[2]} rounded-xl cursor-pointer  active:translate-y-0.5 active:-translate-x-0.5 duration-400 border-black border-2 p-2 flex items-center`}
            >
              <div className="h-[80%] w-full flex text-xl text-gray-900 oswald-bold">
                <span className="m-2 pl-2 flex-1 flex items-center">#</span>
                <span className=" m-2 pl-2 flex-2 flex items-center">
                  Bokmarke
                </span>
                <span className=" m-2 pl-2 flex-3 flex items-center">
                  Website
                </span>
                <span className=" m-2 pl-2 flex-3 flex items-center">
                  Added on
                </span>
              </div>
            </div>
          </div>
          {isLoading ? (
            <div className="w-[90%] my-2 rounded-2xl border-2 border-dashed border-blue-200 bg-white px-6 py-16 text-center font-mono text-lg text-gray-500">
              Loading your bokmarke…
            </div>
          ) : loadError ? (
            <div className="w-[90%] my-2 rounded-2xl border-2 border-dashed border-red-200 bg-white px-6 py-16 text-center">
              <p className="font-mono text-lg text-red-600">{loadError}</p>
              <button
                className="mt-4 font-mono text-sm font-bold text-blue-600 hover:underline"
                type="button"
                onClick={() => setReloadKey((key) => key + 1)}
              >
                Try again
              </button>
            </div>
          ) : visibleBookmarks.length ? (
            visibleBookmarks.map((bookmark, index) => (
              <Listview
                key={`${bookmark.link}-${index}`}
                index={index + 1}
                image={bookmark.image}
                domain={domain}
                AddedOn={formatAddedOn(bookmark.addedAtDate)}
                color={colorClass}
                link={bookmark.link}
              />
            ))
          ) : (
            <div className="w-[90%] my-2 rounded-2xl border-2 border-dashed border-blue-200 bg-white px-6 py-16 text-center">
              {searchQuery.trim() ? (
                <>
                  <p className="font-mono text-lg text-blue-950">
                    No bookmarks match “{searchQuery}”.
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
                  No bookmarks saved from {domain} yet.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bokmarke;
