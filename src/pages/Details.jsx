import { addDeleteFavorite } from "../redux/actions/favoriteAction";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addDeleteCart } from "../redux/actions/cartActions";
import { MdFavorite} from "react-icons/md";
import { BsFillCartFill } from "react-icons/bs";

const Details = ({ isFavorite, currentProduct }) => {

  const toCart = { quantity: 1, id: currentProduct.id, data: currentProduct };

  const data = useSelector((state) => state);
  const { carts } = data;
  const { cartData } = carts;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAlreadyOnCart = cartData.some((value) => {
    return value.id === Number(currentProduct.id);
  });

  const goBack = () => {
    navigate(-1);
  };

  return ( 
    <div className="details">
      <h3>Name: {currentProduct.title}</h3>

      <p>
        <b>Category:</b> {currentProduct.category}
      </p>

      <p>
        <b>Discount:</b> {currentProduct.discountPercentage} %
      </p>

      <p>
        <b>In Stock:</b> {currentProduct.stock}
      </p>

      <p>
        <b>Product Id:</b> {currentProduct.id}
      </p>

      <p>
        <b>Rating:</b> {currentProduct.rating}
      </p>

      <p className="description">
        <b>Description:</b> {currentProduct.description.substr(0, 180)}
        ...
      </p>

      <h3>Price: &#x20B9;{currentProduct.price}</h3>

      <div className="delete-favorite">

        <div onClick={goBack} className="fav-delete-btn">
          Go Back
        </div>

        <div className="fav-delete-btn"
          onClick={() => dispatch(addDeleteFavorite(currentProduct))}>
          <MdFavorite
            className="icon"
            style={isFavorite ? { color: "#ed1c2e" } : { color: "black" }}
            size="16px"
          />
        </div>

        <div
          className="fav-delete-btn"
          onClick={() => dispatch(addDeleteCart(toCart))} >
          <BsFillCartFill
            className="icon"
            style={isAlreadyOnCart ? { color: "#ed1c2e" } : { color: "black" }}
            size="16px"
          />
        </div>
      </div>

    </div>
  );
};
export default Details;
