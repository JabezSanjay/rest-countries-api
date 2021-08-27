import React, { useState, useEffect } from "react";
import BrandInput from "../components/BrandInput";
import HomePageCard from "../components/HomePageCard";
import BrandOption from "../components/BrandOption";
import BrandNavbar from "../components/BrandNavbar";
import { isDarkMode } from "../utils/darkModeFunction";
import { getAllCountries } from "../helper";

const HomePage = () => {
  const [isDark, setIsDark] = useState(isDarkMode());
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    localStorage.setItem("isDark", false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    getAllCountries().then((country) => {
      setCountries(country);
    });
  }, []);

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="bg-gray-veryLightGrayLMB dark:bg-blue-veryDarkDMB min-h-screen">
        <BrandNavbar dark={(value) => setIsDark(value)} />

        <div className="block justify-between lg:flex ">
          <div>
            <BrandInput />
          </div>
          <div>
            <BrandOption />
          </div>
        </div>
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
      </div>
    </div>
  );
};

export default HomePage;