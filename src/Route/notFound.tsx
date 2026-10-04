import { Link, useLocation } from "react-router-dom";
import { GradiantButton } from "../components/GradiantBorder/gradiantButton";
import { HomeLogoAncher } from "../components/homeLogoAncher";

function LostSign() {
  return (
    <svg
      aria-label="LOST?"
      className="h-full w-full drop-shadow-2xl"
      fill="none"
      role="img"
      viewBox="0 0 220 200"
    >
      <polygon
        className="text-amber-400"
        points="110 16 204 184 16 184"
        fill="currentColor"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="22"
      />
      <polygon
        className="text-slate-900"
        points="110 30 188 172 32 172"
        fill="currentColor"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="14"
      />
      <polygon
        className="text-amber-300"
        points="110 46 174 161 46 161"
        fill="currentColor"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="8"
      />
      <text
        className="text-slate-900"
        dominantBaseline="middle"
        fill="currentColor"
        fontFamily="SUSE Mono, monospace"
        fontSize="28"
        fontWeight="800"
        letterSpacing="1"
        textAnchor="middle"
        x="110"
        y="132"
      >
        LOST?
      </text>
    </svg>
  );
}

export default function NotFound() {
  const { pathname } = useLocation();

  return (
    <div className="w-full h-screen bg-blue-50 flex">
      <div className="gradient w-[96%] h-[92%] m-auto rounded-2xl shadow-2xl bg-white flex flex-col">
        <div className="flex justify-center mt-[3%]">
          <HomeLogoAncher className="w-[16%]" />
        </div>
        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
          <div className="w-56 sm:w-64">
            <LostSign />
          </div>
          <h1 className="suse-mono mt-8 text-4xl sm:text-5xl text-blue-950">
            Page not found
          </h1>
          <p className="font-mono mt-4 max-w-md text-gray-600">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <p className="font-mono mt-2 max-w-md break-all text-sm text-gray-400">
            {pathname}
          </p>
        </div>
        <div className="flex flex-col items-center mb-[6%]">
          <Link to="/" replace={true}>
            <GradiantButton>Back to Home</GradiantButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
