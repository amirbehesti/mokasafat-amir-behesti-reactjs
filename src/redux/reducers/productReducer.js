const initialState = {
  productData: [],
  filterdData: [],
  filterTerm: "All",
  favorites: [],
};

const productReducer = (state = initialState, action) => {
  // console.log(action, "ACTIONS");
  switch (action.type) {
    case "products/getProducts/fulfilled":
      return {
        ...state,
        productData: action.payload.payload,
        filterdData: action.payload.payload,
      };
    case "FAVORITES":
      return { ...state, favorites: action.payload };

    case "DELETE_PRODUCT":
      let updateMainArray = state.productData.filter(function (el) {
        return el._id !== action.payload;
      });
      let updateFilterdArray = state.productData.filter(function (el) {
        return el._id !== action.payload;
      });

      let tempFav = [...state.favorites];
      if (tempFav.includes(action.payload)) {
        const indexPresent = tempFav.indexOf(action.payload);
        tempFav.splice(indexPresent, 1);
        localStorage.setItem("favorites", JSON.stringify(tempFav));
      }
      return {
        ...state,
        productData: updateMainArray,
        filterdData: updateFilterdArray,
        favorites: tempFav,
      };

    case "FILTER_PRODUCT":
      let newArray = [];
      if (action.payload === "All") {
        newArray = state.productData;
      } else {
        newArray = state.productData.filter(function (el) {
          return el.category === action.payload;
        });
      }

      return {
        ...state,
        filterdData: newArray,
        filterTerm: action.payload,
      };

    case "ADD_REMOVE_FAVORITES":
      let updateFav = [...state.favorites];
      if (!updateFav.some((value)=> { return (value._id === action.payload._id); })) {
        updateFav.push(action.payload);
        localStorage.setItem("favorites", JSON.stringify(updateFav));
      } else {
        const index = updateFav.map(item => item._id).indexOf(action.payload._id);
        updateFav.splice(index, 1);
        localStorage.setItem("favorites", JSON.stringify(updateFav));
      }
      return { ...state, favorites: updateFav };

    default:
      return state;
  }
};

export default productReducer;
