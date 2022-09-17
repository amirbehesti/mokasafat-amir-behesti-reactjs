import EachProduct from "./EachProduct";
import { useSelector} from "react-redux";

function ProductsContainer() {
    const data = useSelector((state) => state);
    // console.log(data)
    const {filterdData} = data.products;
     return (
      <>
      {filterdData && filterdData.map((item,index)=>{
         return <EachProduct data={item}  key={index}/>
      })}
      </>
  )
}
export default ProductsContainer