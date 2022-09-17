import React, { useEffect } from "react";
import {Routes,Route} from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProductsData } from "./redux/actions/productActions";
import { getCatagoriesData } from "./redux/actions/catagoriesActions";
import "./App.css";
import Header from "./pages/Header";
import Products from "./pages/Products";
import DetailPage from "./pages/DetailPage";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      await dispatch(getProductsData());
    };
    const getCatagories = async () => {
      await dispatch(getCatagoriesData());
    };
    getCatagories();
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return  (
  <div className="App">
       <Header/>
       <Routes>
          <Route path='/' element={<Products/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/products/:id' element={<DetailPage/>}/>
       </Routes>
    </div>
  );
}

export default App;
