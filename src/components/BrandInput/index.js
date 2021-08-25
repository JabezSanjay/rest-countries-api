import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const BrandInput = () => {
  return (
    <div>
      <div className="flex px-3 py-3 align-middle shadow-md w-96 rounded">
        <AiOutlineSearch className="mx-5 self-center text-xl text-gray-darkGrayLMI" />
        <input
          className="border-0 outline-none h-3 w-60 md:w-72 py-3"
          type="text"
          placeholder="Search for a country"
        />
      </div>
    </div>
  );
};

export default BrandInput;
