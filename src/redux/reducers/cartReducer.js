const initialState = {
  cartData: [],
};

const cartReducer = (state = initialState, action) => {
  // console.log(action.payload);
  switch (action.type) {

    case "PREV_ITEMS":
      return {
        ...state,
        catagoriesData: action.payload.payload,
      };

    case "ADD_DELETE_CART":
        let temp = [];
        const isPresent = state.cartData.some((value) => {
            return value.id === action.payload.id;
          });
        if(isPresent){
           temp = state.cartData.filter((item)=>{
               return item.id !== action.payload.id;
           })
        }else{
            temp = [...state.cartData];
            temp.push(action.payload);
        }
      return {
        ...state,
        cartData: temp,
      };

    case "INCREASE":
      return {
        ...state,
        catagoriesData: action.payload.payload,
      };

    case "DECREASE":
      return {
        ...state,
        catagoriesData: action.payload.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
