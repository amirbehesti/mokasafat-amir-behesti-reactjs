import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../reducers/productReducer";
import catagoriesReducer from "../reducers/catagoriesReducer";

const reducer = {
    products : productReducer,
    catagories : catagoriesReducer
}

const store = configureStore({
    reducer
})


export default store;