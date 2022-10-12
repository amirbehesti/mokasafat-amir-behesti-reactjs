import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductUrl } from "../../api/urls";

export const getProductsData = createAsyncThunk(
  `products/getProducts`,
  async () => {
    const response = await axios.get(ProductUrl);
    // console.log(response);
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

export const newProductAction = (data)=>{
  return {
    type: "NEW_PRODUCT",
    payload: data,
  }
}


// , {
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${accessToken}`,
//   },
// }