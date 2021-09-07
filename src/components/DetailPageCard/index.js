import React, { useEffect, useState } from "react";
import BrandBorderButton from "../BrandBorderButton";
import { useSelector, useDispatch } from "react-redux";
import { getCountries } from "../../redux/reducers";
import axios from "axios";

const DetailPageCard = ({ id }) => {
  const [country, setCountry] = useState([]);
  const countries = useSelector((state) => state.countries);
  // console.log(countries);
  console.log(country);

  const preload = (id) => {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${id}`)
      .then((res) => {
        // console.log(res.data);
        setCountry(res.data);
      })
      .catch((error) => {
        console.log(error);
        return error.message;
      });
  };

  useEffect(() => {
    preload(id);
  }, []);

  return (
    <div className="flex mx-20 ">
      {country.map((countryValue) => (
        <div key={countryValue.nativeName}>
          <div>
            <img
              src={countryValue.flag}
              alt="country"
              className="h-96 object-cover"
            />
          </div>
          <div className="mx-24 bg-gray-veryLightGrayLMB dark:bg-blue-veryDarkDMB  dark:text-white-default">
            <div className="text-3xl font-extrabold my-8">Belgium</div>
            <div className="flex">
              <div className="mr-32 flex flex-col justify-between h-44">
                <p>
                  <span className="font-bold">Native Name: </span>
                  {countryValue.nativeName}
                </p>
                <p>
                  <span className="font-bold">Population: </span>
                  {countryValue.population}
                </p>
                <p>
                  <span className="font-bold">Region: </span>
                  {countryValue.region}
                </p>
                <p>
                  <span className="font-bold">Sub Region: </span>
                  {countryValue.subregion}
                </p>
                <p>
                  <span className="font-bold">Capital: </span>
                  {countryValue.capital}
                </p>
              </div>
              <div className=" flex flex-col justify-between h-24">
                <p>
                  <span className="font-bold">Top Level Domain: </span>
                  {countryValue.topLevelDomain}
                </p>
                <p>
                  <span className="font-bold">Currencies: </span>
                  {country.currencies}
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
      ))}
    </div>
  );
};

export default DetailPageCard;
