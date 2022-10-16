import { useSelector, useDispatch } from "react-redux";
import { useReducer, useState, useEffect, useRef } from "react";
import { initialState, reducer } from "./inputReducer/reducer";
import { newProductAction } from "../redux/actions/productActions";
import { AddUrl } from "../api/urls";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddNewProduct() {
  const data = useSelector((state) => state);
  const { catagoriesData } = data.catagories;
  const [state, dispatch] = useReducer(reducer, initialState);
  const [error, setError] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [urls, setUrls] = useState([]);
  const navigate = useNavigate();
  const newProductDispatch = useDispatch();
  const input1 = useRef();
  const input2 = useRef();

  const goBack = () => {
    navigate(-1);
  };
  const handleUrls = (e) => {
    let temp = [...urls];
    if (e.target.name === "url1") {
      temp[0] = e.target.value;
      setUrls(temp);
    } else {
      temp[1] = e.target.value;
      setUrls(temp);
    }
  };
  useEffect(() => {
    dispatch({ type: "IMAGES", payload: urls });
  }, [urls]);

  const handleActions = (e) => {
    setError(false);
    setSuccessMessage("");
    if (e.target.name === "brand") {
      dispatch({ type: "BRAND", payload: e.target.value });
    }
    if (e.target.name === "title") {
      dispatch({ type: "TITLE", payload: e.target.value });
    }
    if (e.target.name === "category") {
      dispatch({ type: "CATEGORY", payload: e.target.value });
    }
    if (e.target.name === "description") {
      dispatch({ type: "DESCRIPTION", payload: e.target.value });
    }
    if (e.target.name === "thumb") {
      dispatch({ type: "THUMBNAIL", payload: e.target.value });
    }
    if (e.target.name === "price") {
      dispatch({ type: "PRICE", payload: e.target.value });
    }
    if (e.target.name === "discount") {
      dispatch({ type: "DISCOUNT", payload: e.target.value });
    }
    if (e.target.name === "rating") {
      dispatch({ type: "RATING", payload: e.target.value });
    }
    if (e.target.name === "stock") {
      dispatch({ type: "STOCK", payload: e.target.value });
    }
  };

  const validate = () => {
    return (
      !isNaN(state.price) &&
      state.price > 0 &&
      state.title !== "" &&
      state.brand !== "" &&
      state.description !== "" &&
      state.category !== "" &&
      state.images.length === 2 &&
      !isNaN(state.rating) &&
      !isNaN(state.discountPercentage) &&
      !isNaN(state.stock)
    );
  };

  const newProduct = async () => {
    setError(false);
    setSuccessMessage("");
    if (validate()) {
      console.log(state);
      const response = await axios.post(AddUrl, state, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.statusText === "OK") {
        dispatch({ type: "RESET", payload: initialState });
        setSuccessMessage(response.data.id);
        input1.current.value = "";
        input2.current.value = "";
        newProductDispatch(newProductAction(response.data));
      }
      console.log(response);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <>
        {error ? (
          <div className="errordiv">
            <span className="error">Plese enter valid Details</span>
          </div>
        ) : (
          ""
        )}
      </>

      <>
        {successMessage && (
          <div className="errordiv">
            <span className="success">
              Product successfully added with id : {successMessage}
            </span>
          </div>
        )}
      </>

      <div className="ProductContainer">
        <div className="inputBox">
          <div>
            <h3>Add New Product...</h3>
          </div>

          <div>
            <span>Brand : </span>
            <input
              name="brand"
              value={state.brand}
              onChange={(e) => handleActions(e)}
              type={"text"}
            />
          </div>

          <div>
            <span>Title : </span>
            <input
              name="title"
              value={state.title}
              onChange={(e) => handleActions(e)}
              type={"text"}
            />
          </div>

          <div>
            <span>Category : </span>
            <select
              defaultValue={state.category}
              name="category"
              onChange={(e) => handleActions(e)}
            >
              <option key={"0"} value="" disabled>
                Choose Category
              </option>
              {catagoriesData &&
                catagoriesData.map((item, index) => {
                  return (
                    <option key={index + 1} value={item}>
                      {item}
                    </option>
                  );
                })}
            </select>
          </div>

          <div>
            <span>Price : </span>
            <input
              name="price"
              value={state.price}
              onChange={(e) => handleActions(e)}
              type="number"
            />
          </div>

          <div>
            <span>Discount : </span>
            <input
              name="discount"
              value={state.discountPercentage}
              onChange={(e) => handleActions(e)}
              type="number"
            />
          </div>

          <div>
            <span>In Stock : </span>
            <input
              name="stock"
              value={state.stock}
              onChange={(e) => handleActions(e)}
              type="number"
            />
          </div>

          <div>
            <span>Rating : </span>
            <input
              name="rating"
              value={state.rating}
              onChange={(e) => handleActions(e)}
              type="number"
            />
          </div>

          <div>
            <span>Description : </span>
            <input
              name="description"
              value={state.description}
              onChange={(e) => handleActions(e)}
              type="text"
            />
          </div>

          <div>
            <span>URl-1 : </span>
            <input
              ref={input1}
              name="url1"
              onChange={(e) => handleUrls(e)}
              type="url"
            />
          </div>

          <div>
            <span>URl-2 : </span>
            <input
              ref={input2}
              name="url2"
              onChange={(e) => handleUrls(e)}
              type="url"
            />
          </div>

          <div>
            <span>Thumbnail : </span>
            <input
              name="thumb"
              value={state.thumbnail}
              onChange={(e) => handleActions(e)}
              type="url"
            />
          </div>

          <div className="add-buttons">
            <button onClick={goBack} className="add-page-button">
              Go Back
            </button>
            <button className="add-page-button" onClick={newProduct}>
              Add Product
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddNewProduct;
