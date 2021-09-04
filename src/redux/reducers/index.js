import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  countries: [],
  country: [],
  pending: false,
  error: false,
  isDark: false,
  selectedRegion: "Filter Region",
};

export const getCountries = createAsyncThunk(
  "countries/getCountries",
  async (value = "all") => {
    if (value === "all") {
      const res = await axios.get(`https://restcountries.eu/rest/v2/all`);
      return res.data;
    } else {
      const res = await axios.get(`https://restcountries.eu/rest/v2/${value}`);
      console.log(res.data);
      return res.data;
    }
  }
);

export const countrySlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    changeDark: (state) => {
      state.isDark = !state.isDark;
    },
    changeSelectedRegion: (state, action) => {
      state.selectedRegion = action.payload;
    },
  },
  extraReducers: {
    [getCountries.pending]: (state) => {
      state.pending = true;
    },
    [getCountries.fulfilled]: (state, action) => {
      state.pending = false;
      state.countries = action.payload;
    },
    [getCountries.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeDark, changeSelectedRegion } = countrySlice.actions;

export default countrySlice.reducer;
