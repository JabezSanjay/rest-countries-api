import React, { useState, useEffect } from "react";
import BrandInput from "../components/BrandInput";
import HomePageCard from "../components/HomePageCard";
import BrandOption from "../components/BrandOption";
import BrandNavbar from "../components/BrandNavbar";

import { useSelector, useDispatch } from "react-redux";
import { getCountries } from "../redux/reducers";

const HomePage = () => {
  const isDark = useSelector((state) => state.isDark);
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  useEffect(() => {
    dispatch(getCountries());
  }, []);

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="bg-gray-veryLightGrayLMB dark:bg-blue-veryDarkDMB min-h-screen">
        <BrandNavbar />

        <div className="block justify-between lg:flex">
          <div>
            <BrandInput />
          </div>
          <div>
            <BrandOption />
          </div>
        </div>
        {
          <div className="flex flex-wrap justify-center">
            {countries.map((country) => (
              <HomePageCard
                key={country.name}
                countryName={country.name}
                countryFlag={country.flag}
                countryPopulation={country.population}
                countryRegion={country.region}
                countryCapital={country.capital}
              />
            ))}
          </div>
        }
      </div>
    </div>
  );
};

export default HomePage;
