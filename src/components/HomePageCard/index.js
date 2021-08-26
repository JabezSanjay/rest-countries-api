import React from "react";

const HomePageCard = () => {
  return (
    <div className="dark">
      <div className="shadow-md max-w-xs w-64 bg-white-default dark:bg-blue-dark dark:text-white-default  m-auto rounded-md">
        <img
          src="https://restcountries.eu/data/umi.svg"
          alt="error"
          className="rounded-t-md h-36"
        />
        <div className="text-sm pb-10 pt-3 px-4" style={{ fontSize: "0.8rem" }}>
          <h1 className="font-extrabold my-3" style={{ fontSize: "1.1rem" }}>
            United States of America
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
    </div>
  );
};

export default HomePageCard;
