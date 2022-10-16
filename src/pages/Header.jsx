import { useSelector, useDispatch } from "react-redux";
import { filterProduct } from "../redux/actions/filterActions";
import { FaFilter } from 'react-icons/fa';
import { MdFavorite } from "react-icons/md";
import { BsFillCartFill } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";

function Header() {

  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { favorites,filterTerm } = data.products;
  const {catagoriesData} = data.catagories;
  const {cartData} = data.carts;
  
  const goToFavorites = ()=>{
    navigate("/favorites");
  }
  const goToAddNewPage = ()=>{
    navigate("/addnew");
  }
  const goToHomePage = ()=>{
    navigate("/products");
  }
  const goToCart = ()=>{
    navigate("/cart");
  }

  return (
    <div className="header">
      <div className="logoContainer" onClick={goToHomePage}><h1>Next Cart</h1></div>

      <div className="filter-favorites">

        <div className="dropdown">
          <button className="dropbtn"><span><FaFilter  className="filter-icon" size="14px"/></span> {filterTerm.split("")[0].toUpperCase()+filterTerm.substr(1,filterTerm.length)}</button>
          <div className="dropdown-content">
            <button  onClick={() => dispatch(filterProduct("All"))}>All</button>
            {catagoriesData && catagoriesData.map((item, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => dispatch(filterProduct(item))}
                  >
                    {item.split("")[0].toUpperCase()+item.substr(1,item.length)}
                  </button>
                );
              })}
          </div>
        </div>

        <div title="Add New Product" className="fav-add-btn" onClick={goToAddNewPage}>Add+</div>

        <div title="Wishlist" onClick={goToFavorites} className="cart-fav-btn">
        <MdFavorite color="#ed1c2e" size="14px"/>
          <div className="number">{favorites.length}</div>
        </div>

        <div title="Cart" className="cart-fav-btn" onClick={goToCart}><BsFillCartFill size="14px"/><div className="number">{cartData.length}</div></div>



      </div>
    </div>
  );
}
export default Header;
