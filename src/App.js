import React, { useEffect } from "react";
import {Routes,Route} from "react-router-dom";
import { useDispatch } from "react-redux";
import { favoriteProducts } from "./redux/actions/favoriteAction";
import { getProductsData } from "./redux/actions/productActions";
import { getCatagoriesData } from "./redux/actions/catagoriesActions";
import { updateCart } from "./redux/actions/cartActions";
import "./App.css";
import Header from "./pages/Header";
import Products from "./pages/Products";
import DetailPage from "./pages/DetailPage";
import Favorites from "./pages/Favorites";
import AddNewProduct from "./pages/AddNewProduct";
import CartComponent from "./pages/CartComponent";
import NotFound from "./pages/NotFound";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    
    const getData = async () => {
      await dispatch(getProductsData());
    };

    const getCatagories = async () => {
      await dispatch(getCatagoriesData());
    };

    const updateFavorites = async()=>{
      const fromLocal = await localStorage.getItem("favorites");
      if(fromLocal){
          const data = JSON.parse(fromLocal);
          dispatch(favoriteProducts(data));
      }
    };
    const updateCarts = async()=>{
      const prevCarts = await localStorage.getItem("carts");
      if(prevCarts){
          const data = JSON.parse(prevCarts);
          dispatch(updateCart(data));
      }
    };
    getCatagories();
    getData();
    updateFavorites();
    updateCarts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return  (
  <div className="App">
       <Header/>
       <Routes>
          <Route path='/' element={<Products/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/products/:id' element={<DetailPage/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
          <Route path='/addnew' element={<AddNewProduct/>}/>
          <Route path='/cart' element={<CartComponent/>}/>
          <Route path='*' element={<NotFound/>} />
       </Routes>
    </div>
  );
}

export default App;
