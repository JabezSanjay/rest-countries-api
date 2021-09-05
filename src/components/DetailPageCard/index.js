import React from "react";
import BrandBorderButton from "../BrandBorderButton";
import BrandButton from "../BrandButton";

const DetailPageCard = () => {
  return (
    <div className="flex mx-20 ">
      <div>
        <img
          src="https://restcountries.eu/data/bvt.svg"
          className="h-96 object-cover"
        />
      </div>
      <div className="mx-24 bg-gray-veryLightGrayLMB dark:bg-blue-veryDarkDMB  dark:text-white-default">
        <div className="text-3xl font-extrabold my-8">Belgium</div>
        <div className="flex">
          <div className="mr-32 flex flex-col justify-between h-44">
            <p>
              <span className="font-bold">Native Name: </span>
              Beligie
            </p>
            <p>
              <span className="font-bold">Population: </span>
              11,319,511
            </p>
            <p>
              <span className="font-bold">Region: </span>
              Europe
            </p>
            <p>
              <span className="font-bold">Sub Region: </span>
              Western Europe
            </p>
            <p>
              <span className="font-bold">Capital: </span>
              Brussels
            </p>
          </div>
          <div className=" flex flex-col justify-between h-24">
            <p>
              <span className="font-bold">Top Level Domain: </span>
              Beligie
            </p>
            <p>
              <span className="font-bold">Currencies: </span>
              11,319,511
            </p>
            <p>
              <span className="font-bold">Languages: </span>
              Europe
            </p>
          </div>
        </div>
        <div className="flex mt-14">
          <span className="font-bold mr-5">Border countries:</span>
          <BrandBorderButton />
          <BrandBorderButton />
          <BrandBorderButton />
        </div>
      </div>
    </div>
  );
};

export default DetailPageCard;
