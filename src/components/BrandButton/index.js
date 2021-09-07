import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";

const BrandButton = ({ tag = false }) => {
  return (
    <Link className="m-2" to="/">
      <button className="px-8 py-2 text-blue-dark hover:bg-gray-veryLightGrayLMB bg-white-default dark:bg-blue-dark dark:text-white-default rounded shadow-md flex justify-center">
        {!tag && <IoArrowBack className="self-center mr-2 text-xl" />}
        <span className="font-semibold">Back</span>
      </button>
    </Link>
  );
};

export default BrandButton;
