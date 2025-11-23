import { HeroSection } from "./components/heroSection";
import { HomeOverlay } from "./components/homeOverlay";

import { Topbar } from "./components/topbar";

function App() {
  return (
    <div className="h-screen w-full bg-white flex flex-col">
      {/* Topbarrrrrrr */}
      <div
        className="absolute w-full flex flex-row justify-between items-center left-0 top-0 text-black 
      h-[8vh] "
      >
        <Topbar></Topbar>
      </div>

      <div className="relative h-[92vh]  mt-[8vh] m-4 rounded-2xl bg-white gradient z-10 flex-9 border-2 border-blue-100 overflow-hidden flex justify-center items-center flex-col ">
        {/*  */}
        <button className="bg-amber-300  rounded-2xl min-w-max p-3 text-4xl active:scale-110"
        onClick={async()=>{
          await fetch("http://localhost:8081/api/v1/auth/refresh", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
  credentials:"include"
});
        }}
        >send Cookies</button>
        <div className="text-5xl"></div>
        <HeroSection></HeroSection>
        {/*  */}
        <HomeOverlay></HomeOverlay>
      </div>
    </div>
  );
}

export default App;
