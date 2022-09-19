import FadeLoader from "react-spinners/FadeLoader";
import { useSelector } from "react-redux";
import EachProduct from "./EachProduct";

function Products() {
  const data = useSelector((state) => state);
  const { filterdData, productData } = data.products;
  return (
    <>
      <div><h3>Showing {data.products.filterTerm} Products</h3></div>
      <div className="ProductContainer">
        {filterdData.length && productData.length ? (
          filterdData.map((item, index) => {
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
    </>
  );
}
export default Products;
