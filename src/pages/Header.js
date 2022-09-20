import { useSelector, useDispatch } from "react-redux";
import { filterProduct } from "../redux/actions/filterActions";
import { FaFilter } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { MdFavorite} from "react-icons/md";

function Header() {

  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { favorites } = data.products;
  const {catagoriesData} = data.catagories;
  
  const goToFavorites = ()=>{
    navigate("/favorites");
  }
  const goToAddNewPage = ()=>{
    navigate("/addnew");
  }
  const goToHomePage = ()=>{
    navigate("/products");
  }

  return (
    <div className="header">
      <div className="logoContainer" onClick={goToHomePage}><h1>LOGO</h1></div>

      <div className="filter-favorites">
      <div className="fav-add-btn" onClick={goToAddNewPage}>Add Item</div>

        <div className="dropdown">
          <button className="dropbtn"><span><FaFilter  className="filter-icon"/></span> {data.products.filterTerm}</button>
          <div className="dropdown-content">
            <button onClick={() => dispatch(filterProduct("All"))}>All</button>
            {catagoriesData && catagoriesData.map((item, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => dispatch(filterProduct(item))}
                  >
                    {item}
                  </button>
                );
              })}
          </div>
        </div>

        <div onClick={goToFavorites} className="fav-add-btn">
          <span> <MdFavorite size="22px"/> </span>
          <div className="number">{favorites.length}</div>
        </div>
      </div>
    </div>
  );
}
export default Header;
