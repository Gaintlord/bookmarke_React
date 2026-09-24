import "./websiteCard.css";
import "../../global.css";
import Bookmarke from "../../accets/svgs/bookmark";
import ClockSVG from "../../accets/svgs/clockSVG";

export const WebsitesCard = ({
  domainName,
  color,
  totalbokmarke,
  lastSaved,
  images,
}: {
  domainName: string;
  color: string;
  totalbokmarke: string;
  lastSaved: string;
  images: string[];
}) => {
  const domain = domainName.split(".");
  return (
    <div className="relative h-80 w-56 m-10 bg-gray-400 rounded-bl-xl rounded-2xl shadow-xl border-2 border-black hover:scale-105 duration-300">
      <div
        className={`shineEffect absolute h-full w-full -top-2 -right-2 ${color}  rounded-xl cursor-pointer  active:translate-y-2 active:-translate-x-2 duration-400 border-black border-2`}
      >
        <div className="h-full flex flex-col rounded-xl mx-2">
          <div className="px-2 flex-2 flex">
            <div className="flex-1 flex flex-row">
              <div className="flex-1 flex justify-center items-center">
                <div className="relative bg-white rounded-full h-12 w-12 flex justify-center items-center z-0  shadow-2xl">
                  <img
                    className="w-7 h-7 object-contain -rotate-6"
                    src={`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${domainName}&size=128`}
                    alt=""
                  />
                </div>
              </div>
              <div className="flex-3 flex items-center justify-end  text-gray-50 oswald-xbold">
                <div className="m-1 overflow-hidden">
                  <span className="text-[32px] text-black">{domain[0]}</span>
                  <span className="text-md text-black">.{domain[1]}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-3 my-5 flex items-start justify-center">
            <div className="relative w-42 h-24 group ">
              {images[2] && (
                <div className="size-full opacity-75 absolute top-0 left-0 -rotate-6 group-hover:-rotate-0 group-hover:top-7 group-hover:left-5 transition-all duration-500 flex justify-between items-center shadow-lg overflow-hidden border-2 border-black">
                  {" "}
                  <img src={images[2]} className="object-contain rounded-sm" />
                </div>
              )}
              {images[1] && (
                <div className="size-full opacity-85 absolute top-0 left-0 rotate-6 group-hover:-rotate-0 group-hover:-top-7 group-hover:-left-5 transition-all duration-500 flex justify-between items-center shadow-lg overflow-hidden border-2 border-black">
                  {" "}
                  <img src={images[1]} className="object-contain rounded-sm" />
                </div>
              )}
              <div className="size-full overflow-hidden absolute group-hover:rotate-3 duration-500 rounded-sm flex justify-between items-center shadow-lg border-2 border-black">
                <img
                  src={images[0] ?? "/plainLogo.png"}
                  className="object-contain rounded-sm "
                />
              </div>
            </div>
            <div className=""></div>
          </div>
          <div className="flex-2 mb-2">
            <div className="text-2xl oswald-xbold -mt-2 flex justify-center text-gray-200">
              My Bokmarke
            </div>
            <div className="oswald-bold text-gray-200 mx-2">
              <div className="flex items-center">
                <div className="size-4 mr-1 mt-1">
                  <Bookmarke />
                </div>
                Bookmarke:
                <div className="text-gray-900 oswald ml-2 oswald-xbold ">
                  {totalbokmarke}
                </div>
              </div>
              <div className="flex items-center mt-1">
                <div className="size-4 mr-1">
                  <ClockSVG />
                </div>
                Last Saved:
                <div className="text-gray-900 oswald-xbold ml-2">
                  {lastSaved}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
