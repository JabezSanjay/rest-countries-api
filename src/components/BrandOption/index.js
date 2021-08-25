import React, { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import OutsideAlerter from "../utils/OutsideAlerter";

const BrandOption = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [regionName, setRegionName] = useState("Filter by Region");

  const handleShow = () => {
    setIsOpen(!isOpen);
  };

  const regions = [
    {
      name: "Africa",
      value: "africa",
    },
    {
      name: "America",
      value: "america",
    },
    {
      name: "Asia",
      value: "asia",
    },
    {
      name: "Europe",
      value: "europe",
    },
    {
      name: "Oceania",
      value: "oceania",
    },
  ];

  const handleClick = (value, name) => {
    console.log(value);
    setIsOpen(false);
    setRegionName(name);
  };

  return (
    <>
      <div className="shadow-md bg-white-default w-60 flex justify-center text-blue-veryDarkLMT rounded-lg m-4 mr-2 md:mr-20 mt-10">
        <button
          className="text-blue-veryDarkLM font-semibold p-4 text-sm flex"
          onClick={handleShow}
        >
          <span>{regionName}</span>
          <GoChevronDown className="self-center ml-20" />
        </button>
      </div>
      {isOpen && (
        <div className="shadow-md bg-white-default w-60 text-blue-veryDarkLMT rounded-lg mt-2 ml-4">
          <OutsideAlerter open={(value) => setIsOpen(value)}>
            <ul className="list-none text-blue-veryDarkLM  text-sm font-semibold pl-5 py-4">
              {regions.map((region) => (
                <li
                  id={region.value}
                  className="h-7 cursor-pointer hover:text-gray-darkGrayLMI"
                  onClick={() => handleClick(region.value, region.name)}
                  key={region.value}
                >
                  {region.name}
                </li>
              ))}
            </ul>
          </OutsideAlerter>
        </div>
      )}
    </>
  );
};

export default BrandOption;
