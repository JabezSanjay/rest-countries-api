import React from "react";
import { HiOutlineMoon } from "react-icons/hi";

const BrandNavbar = () => {
  return (
    <div>
      <nav className="flex justify-between bg-white-default shadow p-6 w-full">
        <div className="ml-3 md:ml-16">
          <a
            href="/"
            className="text-blue-veryDarkLMT font-extrabold text-base md:text-2xl"
          >
            Where in the world?
          </a>
        </div>
        <div className="text-lg self-center mr-2 md:mr-16 ">
          <button className="flex text-base">
            <HiOutlineMoon className="self-center md:text-xl mr-2" />
            <h6 className="text-blue-veryDarkLMT  md:text-lg font-semibold ">
              Dark Mode
            </h6>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default BrandNavbar;
