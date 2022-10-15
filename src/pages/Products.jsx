import React,{useState} from "react";
import FadeLoader from "react-spinners/FadeLoader";
import { useSelector,useDispatch } from "react-redux";
import EachProduct from "./EachProduct";
import Pagination from "./Pagination";
import { searchProduct } from "../redux/actions/searchActions";


function Products() {
  const data = useSelector((state) => state);
  const { filterdData, productData,filterTerm} = data.products;
  const dispatch = useDispatch();
  const [interval,setInterval] = useState();
  const [input,setInput] = useState("");

  const debounce = (e)=>{
    setInput(e.target.value);
    if(interval) clearInterval(interval);
    // if(!e.target.value)return;
    const newInterval = setTimeout(()=>{
      dispatch(searchProduct(e.target.value));
    },700);
    setInterval(newInterval);
  }

  const [perPage] = useState(10);
  
  const [pagination, setPagination] = useState({
    start: 0,
    end: perPage
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };



  return (
    <>
      <div className="info">
        <input value={input} onChange={debounce} className="searchBox" type="text" placeholder="Search products..."/>
      </div>

      <div className="info">
        <h5>Showing {filterTerm.split("")[0].toUpperCase()+filterTerm.substr(1,filterTerm.length)} Products</h5>
      </div>

      <div className="ProductContainer">
        {filterdData.length && productData.length ? (
          filterdData.slice(pagination.start, pagination.end).map((item, index) => {
            return <EachProduct item={item} key={index} />;
          })
        ) : filterdData.length === 0 && productData.length > 0 ? (
          <div className="product-loader">No products to Show.</div>
        ) : (
          <div className="product-loader">
            <FadeLoader color="black" size={180} />
          </div>
        )}
      </div>


      {filterdData.length >10 && <Pagination
      perPage={perPage}
      onPaginationChange={onPaginationChange}
      total={filterdData.length}
      />}


    </>
  );
}
export default Products;
