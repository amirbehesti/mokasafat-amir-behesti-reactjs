import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CategoriesUrl } from "../../api/urls";




export const getCatagoriesData = createAsyncThunk(
  `catagories/getCatagories`,
  async () => {
    const response = await axios.get(CategoriesUrl);
    // console.log(response.data);
    return {
      payload: response.data,
    };
  }
);
