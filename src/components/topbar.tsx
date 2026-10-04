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
  return (
    <>
      <div className=" flex-3 flex items-center justify-center ">
        <HomeLogoAncher className="w-[30%] "></HomeLogoAncher>
      </div>
      <div className="suse-mono flex-2 justify-center  items-center flex px-[1%] text-md  text-gray-500 ">
        <div
          onClick={() => setShowFeatures(true)}
          className="mr-8 cursor-pointer hover:text-gray-900 duration-100"
        >
          Features
        </div>
        <div
          className="ml-8 flex items-center cursor-pointer hover:text-gray-900 duration-100 group"
          onClick={() =>
            (window.location.href =
              "https://codeload.github.com/Gaintlord/Bokmarke_Extention/zip/refs/heads/master")
          }
        >
          Download
          <div className="size-3 ml-1 mt-0 text-gray-600 group-hover:text-gray-950">
            <DownloadIcon />
          </div>
        </div>
      </div>
      <div
        className="flex-3 flex justify-center 
      text-xs "
      >
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
        p-8
        bg-black/20
        animate-slide-up
        flex        
        flex-col
      "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Closing Button */}
            <div className="w-full flex flex-1 justify-between">
              <h1 className="text-3xl flex items-start suse ">
                <span className="rounded-2xl bg-blue-500 py-2 px-3 text-slate-700">
                  Features
                </span>
              </h1>

              <button
                onClick={() => setShowFeatures(false)}
                className="text-2xl cursor-pointer flex items-start"
              >
                <div className="w-16">
                  <CloseIcon />
                </div>
              </button>
            </div>
            {/* Main content */}
            <div className=" flex flex-6 justify-center items-center">
              <div className="relative h-[34rem] w-[80vw] left-[25vw]">
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
                      className={`absolute left-0 top-0 rounded-4xl border-1 border-black/30 transition-transform ${
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
    </>
  );
};
