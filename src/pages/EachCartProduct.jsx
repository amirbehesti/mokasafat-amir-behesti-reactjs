import { useDispatch } from "react-redux";
import { increaseCount, decreaseCount } from "../redux/actions/cartActions";

const EachCartProduct = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <>
      {
        <div className="cart-item" key={item.id}>
          <div className="cart-img-container">
            <img
              className="cart-img"
              src={item.data.thumbnail}
              alt={item.data.description}
            />
          </div>

          <div className="title-btns">
            <div className="title">{item.data.title}</div>
            <div className="cart-buttons">
              <button onClick={() => dispatch(increaseCount(item))}>+</button>
              {item.quantity}
              <button onClick={() => dispatch(decreaseCount(item))}>-</button>
            </div>
          </div>

          <div> Price: {item.quantity * Number(item.data.price)}</div>
        </div>
      }
    </>
  );
};
export default EachCartProduct;
