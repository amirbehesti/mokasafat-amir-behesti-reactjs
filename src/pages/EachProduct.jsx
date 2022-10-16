import { useNavigate } from "react-router-dom";
import { MdFavorite, MdDeleteOutline } from "react-icons/md";
import { BsFillCartFill } from "react-icons/bs";
import { deleteProduct } from "../redux/actions/productActions";
import { addDeleteFavorite } from "../redux/actions/favoriteAction";
import { addDeleteCart } from "../redux/actions/cartActions";
import { useDispatch,useSelector } from "react-redux";

const EachProduct = ({ item }) => {

  const toCart = { quantity: 1, id: item.id, data: item };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state);
  const { products, carts } = data;
  const {favorites} = products;
  const { cartData } = carts;

  const isFavorite = favorites.some((value) => {
    return value.id === item.id;
  });
  
 const isAlreadyOnCart = cartData.some((value) => {
  return value.id === item.id;
});

  const goToDetails = () => {
    const id = item.id;
    navigate(`/products/${id}`);
  };

  return (
    <div className="eachItem" key={item.id}>
      <div onClick={goToDetails}>
        <img
          title="Tap to view Detail"
          className="productImage"
          src={item.images[0]}
          alt={item.description.substr(0, 20)}
        />
        <p>{item.title.substr(0, 20)}</p>
        <p>Price: &#x20B9;{item.price}</p>
      </div>

      <div className="delete-fav-card">
        <span
          title="Add to favorite?"
          onClick={() => dispatch(addDeleteFavorite(item))}
        >
          <MdFavorite
            className="icon"
            style={isFavorite ? { color: "#f9a347" } : { color: "black" }}
            size="18px"
          />
        </span>


        <span
          title="Add to cart"
          onClick={() => dispatch(addDeleteCart(toCart))}
        >
          <BsFillCartFill className="icon" size="18px" 
              style={isAlreadyOnCart ? { color: "#f9a347" } : { color: "black" }}
          />{" "}
        </span>


        <span
          title="Delete product?"
          onClick={() => dispatch(deleteProduct(item.id))}
        >
          <MdDeleteOutline 
          className="icon" size="18px" />
        </span>

        
      </div>
    </div>
  );
};
export default EachProduct;
