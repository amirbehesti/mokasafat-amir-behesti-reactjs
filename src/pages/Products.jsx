import React,{useState} from "react";
import FadeLoader from "react-spinners/FadeLoader";
import { useSelector } from "react-redux";
import EachProduct from "./EachProduct";
import Pagination from "./Pagination";
function Products() {
  const data = useSelector((state) => state);
  const { filterdData, productData} = data.products;

  const perPage = 10;
  const [pagination, setPagination] = useState({
    start: 0,
    end: perPage
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  return (
    <>
      <div> <h4>Showing {data.products.filterTerm} Products</h4> </div>
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


      <Pagination
      perPage={perPage}
      onPaginationChange={onPaginationChange}
      total={filterdData.length}
      />


    </>
  );
}
export default Products;
