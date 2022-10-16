import { useSelector} from "react-redux";
import EachCartProduct from "./EachCartProduct";

const CartComponent = () => {
    const data = useSelector((state) => state);
    const { cartData } = data.carts;
    // console.log(cartData)

    
  return (
    <div className="cart-container">
      {cartData && cartData.map((item,index)=>{
         return <EachCartProduct item={item} key={index}/>
      })}
    </div>
  )
}
export default CartComponent