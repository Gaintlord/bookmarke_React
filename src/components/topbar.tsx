import { Link } from "react-router-dom";
import { GradiantButton } from "./GradiantBorder/gradiantButton";

import { OrdinaryButton } from "./ordinaryButton";
import { HomeLogoAncher } from "./homeLogoAncher";
import DownloadIcon from "../accets/svgs/downloadIcon";

export const Topbar = () => {
  return (
    <>
      <div className=" flex-3 flex items-center justify-center ">
        <HomeLogoAncher className="w-[30%] "></HomeLogoAncher>
      </div>
      <div className="suse-mono flex-2 justify-center  items-center flex px-[1%] text-md  text-gray-500 ">
        <div className="mr-8 cursor-pointer hover:text-gray-900 duration-100 ">
          Features
        </div>
        <div className="ml-8 flex items-center cursor-pointer hover:text-gray-900 duration-100 group">
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
    </>
  );
};
