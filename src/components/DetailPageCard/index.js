import React from "react";
import BrandBorderButton from "../BrandBorderButton";
import BrandButton from "../BrandButton";

const DetailPageCard = () => {
  return (
    <div className="mx-40 flex">
      <div className="object-cover">
        <img src="https://restcountries.eu/data/bvt.svg" className="h-96" />
      </div>
      <div className="mx-24">
        <div className="text-3xl font-extrabold my-8">Belgium</div>
        <div className="flex">
          <div className="mr-32 flex flex-col justify-between h-44">
            <p>
              <span className="font-bold">Native Name:</span>
              Beligie
            </p>
            <p>
              <span className="font-bold">Population</span>
              11,319,511
            </p>
            <p>
              <span className="font-bold">Region</span>
              Europe
            </p>
            <p>
              <span className="font-bold">Sub Region</span>
              Western Europe
            </p>
            <p>
              <span className="font-bold">Capital</span>
              Brussels
            </p>
          </div>
          <div className=" flex flex-col justify-between h-24">
            <p>
              <span className="font-bold">Top Level Domain:</span>
              Beligie
            </p>
            <p>
              <span className="font-bold">Currencies</span>
              11,319,511
            </p>
            <p>
              <span className="font-bold">Languages</span>
              Europe
            </p>
          </div>
        </div>
        <div className="flex justify-between bg-gray-darkGrayLMI">
          <span className="font-bold py-2">Border countries</span>
          <BrandBorderButton />
          <BrandBorderButton />
          <BrandBorderButton />
        </div>
      </div>
    </div>
  );
};

export default DetailPageCard;
