import { useSelector, useDispatch } from "react-redux";
import { filterProduct } from "../redux/actions/filterActions";
function Header() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  return (
    <div className="header">
      <div className="logoContainer">LOGO</div>

      <div className="filter-favorites">
      <div className="addProduct">Add Item</div>


        <div className="dropdown">
          <button className="dropbtn">Filter: {data.products.filterTerm}</button>
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

        <div className="favorites">Fav</div>
      </div>
    </div>
  );
}
export default Header;
