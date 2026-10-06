import { Link } from "react-router-dom";
import { GradiantButton } from "./GradiantBorder/gradiantButton";
import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
} from "react";
import { OrdinaryButton } from "./ordinaryButton";
import { HomeLogoAncher } from "./homeLogoAncher";
import DownloadIcon from "../accets/svgs/downloadIcon";
import CloseIcon from "../accets/svgs/closingIcon";
import DownloadInstruction from "./downloadInstruction";
import SignUpInstruction from "./signUpInstruction";
import DragNDropInstruction from "./DragDropInstruction";

type CardId = "download" | "signup" | "drag";

const cards: Record<CardId, ReactNode> = {
  download: <DownloadInstruction />,
  signup: <SignUpInstruction />,
  drag: <DragNDropInstruction />,
};

export const Topbar = () => {
  const [showFeatures, setShowFeatures] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [order, setOrder] = useState<CardId[]>(["download", "signup", "drag"]);
  const [sending, setSending] = useState<CardId | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
    },
    [],
  );

  const sendToBack = () => {
    if (sending) return;
    setSending(order[0]);
    timeoutRef.current = window.setTimeout(() => {
      setOrder(([first, ...rest]) => [...rest, first]);
      setSending(null);
    }, 300);
  };

  const handleDeckClick = (e: MouseEvent) => {
    if ((e.target as HTMLElement).closest("a, button")) return;
    sendToBack();
  };

  const handleDeckKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      sendToBack();
    }
  };

  const downloadExtension = () => {
    window.location.href =
      "https://codeload.github.com/Gaintlord/Bokmarke_Extention/zip/refs/heads/master";
  };

  return (
    <header className="relative z-50 flex min-h-[8vh] w-full items-center justify-between gap-2 px-3 py-2 text-black sm:px-4">
      <div className=" flex-3 flex max-w-[40%] items-center justify-center ">
        <HomeLogoAncher className="w-[calc(30%+4px)] max-md:w-[90%] "></HomeLogoAncher>
      </div>
      <nav className="suse-mono hidden flex-2 items-center justify-center px-[1%] text-md text-gray-500 md:flex ">
        <div
          onClick={() => setShowFeatures(true)}
          className="mr-8 cursor-pointer hover:text-gray-900 duration-100"
        >
          Features
        </div>
        <div
          className="ml-8 flex items-center cursor-pointer hover:text-gray-900 duration-100 group"
          onClick={downloadExtension}
        >
          Download
          <div className="size-3 ml-1 mt-0 text-gray-600 group-hover:text-gray-950">
            <DownloadIcon />
          </div>
        </div>
      </nav>
      <div className="hidden flex-3 items-center justify-center text-xs md:flex">
        <div className="z-0 px-[10%] flex text-sm font-mono">
          <Link to="Login" target="_blank">
            <OrdinaryButton>Login</OrdinaryButton>
          </Link>
        </div>
        <div className="z-0 text-sm font-mono font-bold hover:scale-110 duration-300 flex active:translate-y-1 ">
          <Link to="/signup" target="_blank">
            <GradiantButton>Get Started</GradiantButton>
          </Link>
        </div>
      </div>
      <button
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((v) => !v)}
        className="flex size-10 shrink-0 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-xl text-gray-700 hover:bg-blue-50 md:hidden"
      >
        <span
          className={`block h-0.5 w-6 rounded-full bg-current transition-transform duration-200 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
        />
        <span
          className={`block h-0.5 w-6 rounded-full bg-current transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`block h-0.5 w-6 rounded-full bg-current transition-transform duration-200 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
        />
      </button>
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 top-[8vh] z-40 md:hidden"
            onClick={() => setMenuOpen(false)}
          />
          <div className="suse-mono absolute right-3 top-full z-50 flex w-56 flex-col gap-1 rounded-2xl border border-blue-100 bg-white p-3 text-sm text-gray-700 shadow-xl md:hidden">
            <button
              type="button"
              onClick={() => {
                setShowFeatures(true);
                setMenuOpen(false);
              }}
              className="cursor-pointer rounded-xl px-4 py-3 text-left hover:bg-blue-50 hover:text-gray-900"
            >
              Features
            </button>
            <button
              type="button"
              onClick={() => {
                downloadExtension();
                setMenuOpen(false);
              }}
              className="flex items-center gap-2 rounded-xl px-4 py-3 text-left hover:bg-blue-50 hover:text-gray-900"
            >
              Download
              <div className="size-3 text-gray-600">
                <DownloadIcon />
              </div>
            </button>
            <Link
              to="Login"
              target="_blank"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 hover:bg-blue-50 hover:text-gray-900"
            >
              Login
            </Link>
            <Link
              to="/signup"
              target="_blank"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl bg-blue-500 px-4 py-3 text-center font-bold text-white hover:bg-blue-600"
            >
              Get Started
            </Link>
          </div>
        </>
      )}
      {showFeatures && (
        <div
          className="
      fixed inset-0 z-[100]
      flex items-end
      bg-white/30
      backdrop-blur-md
    "
          onClick={() => setShowFeatures(false)}
        >
          <div
            className="
        w-full
        h-[90vh]
        rounded-t-3xl
        shadow-2xl
        p-4 sm:p-6 lg:p-8
        overflow-hidden
        bg-black/20
        animate-slide-up
        flex        
        flex-col
      "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Closing Button */}
            <div className="w-full flex shrink-0 justify-between lg:flex-1">
              <h1 className="text-xl lg:text-2xl flex items-start suse max-md:text-sm ">
                <span className=" text-gray-700 py-2 px-3 suse-mono max-md:rounded-md">
                  Features
                </span>
              </h1>

              <button
                onClick={() => setShowFeatures(false)}
                className="text-2xl cursor-pointer flex items-start"
              >
                <div className="w-9 sm:w-10 lg:w-12 active:scale-90 duration-100 hover:scale-103 ">
                  <CloseIcon />
                </div>
              </button>
            </div>
            {/* Main content */}
            <div className="flex flex-6 min-h-0 items-center justify-center px-4 overflow-y-auto overflow-x-hidden lg:overflow-visible max-md:w-[90%]  max-md:self-center">
              <div className="relative mx-auto w-full max-md:w-[85%] max-w-4xl  lg:h-[34rem]  flex justify-center">
                {order.map((id, i) => {
                  const isSending = sending === id;
                  return (
                    <div
                      key={id}
                      onClick={i === 0 ? handleDeckClick : undefined}
                      onKeyDown={i === 0 ? handleDeckKeyDown : undefined}
                      role={i === 0 ? "button" : undefined}
                      tabIndex={i === 0 ? 0 : undefined}
                      aria-label={
                        i === 0 ? "Show next feature card" : undefined
                      }
                      className={`left-0 top-0 rounded-4xl border-1 border-black/30 transition-transform ${
                        i === 0 ? "relative lg:absolute" : "absolute"
                      } ${
                        isSending
                          ? "pointer-events-none z-40 duration-300 ease-in"
                          : i === 0
                            ? "cursor-pointer duration-[450ms] ease-out"
                            : "pointer-events-none duration-[450ms] ease-out"
                      }`}
                      style={{
                        zIndex: isSending ? 40 : 30 - i,
                        transform: isSending
                          ? "translate(70%, -24px) rotate(6deg) scale(0.92)"
                          : `translate(${i * 20}px, ${i * 8}px) scale(${
                              1 - i * 0.03
                            })`,
                        willChange: "transform",
                      }}
                    >
                      {cards[id]}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
