import { useNavigate } from "react-router-dom";
import { MdFavorite, MdDeleteOutline } from "react-icons/md";
import { deleteProduct } from "../redux/actions/productActions";
import { addDeleteFavorite } from "../redux/actions/favoriteAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function EachProduct({ item }) {
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
        <img title="Tap to view Detail"
          className="productImage"
          src={item.images[0]}
          alt={item.description}
        />
        <p>{item.title.substr(0,20)}</p>
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
        <span
          title="Delete product?"
          onClick={() => dispatch(deleteProduct(item.id))}
        >
          <MdDeleteOutline className="icon" size="20px" />
        </span>
      </div>
    </div>
  );
}
export default EachProduct;
