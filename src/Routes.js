import React from "react";
import BrandInput from "./components/BrandInput";
import BrandNavbar from "./components/BrandNavbar";
import BrandOption from "./components/BrandOption";

const Routes = () => {
  return (
    <div className="bg-gray-veryLightGrayLMB min-h-screen">
      <div>
        <BrandNavbar />
      </div>
      <div>
        <BrandInput />
      </div>
      <div>
        <BrandOption />
      </div>
    </div>
  );
};

export default Routes;
