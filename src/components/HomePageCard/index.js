import React from "react";
import { Link } from "react-router-dom";

const HomePageCard = ({
  countryName,
  countryFlag,
  countryPopulation,
  countryRegion,
  countryCapital,
}) => {
  // console.log(countryName);

  return (
    <Link
      className="mx-14 my-7 cursor-pointer"
      to={`/detail-page/${countryName}`}
    >
      <div className="shadow-md max-w-xs w-64 bg-white-default dark:bg-blue-dark dark:text-white-default  rounded-md">
        <img
          src={countryFlag}
          alt="error"
          className="rounded-t-md h-40 w-72 object-cover"
        />
        <div className="text-sm pb-10 pt-3 px-4" style={{ fontSize: "0.8rem" }}>
          <h1 className="font-extrabold my-3" style={{ fontSize: "1.1rem" }}>
            {countryName}
          </h1>
          <p>
            <span className="font-bold">Population: </span>
            {countryPopulation}
          </p>
          <p>
            <span className="font-bold">Region: </span>
            {countryRegion}
          </p>
          <p>
            <span className="font-bold">Capital: </span>
            {countryCapital}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default HomePageCard;
