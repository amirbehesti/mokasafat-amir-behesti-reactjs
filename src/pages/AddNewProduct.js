import { useSelector, useDispatch } from "react-redux";
import { useReducer, useState } from "react";
import { initialState, reducer } from "./inputReducer/reducer";
import { newProductAction } from "../redux/actions/productActions";
import { accessToken, url } from "../accessKey/token";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddNewProduct() {
  const data = useSelector((state) => state);
  const { catagoriesData } = data.catagories;
  const [state, dispatch] = useReducer(reducer, initialState);
  const [error, setError] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const newProductDispatch = useDispatch();

  const goBack = () => {
    navigate(-1);
  };

  const handleActions = (e) => {
    setError(false);
    setSuccessMessage("");
    if (e.target.name === "name") {
      dispatch({ type: "NAME", payload: e.target.value });
    }
    if (e.target.name === "price") {
      dispatch({ type: "PRICE", payload: e.target.value });
    }
    if (e.target.name === "category") {
      dispatch({ type: "CATEGORY", payload: e.target.value });
    }
    if (e.target.name === "description") {
      dispatch({ type: "DESCRIPTION", payload: e.target.value });
    }
    if (e.target.name === "url") {
      dispatch({ type: "AVATAR", payload: e.target.value });
    }
    if (e.target.name === "email") {
      dispatch({ type: "EMAIL", payload: e.target.value });
    }
  };

  const validate = () => {
    if (
      !isNaN(state.price) &&
      state.price > 0 &&
      state.name !== "" &&
      state.description !== "" &&
      state.category !== "" &&
      state.avatar !== "" &&
      state.developerEmail !== ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  const newProduct = async () => {
    setError(false);
    setSuccessMessage("");
    if (validate()) {
      const response = await axios.post(url, state, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (response.data.message === "Success") {
        dispatch({ type: "RESET", payload: initialState });
        setSuccessMessage(response.data.product._id);
        newProductDispatch(newProductAction(response.data.product));
      }
      // console.log(response);
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
            <span>Name : </span>
            <input
              name="name"
              value={state.name}
              onChange={(e) => handleActions(e)}
              type={"text"}
            />
          </div>

          <div>
            <span>Price : </span>
            <input
              name="price"
              value={state.price}
              onChange={(e) => handleActions(e)}
              type={"number"}
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
            <span>Description : </span>
            <input
              name="description"
              value={state.description}
              onChange={(e) => handleActions(e)}
              type={"text"}
            />
          </div>

          <div>
            <span>Avatar URl : </span>
            <input
              name="url"
              value={state.avatar}
              onChange={(e) => handleActions(e)}
              type={"url"}
            />
          </div>

          <div>
            <span>Email : </span>
            <input
              name="email"
              value={state.developerEmail}
              onChange={(e) => handleActions(e)}
              type={"email"}
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
