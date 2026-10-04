import type { ReactNode } from "react";
export default function Folder({
  children,
  contentClassName,
}: Readonly<{ children?: ReactNode; contentClassName?: string }>) {
  return (
    <div className="h-full w-full">
      <div className="absolute z-10 text-white h-full w-full">
        <svg
          viewBox="0 0 500 500"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <defs>
            <clipPath id="folder" clipPathUnits="objectBoundingBox">
              <path d="M 0,0.04 A 0.04,0.04 0,0,1 0.04,0 L 0.32,0 A 0.04,0.04 0,0,1 0.34,0.02 L 0.36,0.06 A 0.04,0.04 0,0,0 0.38,0.08 L 0.96,0.08 A 0.04,0.04 0,0,1 1,0.12 L 1,0.96 A 0.04,0.04 0,0,1 0.96,1 L 0.04,1 A 0.04,0.04 0,0,1 0,0.96 Z" />
            </clipPath>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="currentColor"
            fillOpacity="0.6"
            clipPath="url(#folder)"
          />
        </svg>
        <div className={`absolute text-black ${contentClassName ?? "top-10 m-2"}`}>
          {children}
        </div>
      </div>
      <div>
        <div className="absolute z-0 scale-101 h-full w-full blur-xs text-black/50">
          <svg
            viewBox="0 0 500 500"
            preserveAspectRatio="none"
            className="w-full h-full drop-shadow-2xl"
          >
            <defs>
              <clipPath id="folder" clipPathUnits="objectBoundingBox">
                <path d="M 0,0.04 A 0.04,0.04 0,0,1 0.04,0 L 0.32,0 A 0.04,0.04 0,0,1 0.34,0.02 L 0.36,0.06 A 0.04,0.04 0,0,0 0.38,0.08 L 0.96,0.08 A 0.04,0.04 0,0,1 1,0.12 L 1,0.96 A 0.04,0.04 0,0,1 0.96,1 L 0.04,1 A 0.04,0.04 0,0,1 0,0.96 Z" />
              </clipPath>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="currentColor"
              fillOpacity="0.3"
              clipPath="url(#folder)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
