import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../reducers/productReducer";
import catagoriesReducer from "../reducers/catagoriesReducer";
import cartReducer from "../reducers/cartReducer";

const reducer = {
    products : productReducer,
    catagories : catagoriesReducer,
    carts:cartReducer,
}

const store = configureStore({
    reducer
})


export default store;