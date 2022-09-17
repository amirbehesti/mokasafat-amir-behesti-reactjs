import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import FadeLoader from "react-spinners/FadeLoader";

function DetailPage() {
  let { id } = useParams();
  const data = useSelector((state) => state);
  const currentProduct = data.products.filterdData.filter((item) => {
    return item._id === id;
  });

  return (
    <div className="ProductContainer">
      {currentProduct[0] ? (
        <div className="itemDetail">
          <div className="detailImagentainer">
            <img
              className="detailImage"
              src={currentProduct[0].avatar}
              alt={currentProduct[0].description}
            />
          </div>

          <div className="details">
            <h1>Name: {currentProduct[0].name}</h1>
            <h3>Description: {currentProduct[0].description.substr(0,25)}</h3>
            <h3>Category: {currentProduct[0].category}</h3>
            <h3>Updated At: {currentProduct[0].updatedAt}</h3>
            <h3>Product Id: {currentProduct[0]._id}</h3>
            <h1>Price: &#x20B9;{currentProduct[0].price}</h1>

            <div className="delete-favorite">
              <button>Delete Item</button>
              <button>Add to favorite</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="loader">
          <FadeLoader color="#8614f8" size={180} />
        </div>
      )}
    </div>
  );
}
export default DetailPage;
