import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { accessToken } from "../../accessKey/token";

const url = "https://upayments-studycase-api.herokuapp.com/api/products";

export const getProductsData = createAsyncThunk(
  `products/getProducts`,
  async () => {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return {
      payload: response.data.products,
    };
  }
);

export const deleteProduct = (data) => {
  return {
    type: "DELETE_PRODUCT",
    payload: data,
  };
};
