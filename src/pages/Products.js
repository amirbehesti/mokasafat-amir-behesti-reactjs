import FadeLoader from "react-spinners/FadeLoader";
import { useSelector} from "react-redux";
import ProductsContainer from "./ProductsContainer";

function Products() {
      const data = useSelector((state) => state);
  return (
    <div className="ProductContainer">
          {data.products.filterdData.length ? <ProductsContainer/> : <div className='loader'><FadeLoader color="#8614f8" size={180} /></div>}
    </div>
  )
}
export default Products