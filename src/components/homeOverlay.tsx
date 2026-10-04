import Folder from "./Folder";
import NotePad from "./NotePad";

export const HomeOverlay = () => {
  return (
    <>
      <div className="absolute w-[18%] h-[30%] top-44 -left-5  text-black rotate-12 hover:scale-105 duration-150">
        <Folder></Folder>
      </div>
      <div className="absolute w-[15%] h-[35%] top-30 left-20 rotate-[-2deg] -z-1 hover:scale-105 hover:rotate-0 duration-350">
        <NotePad></NotePad>
      </div>
      <div className="absolute w-[18%] h-[30%] -bottom-5 left-36 -rotate-3 -z-1 hover:scale-105 duration-150">
        <Folder>
          <img
            className="absolute -top-12 -left-2 w-[25%] rounded-lg m-3"
            src={"youtube/youtubeLogo.png"}
          ></img>
          <img
            className="w-[90%] rounded-xl m-3"
            src={"youtube/youtubeBg1.png"}
          ></img>
          <img
            className="w-[90%] rounded-xl m-3"
            src={"youtube/youtubeBg2.png"}
          ></img>
          <img
            className="w-[90%] rounded-xl m-3"
            src={"youtube/youtubeBg3.png"}
          ></img>
        </Folder>
      </div>
      <div className="absolute w-[18%] h-[30%] bottom-10 right-20 rotate-6 -z-1 hover:scale-105 duration-150">
        <Folder contentClassName="inset-x-[8%] top-[15%] bottom-[10%] flex flex-col items-center justify-center text-center">
          <div className="mb-2 font-mono leading-tight break-words text-[clamp(0.5rem,1.05vw,1rem)]">
            Bookmark from every website
          </div>
          <img className="w-[52%] rounded-xl" src={"webAppIcon.png"}></img>
        </Folder>
      </div>
      <div className="absolute w-[18%] h-[30%] top-24 -right-20 rotate-6 -z-1  hover:scale-105 duration-150 ">
        <Folder></Folder>
      </div>
      <div className="absolute w-[18%] h-[30%] top-64 -right-48 rotate-[20deg] -z-1 hover:scale-105 duration-150 ">
        <Folder></Folder>
      </div>
    </>
  );
};
