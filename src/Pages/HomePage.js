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
  const [searchedCountries, setSearchedCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState([]);
  // console.log(searchedCountries);

  useEffect(() => {
    localStorage.setItem("isDark", false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    getAllCountries().then((country) => {
      setCountries(country);
    });
  }, []);

  // console.log(countries.length);
  console.log(searchedCountries.length);
  // console.log(selectedRegion.length);

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="bg-gray-veryLightGrayLMB dark:bg-blue-veryDarkDMB min-h-screen">
        <BrandNavbar dark={(value) => setIsDark(value)} />

        <div className="block justify-between lg:flex ">
          <div>
            <BrandInput
              onSearchCountries={(value) => {
                setSearchedCountries(value);
                setSelectedRegion([]);
              }}
            />
          </div>
          <div>
            <BrandOption
              onSelectedRegion={(value) => {
                setSelectedRegion(value);
                setSearchedCountries([]);
              }}
            />
          </div>
        </div>
        {searchedCountries.length !== 0 &&
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
        )}
      </div>
    </div>
  );
};

export default HomePage;
