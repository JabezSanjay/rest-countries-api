import React from "react";
import { IoArrowBack } from "react-icons/io5";

const BrandButton = ({ tag = false }) => {
  return (
    <div className="m-2">
      <button className="px-8 py-2 text-blue-dark bg-white-default hover:bg-gray-veryLightGrayLMB rounded shadow-md flex justify-center">
        {!tag && <IoArrowBack className="self-center mr-2 text-xl" />}
        <span className="font-semibold">Back</span>
      </button>
    </div>
  );
};

export default BrandButton;
