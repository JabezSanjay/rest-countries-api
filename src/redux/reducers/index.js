import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  countries: [],
  pending: false,
  error: false,
  isDark: false,
};

export const getCountries = createAsyncThunk(
  "countries/getCountries",
  async (value = "all") => {
    if (value == "all") {
      const res = await axios.get(`https://restcountries.eu/rest/v2/all`);
      return res.data;
    } else {
      const res = await axios.get(`https://restcountries.eu/rest/v2/${value}`);
      return res.data;
    }
  }
);

export const countrySlice = createSlice({
  name: "countries",
  initialState,
  extraReducers: {
    [getCountries.pending]: (state) => {
      state.pending = true;
      console.log(state.pending);
    },
    [getCountries.fulfilled]: (state, action) => {
      state.pending = false;
      state.countries = action.payload;
      console.log(state.countries);
    },
    [getCountries.rejected]: (state) => {
      state.pending = false;
      state.error = true;
      console.log(state.error);
    },
  },
});

// Action creators are generated for each case reducer function
// export const { incrementByAmount } = counterSlice.actions;

export default countrySlice.reducer;
