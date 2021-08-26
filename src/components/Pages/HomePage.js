import React from "react";
import BrandInput from "../BrandInput";
import HomePageCard from "../HomePageCard";
import BrandOption from "../BrandOption";
import BrandNavbar from "../BrandNavbar";

const HomePage = () => {
  return (
    <div className="dark">
      <div className="bg-gray-veryLightGrayLMB dark:bg-blue-veryDarkDMB min-h-screen">
        <BrandNavbar />

        <div className="block justify-between lg:flex ">
          <div>
            <BrandInput />
          </div>
          <div>
            <BrandOption />
          </div>
        </div>
        <div>
          <HomePageCard />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
