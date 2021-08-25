import React from "react";
import { HiOutlineMoon } from "react-icons/hi";

const BrandNavbar = () => {
  return (
    <div>
      <nav className="flex justify-between bg-white-default shadow p-6 w-full">
        <div>
          <a
            href="/"
            className="text-blue-veryDarkLMT font-extrabold text-base md:text-2xl"
          >
            Where in the world?
          </a>
        </div>
        <div className="text-lg self-center">
          <button className="flex">
            <HiOutlineMoon className="self-center text-base md:text-xl mr-2" />
            <h6 className="text-blue-veryDarkLMT font-semibold ">Dark Mode</h6>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default BrandNavbar;
