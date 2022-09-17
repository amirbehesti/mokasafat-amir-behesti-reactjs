const initialState = {
  productData: [],
  filterdData: [],
  filterTerm:"All",
};

const productReducer = (state = initialState, action) => {
  // console.log(action, "ACTIONS");
  switch (action.type) {

    case "DELETE_PRODUCT":
      let updateMainArray = state.productData.filter(function (el) {
          return el._id !== action.payload;
        });
       let updateFilterdArray = state.productData.filter(function (el) {
         return el._id !== action.payload;
       });
      return {
        ...state,
        productData:updateMainArray,
        filterdData: updateFilterdArray,
      };

    case "products/getProducts/fulfilled":
      return {
        ...state,
        productData: action.payload.payload,
        filterdData: action.payload.payload,
      };
    case "FILTER_PRODUCT":
      let newArray = [];
      if(action.payload === "All"){
         newArray = state.productData;
      }else{
          newArray = state.productData.filter(function (el) {
          return el.category === action.payload;
        });
      }
      return {
        ...state,
        filterdData: newArray,
        filterTerm: action.payload
      };
    default:
      return state;
  }
};

export default productReducer;
