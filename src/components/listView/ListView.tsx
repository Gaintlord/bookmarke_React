import "./Listview.css";
import type { ColorShades } from "../../utils/domainColor";

const Listview = ({
  index,
  image,
  domain,
  AddedOn,
  color,
  link,
}: {
  index: number;
  image: string;
  domain: string;
  AddedOn: string;
  color: ColorShades;
  link: string;
}) => {
  return (
    <div className="w-[90%] h-24 shrink-0 relative bg-gray-400 my-2 rounded-bl-xl rounded-2xl shadow-xl border-2 border-black hover:scale-101 duration-200">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`absolute h-full w-full -top-1 -right-1 ${color[0]} rounded-xl cursor-pointer active:translate-y-1 active:-translate-x-1 duration-400 border-black border-2 p-2 flex item-center`}
      >
        <div className="h-[90%] w-full flex text-xl text-gray-200 oswald-bold items-center">
          <span className="m-2 flex-1 flex items-center">{index}</span>
          <span className="m-2 flex-2 flex items-center">
            <img
              className="h-18 w-44 object-cover border-[1px] rounded-sm"
              src={image}
              alt=""
            />
          </span>
          <span className="m-2 flex-3 flex items-center">{domain}</span>
          {/* date format MMM dd, yyyy */}
          <span className="m-2 flex-3 flex items-center">{AddedOn}</span>
        </div>
      </a>
    </div>
  );
};

export default Listview;
