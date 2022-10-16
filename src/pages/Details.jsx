import { addDeleteFavorite } from "../redux/actions/favoriteAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Details = ({ isFavorite, currentProduct }) => {
  // console.log(currentProduct)
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        <button onClick={goBack} className="fav-delete-btn">
          Go Back
        </button>
        <button
          className="fav-delete-btn"
          onClick={() => dispatch(addDeleteFavorite(currentProduct))}
          style={
            isFavorite
              ? { backgroundColor: "#f9a347" }
              : { backgroundColor: "#0275d8" }
          }
        >
          {isFavorite ? "Remove Favorite" : "Add to Favorite"}
        </button>
      </div>

    </div>
  );
};
export default Details;
