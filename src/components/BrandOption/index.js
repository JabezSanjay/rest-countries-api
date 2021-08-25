import React, { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import OutsideAlerter from "../utiles/OutsideAlerter";

const BrandOption = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleShow = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="shadow-md bg-white-default w-60 flex justify-center text-blue-veryDarkLMT rounded-lg">
        <OutsideAlerter open={(value) => setIsOpen(value)}>
          <button
            className=" text-blue-veryDarkLM font-extrabold p-4 text-sm flex"
            onClick={handleShow}
          >
            <span>Filter by Regions</span>
            <GoChevronDown className="self-center ml-20" />
          </button>
        </OutsideAlerter>
      </div>
      {isOpen && (
        <div className="shadow-md bg-white-default w-60 text-blue-veryDarkLMT rounded-lg mt-2">
          <ul className="list-none text-blue-veryDarkLM  text-sm font-bold pl-5 py-4">
            <li className="h-7 cursor-pointer hover:text-gray-darkGrayLMI">
              Africa
            </li>
            <li className="h-7 hover:text-gray-darkGrayLMI">America</li>
            <li className="h-7 hover:text-gray-darkGrayLMI">Asia</li>
            <li className="h-7 hover:text-gray-darkGrayLMI">Europe</li>
            <li className="h-7">Oceania</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default BrandOption;
