import React, { useEffect, useState } from "react";
import BrandBorderButton from "../BrandBorderButton";
import { useSelector, useDispatch } from "react-redux";
import { getCountries } from "../../redux/reducers";
import axios from "axios";

const DetailPageCard = ({ match }) => {
  const [country, setCountry] = useState([]);
  const countries = useSelector((state) => state.countries);
  console.log(countries);
  console.log(match);

  useEffect(async () => {
    await axios
      .get(`https://restcountries.eu/rest/v2/name/${match.params.id}`)
      .then((res) => {
        console.log(res.data);
        setCountry(res.data);
      })
      .catch((error) => {
        console.log(error);
        return error.message;
      });
  }, []);

  return (
    <></>
    // <div className="flex mx-20 ">
    //   {country.map((country) => (
    //     <div key={country.name}>
    //       <div>
    //         <img src={country.flag} className="h-96 object-cover" />
    //       </div>
    //       <div className="mx-24 bg-gray-veryLightGrayLMB dark:bg-blue-veryDarkDMB  dark:text-white-default">
    //         <div className="text-3xl font-extrabold my-8">Belgium</div>
    //         <div className="flex">
    //           <div className="mr-32 flex flex-col justify-between h-44">
    //             <p>
    //               <span className="font-bold">Native Name: </span>
    //               {country.nativeName}
    //             </p>
    //             <p>
    //               <span className="font-bold">Population: </span>
    //               {country.population}
    //             </p>
    //             <p>
    //               <span className="font-bold">Region: </span>
    //               {country.region}
    //             </p>
    //             <p>
    //               <span className="font-bold">Sub Region: </span>
    //               {country.subregion}
    //             </p>
    //             <p>
    //               <span className="font-bold">Capital: </span>
    //               {country.capital}
    //             </p>
    //           </div>
    //           <div className=" flex flex-col justify-between h-24">
    //             <p>
    //               <span className="font-bold">Top Level Domain: </span>
    //               {country.topLevelDomain}
    //             </p>
    //             <p>
    //               <span className="font-bold">Currencies: </span>
    //               {country.currencies}
    //             </p>
    //             <p>
    //               <span className="font-bold">Languages: </span>
    //               Europe
    //             </p>
    //           </div>
    //         </div>
    //         <div className="flex mt-14">
    //           <span className="font-bold mr-5">Border countries:</span>
    //           <BrandBorderButton />
    //           <BrandBorderButton />
    //           <BrandBorderButton />
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </div>
  );
};

export default DetailPageCard;
