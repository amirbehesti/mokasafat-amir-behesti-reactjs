import { useSelector, useDispatch } from "react-redux";


const CartComponent = () => {
    const data = useSelector((state) => state);
    const dispatch = useDispatch();

    const { cartData } = data.carts;
    console.log(cartData)

    
  return (
    <div>CartComponent</div>
  )
}
export default CartComponent