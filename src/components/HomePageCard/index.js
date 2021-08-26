import React from "react";

const HomePageCard = () => {
  return (
    <div className="shadow-md w-48 bg-white-default m-auto rounded-md">
      <img
        src="https://restcountries.eu/data/umi.svg"
        alt="error"
        className="rounded-t-md"
      />
      <div className="text-sm pb-5 pt-3 px-4" style={{ fontSize: "9px" }}>
        <h1 className="font-extrabold mb-1" style={{ fontSize: "12px" }}>
          Uniited States of America
        </h1>
        <p>
          <span className="font-bold">Population: </span>323,947,000
        </p>
        <p>
          <span className="font-bold">Region: </span>Americas
        </p>
        <p>
          <span className="font-bold">Capital: </span>Washington,D.C.
        </p>
      </div>
    </div>
  );
};

export default HomePageCard;
