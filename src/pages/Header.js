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

  const goToFavorites = ()=>{
    navigate("/favorites");
  }
  const goToAddNewPage = ()=>{
    navigate("/addnew");
  }


  return (
    <div className="header">
      <div className="logoContainer"><h1>COMPANY</h1></div>

      <div className="filter-favorites">
      <div className="fav-add-btn" onClick={goToAddNewPage}>Add Item</div>

        <div className="dropdown">
          <button className="dropbtn"><span><FaFilter/></span> {data.products.filterTerm}</button>
          <div className="dropdown-content">
            <button onClick={() => dispatch(filterProduct("All"))}>All</button>
            {data.catagories.catagoriesData &&
              data.catagories.catagoriesData.map((item, index) => {
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
          <span> <MdFavorite size="25px"/> </span>
          <div className="number"><b>{favorites.length}</b></div>
        </div>
      </div>
    </div>
  );
}
export default Header;
