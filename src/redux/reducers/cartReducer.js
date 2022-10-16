const initialState = {
  cartData: [],
};

const cartReducer = (state = initialState, action) => {
  // console.log(action.payload);
  switch (action.type) {

    case "PREV_ITEMS":
      return {
        ...state,
        cartData: action.payload,
      };
    
    case "PLACE_ORDER":
      if(localStorage.getItem("carts")){
        localStorage.removeItem("carts");
      }
        return {
          ...state,
          cartData: [],
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
        localStorage.setItem("carts", JSON.stringify(temp));
      return {
        ...state,
        cartData: temp,
      };

    case "INCREASE":
      let tempIncrease = state.cartData.map(object => {
        if (Number(object.id) === Number(action.payload.id)) {
          return {...object, quantity: object.quantity+1};
        }
        return object;
      });
      localStorage.setItem("carts", JSON.stringify(tempIncrease));
      return {
        ...state,
        cartData: tempIncrease,
      };

    case "DECREASE":
      let tempDecrease = [];
      if(action.payload.quantity === 1){
          tempDecrease = state.cartData.filter((item)=>{
              return Number(item.id) !== Number(action.payload.id);
          })
      }else{
          tempDecrease = state.cartData.map(object => {
            if (Number(object.id) === Number(action.payload.id)) {
              return {...object, quantity: object.quantity-1};
            }
            return object;
          });
      }
      localStorage.setItem("carts", JSON.stringify(tempDecrease));
      return {
        ...state,
        cartData: tempDecrease,
      };
    
    default:
      return state;
  }
};

export default cartReducer;
