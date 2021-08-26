import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const BrandInput = () => {
  return (
    <div className="dark">
      <div className="flex px-3 py-3 m-3 align-middle shadow-md w-96 rounded bg-white-default dark:bg-blue-dark dark:text-white-default  ml-3 mt-10 lg:ml-20">
        <AiOutlineSearch className="mx-5 self-center text-xl text-gray-darkGrayLMI dark:text-white-default" />
        <input
          className="border-0 outline-none h-8 w-60 lg:w-72 py-3 dark:bg-blue-dark dark:placeholder-white-default"
          type="text"
          placeholder="Search for a country"
        />
      </div>
    </div>
  );
};

export default BrandInput;
