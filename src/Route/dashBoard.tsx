import { useEffect, useState } from "react";
import { WebsitesCard } from "../components/websiteCard/WebsiteCard";

const Dashboard = () => {
  const [imageList, setImageList] = useState<string[]>();
  const putImages = async () => {
    setImageList([
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1z3WO2y5h7YkHljxIsvwuOxP21OE_8tnedA&s",
      "https://cdn.pixabay.com/photo/2016/11/21/06/53/beautiful-natural-image-1844362_640.jpg",
      "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      "https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg",
    ]);
  };
  useEffect(() => {
    putImages;
  }, []);

  return (
    <div className="bg-blue-100 w-full h-screen flex justify-center">
      {/* Mainpage */}
      <div className=" m-1 w-[66.6%] h-auto rounded-2xl">
        
        <WebsitesCard
          imageLink="https://www.svgrepo.com/show/111232/youtube.svg"
          websiteName="Youtube.com"
          lightColor={"rgb(233,201,201)"}
          darkColor={"rgb(230,14,14)"}
          borderColor={"255, 0, 0"}
          thumbNailImg={imageList}
        />
        <WebsitesCard
          imageLink="https://www.svgrepo.com/show/355256/spotify.svg"
          websiteName="Spotify.com"
          lightColor={"rgb(233,201,201)"}
          darkColor={"rgb(120,255,140)"}
          borderColor={"255, 0, 0"}
          thumbNailImg={imageList}
        />

        <WebsitesCard
          imageLink="https://www.svgrepo.com/show/475640/chrome-color.svg"
          websiteName="Chrome"
          lightColor={"rgb(233,201,201)"}
          darkColor={"yellow"}
          borderColor={"255, 0, 0"}
          thumbNailImg={imageList}
        />
      </div>
    </div>
  );
};

export default Dashboard;
