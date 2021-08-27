import Axios from "axios";

export const getAllCountries = async () => {
  try {
    const countries = await Axios.get("https://restcountries.eu/rest/v2/all");
    return countries.data;
  } catch (error) {
    return error;
  }
};

export const getSearchCountries = async (search) => {
  try {
    const searchedCountries = await Axios.get(
      `https://restcountries.eu/rest/v2/name/${search}`
    );
    return searchedCountries.data;
  } catch (error) {
    return error;
  }
};
