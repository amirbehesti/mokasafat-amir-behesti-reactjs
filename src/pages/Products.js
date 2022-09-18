import FadeLoader from "react-spinners/FadeLoader";
import { useSelector} from "react-redux";
import EachProduct from "./EachProduct";

function Products() {
      const data = useSelector((state) => state);
      const {filterdData} = data.products;
  return (
    <div className="ProductContainer">
          {data.products.filterdData.length ? (filterdData.map((item,index)=>{
         return <EachProduct item={item}  key={index}/>
      })) : (<div className='product-loader'><FadeLoader color="black" size={180} /></div>)}
    </div>
  )
}
export default Products