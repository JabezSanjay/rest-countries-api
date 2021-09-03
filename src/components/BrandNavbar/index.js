import React from "react";
import { HiOutlineMoon } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { changeDark } from "../../redux/reducers";

const BrandNavbar = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <nav className="flex justify-between bg-white-default dark:bg-blue-dark text-blue-veryDarkLMT dark:text-white-default shadow p-6 w-full">
        <div className="ml-3 md:ml-16">
          <a href="/" className=" font-extrabold text-base md:text-2xl">
            Where in the world?
          </a>
        </div>
        <div className="text-lg self-center mr-2 md:mr-16 ">
          <button
            className="flex text-base"
            onClick={() => {
              dispatch(changeDark());
            }}
          >
            <HiOutlineMoon className="self-center md:text-xl mr-2" />
            <h6 className="md:text-lg font-semibold">Dark Mode</h6>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default BrandNavbar;
