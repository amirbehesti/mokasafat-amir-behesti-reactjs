export const initialState = {
  name: "",
  price: 0,
  category: "",
  description: "",
  avatar: "",
  developerEmail: "",
};


export const reducer = (state, action) => {
  switch (action.type) {
    case "NAME":
      return { ...state, name: action.payload };
    case "PRICE":
      return { ...state, price: action.payload };
    case "CATEGORY":
      return { ...state, category: action.payload };
    case "DESCRIPTION":
      return { ...state, description: action.payload };
    case "AVATAR":
      return { ...state, avatar: action.payload };
    case "EMAIL":
      return { ...state, developerEmail: action.payload };
    case 'RESET':
      return {...state,...action.payload}
    default:
      return state;
  }
};
