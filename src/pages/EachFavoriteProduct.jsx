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
          className="productImage"
          src={item.images[0]}
          alt={item.description}
        />
        <p>{item.title}</p>
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
