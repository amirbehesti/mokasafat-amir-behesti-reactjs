import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EachFavoriteProduct from "./EachFavoriteProduct";

function Favorites() {
  const navigate = useNavigate();

  const data = useSelector((state) => state);
  const { favorites } = data.products;
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="ProductContainer">
      {favorites.length ? (
        favorites.map((item, index) => {
          return <EachFavoriteProduct item={item} key={index} />;
        })
      ) : (
        <div className="favorite-loader">
          <h3>No favorites added...</h3>
        </div>
      )}

      <div className="favorite-back">
        <button onClick={goBack} className="fav-delete-btn">
          Go Back
        </button>
      </div>
    </div>
  );
}
export default Favorites;
