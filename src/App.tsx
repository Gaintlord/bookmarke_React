import { Link, Navigate } from "react-router-dom";
import { HeroSection } from "./components/heroSection";
import { HomeOverlay } from "./components/homeOverlay";

import { Topbar } from "./components/topbar";
import { useSession } from "./utils/useSession";

function App() {
  const session = useSession();

  if (session === "ready") return <Navigate to="/dashboard" replace />;
  if (session === "checking") return null;

  return (
    <div className="min-h-dvh w-full bg-white flex flex-col overflow-x-clip">
      <Topbar />

      <div className="relative flex-1 mx-2 sm:mx-4 mb-2 sm:mb-4 rounded-2xl bg-white gradient z-10 border-2 border-blue-100 overflow-hidden flex justify-center items-center flex-col ">
        <HeroSection />
        <HomeOverlay />
        <footer className="absolute bottom-3 left-1/2 z-20 flex justify-between  ma  -translate-x-1/2 gap-4 sm:gap-8 font-mono text-[10px] sm:text-xs text-gray-500">
          <Link
            className="hover:text-blue-900 whitespace-nowrap "
            to="/privacy"
          >
            Privacy Policy
          </Link>
          <Link className="hover:text-blue-900  whitespace-nowrap" to="/terms">
            Terms of Service
          </Link>
        </footer>
      </div>
    </div>
  );
}

export default App;
