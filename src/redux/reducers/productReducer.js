import { defaultData } from "../../api/urls";

const initialState = {
  productData: [],
  filterdData: [],
  filterTerm: "All",
  favorites: [],
};

const productReducer = (state = initialState, action) => {
  // console.log(action.type);
  // console.log(action.payload);
  switch (action.type) {
    case "products/getProducts/fulfilled":
      return {
        ...state,
        productData: action.payload.payload,
        filterdData: action.payload.payload,
      };

    case "products/getProducts/rejected":
      return {
        ...state,
        productData: defaultData.products,
        filterdData: defaultData.products,
      };

    case "NEW_PRODUCT":
      let newArr = state.productData.filter((item)=>{
         return item.id !== action.payload.id;
      })
      let newFav = state.favorites.filter((item)=>{
        return item.id !== action.payload.id;
     })
     newFav.push(action.payload)
     localStorage.setItem("favorites", JSON.stringify(newFav));
      return {
        ...state,
        productData: [...newArr, action.payload],
        favorites : newFav,
      };

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


    case "SEARCH_PRODUCT":
      let resultArray = [];
      let searchText = action.payload;

      if(searchText.length){
        resultArray = state.productData.filter((el)=> {
          return el.brand.toLowerCase().includes(action.payload.toLowerCase()) || el.category.toLowerCase().includes(action.payload.toLowerCase()) || el.description.toLowerCase().includes(action.payload.toLowerCase()) || el.title.toLowerCase().includes(action.payload.toLowerCase());
        });
      }else{
        resultArray = [...state.productData];
        searchText = "All";
      }

      return {
        ...state,
        filterdData: [...resultArray],
        filterTerm: searchText,
      };

    case "ADD_REMOVE_FAVORITES":
      let updateFav = [...state.favorites];
      if (
        !updateFav.some((value) => {
          return value.id === action.payload.id;
        })
      ) {
        updateFav.push(action.payload);
        localStorage.setItem("favorites", JSON.stringify(updateFav));
      } else {
        const index = updateFav
          .map((item) => item.id)
          .indexOf(action.payload.id);
        updateFav.splice(index, 1);
        localStorage.setItem("favorites", JSON.stringify(updateFav));
      }
      return { ...state, favorites: updateFav };

    default:
      return state;
  }
};

export default productReducer;
