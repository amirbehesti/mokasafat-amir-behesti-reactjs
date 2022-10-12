const initialState = {
  productData: [],
  filterdData: [],
  filterTerm: "All",
  favorites: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "products/getProducts/fulfilled":
      return {
        ...state,
        productData: action.payload.payload,
        filterdData: action.payload.payload,
      };
    case "NEW_PRODUCT":
      return {
        ...state,productData:[...state.productData,action.payload]
      }
    case "FAVORITES":
      return { ...state, favorites: action.payload };

    case "DELETE_PRODUCT":
      let updateMainArray = state.productData.filter(function (el) {
        return el.id !== action.payload;
      });

      let updateFilterdArray = state.filterdData.filter(function (el) {
        return el.id !== action.payload;
      });
      return {
        ...state,
        productData: updateMainArray,
        filterdData: updateFilterdArray,
      };

    case "FILTER_PRODUCT":
      let newArray = [];
      if (action.payload === "All") {
        newArray = [...state.productData];
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
      if (!updateFav.some((value)=> { return (value.id === action.payload.id) })) {
        updateFav.push(action.payload);
        localStorage.setItem("favorites", JSON.stringify(updateFav));
      } else {
        const index = updateFav.map(item => item.id).indexOf(action.payload.id);
        updateFav.splice(index, 1);
        localStorage.setItem("favorites", JSON.stringify(updateFav));
      }
      return { ...state, favorites: updateFav };

    default:
      return state;
  }
};

export default productReducer;
