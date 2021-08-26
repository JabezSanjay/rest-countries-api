import React from "react";
import BrandInput from "../BrandInput";
import HomePageCard from "../HomePageCard";
import BrandOption from "../BrandOption";
import BrandNavbar from "../BrandNavbar";

const HomePage = () => {
  return (
    <div className="bg-gray-veryLightGrayLMB min-h-screen">
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
  );
};

export default HomePage;
