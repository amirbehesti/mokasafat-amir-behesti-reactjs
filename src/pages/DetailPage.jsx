import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CarouselComponent from "./CarouselComponent";
import Details from "./Details";


function DetailPage() {
  let { id } = useParams();
  const navigate = useNavigate();
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
           <CarouselComponent item={currentProduct[0]} />
           <Details isFavorite={isFavorite} currentProduct={currentProduct[0]}/>
        </div>
      ) : (
        <div className="product-loader">
           <h3>No results to show.</h3>
           <button onClick={goBack} className="fav-delete-btn">Previous Page</button>
        </div>
      )}
    </div>
  );

}
export default DetailPage;
