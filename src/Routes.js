import React from "react";
import BrandInput from "./components/BrandInput";
import BrandNavbar from "./components/BrandNavbar";

const Routes = () => {
  return (
    <div className="bg-gray-veryLightGrayLMB">
      <div>
        <BrandNavbar />
      </div>
      <div>
        <BrandInput />
      </div>
    </div>
  );
};

export default Routes;
