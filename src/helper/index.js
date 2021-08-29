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
    // console.log(error);
    return error.message;
  }
};

export const getSelectedRegion = async (selected) => {
  try {
    const selectedRegion = await Axios.get(
      `https://restcountries.eu/rest/v2/region/${selected}`
    );
    return selectedRegion.data;
  } catch (error) {
    return error.message;
  }
};
