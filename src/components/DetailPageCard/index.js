import React, { useEffect, useState } from "react";
import BrandBorderButton from "../BrandBorderButton";

import axios from "axios";
import styled from "styled-components";

const DetailPageCard = ({ id }) => {
  const [country, setCountry] = useState([]);

  console.log(country);

  const preload = (id) => {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${id}`)
      .then((res) => {
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

  const Image = styled.img`
    height: 30rem;
    width: 45rem;
    @media (max-width: 768px) {
      width: 30rem;
    }
  `;

  return (
    <div className="flex w-screen">
      {country.map((countryValue) => (
        <div key={countryValue.nativeName} className="flex pl-20">
          <div>
            <Image
              src={countryValue.flag}
              alt="country"
              className="object-cover"
            />
          </div>
          <div className="mx-20  text-2xl bg-gray-veryLightGrayLMB dark:bg-blue-veryDarkDMB dark:text-white-default">
            <div className="text-5xl font-extrabold my-8">
              {countryValue.name}
            </div>
            <div className="flex">
              <div className="mr-0 flex flex-col justify-between h-64">
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
              <div className=" flex flex-col justify-between h-32">
                <p>
                  <span className="font-bold">Top Level Domain: </span>
                  {countryValue.topLevelDomain}
                </p>
                <p>
                  <span className="font-bold">Currencies: </span>
                  {countryValue.currencies[0].code}
                </p>
                <p>
                  <span className="font-bold">Languages: </span>
                  {countryValue.region}
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
