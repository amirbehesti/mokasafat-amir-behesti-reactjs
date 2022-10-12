import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addDeleteFavorite } from "../redux/actions/favoriteAction";

function DetailPage() {
  let { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const { productData, favorites } = data.products;

  let currentProduct = [];
  if (
    productData.some((value) => {
      return value.id === Number(id);
    })
  ) {
    currentProduct = productData.filter((item) => {
      return item.id === Number(id);
    });
  } else {
    currentProduct = favorites.filter((item) => {
      return item.id === Number(id);
    });
  }

  const isFavorite = data.products.favorites.some((item) => {
    return item.id === Number(id);
  });


  const goBack = () => {
    navigate(-1);
  };

  
  return (
    <div className="ProductContainer">
      
      {currentProduct.length > 0 ? (
        <div className="itemDetail">
          <div className="detailImagentainer">
            <img
              className="detailImage"
              src={currentProduct[0].images[0]}
              alt={currentProduct[0].description}
            />
          </div>

          <div className="details">
            <h3>Name: {currentProduct[0].title}</h3>
            <p>
              <b>Category:</b> {currentProduct[0].category}
            </p>
            <p>
              <b>Discount:</b> {currentProduct[0].discountPercentage} %
            </p>
            <p>
              <b>In Stock:</b> {currentProduct[0].stock}
            </p>
            <p>
              <b>Product Id:</b> {currentProduct[0].id}
            </p>
            <p>
              <b>Rating:</b> {currentProduct[0].rating}
            </p>
            <p>
              <b>Description:</b> {currentProduct[0].description.substr(0, 100)}
              ...
            </p>
            <h3>Price: &#x20B9;{currentProduct[0].price}</h3>

            <div className="delete-favorite">
              <button onClick={goBack} className="fav-delete-btn">
                Go Back
              </button>
              <button
                className="fav-delete-btn"
                onClick={() => dispatch(addDeleteFavorite(currentProduct[0]))}
                style={
                  isFavorite
                    ? { backgroundColor: "#f9a347" }
                    : { backgroundColor: "black" }
                }
              >
                {isFavorite ? "Remove Favorite" : "Add to Favorite"}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="product-loader">
          <h3>No results to show.</h3>
          <button onClick={goBack} className="fav-delete-btn">
            Previous Page
          </button>
        </div>
      )}
    </div>
  );
}
export default DetailPage;
