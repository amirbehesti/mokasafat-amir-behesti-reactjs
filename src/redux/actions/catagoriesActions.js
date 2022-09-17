import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { accessToken } from "../../accessKey/token";

const url = "https://upayments-studycase-api.herokuapp.com/api/categories/";



export const getCatagoriesData = createAsyncThunk(
  `catagories/getCatagories`,
  async () => {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    // console.log(response);
    return {
      payload: response.data.categories,
    };
  }
);
