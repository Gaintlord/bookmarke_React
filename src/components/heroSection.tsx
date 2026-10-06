import { Link } from "react-router-dom";
import Button from "./LiquidGlass/Button";

export const HeroSection = () => {
  return (
    <>
      <div className="flex-2 bg-black/0 flex  justify-center items-end ">
        <img
          className="shadow-2xl w-16 sm:w-20 md:w-20 lg:w-24 2xl:w-28 rounded-[25%]"
          src={"Squarelogo.png"}
        ></img>
      </div>
      <div className="  flex-2 flex w-full max-w-3xl 2xl:max-w-4xl px-4 sm:px-6 mt-6 sm:mt-8 text-center flex-col items-center align-top ">
        <p
          className={`suse bg-black/0 text-gray-900 inline text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl leading-[1.05] text-balance`}
        >
          For every Link that deserves
        </p>
        <p
          className={`suse text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl leading-[1.05] font-mono text-gray-500 max-h-min`}
        >
          To be a Bookmark
        </p>
        <p
          className={`oswald text-black text-base sm:text-lg md:text-xl lg:text-2xl`}
        >
          save links from any part of internet
        </p>
      </div>
      <div className="bg-black/0 text-sm md:text-xl lg:text-2xl xl:text-3xl -mt-5 sm:-mt-2 pb-6 flex flex-1 items-start">
        <Link to="/signup">
          <Button>Sign Up</Button>
        </Link>
      </div>
    </>
  );
};
