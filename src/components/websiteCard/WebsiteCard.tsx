import type { CSSProperties } from "react";
import "./websiteCard.css";
import { useNavigate } from "react-router-dom";
export const WebsitesCard = ({
  imageLink,
  websiteName,
  borderColor,
  lightColor,
  darkColor,
  thumbNailImg,
}: {
  imageLink: string;
  websiteName: string;
  borderColor: string;
  lightColor: string;
  darkColor: string;
  thumbNailImg: string[] | undefined;
}) => {
  thumbNailImg;
  const navigate = useNavigate();

  function allLinkedForClickedCard() {
    navigate("/userlinks");
  }
  return (
    <div
      className="WebsiteCard w-72 h-[406px] rounded-xl bg-black cursor-pointer"
      onClick={allLinkedForClickedCard}
      style={
        {
          "--border-color": borderColor,
          "--dark-color": darkColor,
          "--light-color": lightColor,
        } as CSSProperties
      }
    >
      <div className="h-14 my-5 mx-4 flex justify-between ">
        <img src={imageLink} className="" />
        <h1 className="self-center text-3xl oswald">{websiteName}</h1>
      </div>
      <div className=" my-10 flex justify-center">
        <div className="relative w-[60%] rounded-md h-24 overflow-visible z-50">
          <div className="absolute w-full h-full border-2 overflow-hidden rounded-sm z-[3]">
            <img
              className="w-full h-full object-cover object-center"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmT0o7S6i00z6iQDy7UVe8e6-sPYQ-f6_WJw&s"
              alt=""
            />
          </div>
          <div className="absolute overflow-hidden border-2 rotate-12 -inset-1 z-[2]">
            <img
              className="object-cover"
              src="https://i.natgeofe.com/n/f7facfef-285c-4171-b58a-3c4653d11872/2019-travel-photo-contest-epic-landscapes035.jpg"
              alt=""
            />
          </div>
          <div className="absolute object-fill -inset-1 overflow-hidden border-2 -rotate-12 z-[1]">
            <img
              src="https://media.istockphoto.com/id/2130934199/photo/amazing-scenery-at-a-mountain-lake-in-the-bavarian-alps.jpg?s=612x612&w=0&k=20&c=_veXqFDnbN_A2aUQ5s5tCvOJRsYer3LDmwHyUPKLwZM="
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="mx-4  text-3xl oswald">My Bokmärke</div>
      <div className="bg-yellow-300 m-4 mb-4 flex flex-col">
        <div className="flex-1 flex justify-between text-sm">
          <div>41 marks</div>
          <div>CREATED: 25 Nov 2025</div>
        </div>
        <div className="flex-1 flex justify-between">
          <div>l</div>
          <div>Last saved:1 Dec 2015</div>
        </div>
      </div>
    </div>
  );
};
