import React from "react";
import BrandInput from "./components/BrandInput";
import BrandNavbar from "./components/BrandNavbar";
import BrandOption from "./components/BrandOption";
import HomePageCard from "./components/HomePageCard";

const Routes = () => {
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

export default Routes;
