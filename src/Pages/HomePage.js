import React, { useState, useEffect } from "react";
import BrandInput from "../components/BrandInput";
import HomePageCard from "../components/HomePageCard";
import BrandOption from "../components/BrandOption";
import BrandNavbar from "../components/BrandNavbar";
import { isDarkMode } from "../utils/darkModeFunction";

import { useSelector, useDispatch } from "react-redux";
import { getCountries } from "../redux/reducers";

const HomePage = () => {
  const [isDark, setIsDark] = useState(isDarkMode());
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);
  useEffect(() => {
    localStorage.setItem("isDark", false);
  }, []);

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="bg-gray-veryLightGrayLMB dark:bg-blue-veryDarkDMB min-h-screen">
        <BrandNavbar dark={(value) => setIsDark(value)} />

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
        {/* {searchedCountries.length !== 0 &&
        searchedCountries.length !== 35 &&
        selectedRegion.length === 0 ? (
          <div className="flex flex-wrap justify-center">
            {searchedCountries.map((country) => (
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
        ) : searchedCountries.length !== 0 ||
          searchedCountries.length !== 0 ||
          selectedRegion.length !== 0 ? (
          <div className="flex flex-wrap justify-center">
            {selectedRegion.map((country) => (
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
        ) : (
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
        )} */}
      </div>
    </div>
  );
};

export default HomePage;
