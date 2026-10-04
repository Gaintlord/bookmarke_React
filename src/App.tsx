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
    <div className="h-screen w-full bg-white flex flex-col">
      {/* Topbarrrrrrr */}
      <div
        className="absolute w-full flex flex-row justify-between items-center left-0 top-0 text-black 
      h-[8vh] "
      >
        <Topbar />
      </div>

      <div className="relative h-[92vh]  mt-[8vh] m-4 rounded-2xl bg-white gradient z-10 flex-9 border-2 border-blue-100 overflow-hidden flex justify-center items-center flex-col ">
        <div className="text-5xl"></div>
        <HeroSection />
        <HomeOverlay />
        <footer className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-6 font-mono text-xs text-gray-500">
          <Link className="hover:text-blue-900" to="/privacy">
            Privacy Policy
          </Link>
          <Link className="hover:text-blue-900" to="/terms">
            Terms of Service
          </Link>
        </footer>
      </div>
    </div>
  );
}

export default App;
