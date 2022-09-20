import { useNavigate } from "react-router-dom";
import { MdFavorite } from "react-icons/md";
import { addDeleteFavorite } from "../redux/actions/favoriteAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function EachFavoriteProduct({ item }) {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = useSelector((state) => state);

  const isFavorite = data.products.favorites.some((value) => {
    return value._id === item._id;
  });

  const goToDetails = () => {
    const id = item._id;
    navigate(`/products/${id}`);
  };

  return (
    <div className="eachItem" key={item._id}>
      <div onClick={goToDetails}>
        <img
          className="productImage"
          src={item.avatar}
          alt={item.description.substr(0, 25)}
        />
        <p>{item.name.substr(0, 25)}</p>
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
            size="20px"
          />
        </span>
      </div>
    </div>
  );
}
export default EachFavoriteProduct;
