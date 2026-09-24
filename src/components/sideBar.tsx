import { HomeLogoAncher } from "./homeLogoAncher";

export const DashBoardSideBar = () => {
  return (
    <>
      <div className="bg-violet-300 h-full p-4 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between ">
          <div className="w-[75%]">
            <HomeLogoAncher />
          </div>
          <div className=""> x- </div>
        </div>
        {/* rest of SideBar */}
        <div className="bg-green-200 my-10">
          <div></div>
        </div>
      </div>
    </>
  );
};

export default DashBoardSideBar;
