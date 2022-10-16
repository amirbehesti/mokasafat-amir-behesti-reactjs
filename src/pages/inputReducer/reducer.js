export const initialState = {
  title: "",
  price: "",
  rating:"",
  discountPercentage:"",
  brand:"",
  stock:"",
  category: "",
  description: "",
  images: [],
  thumbnail: "",
};


export const reducer = (state, action) => {
  switch (action.type) {
    case "TITLE":
      return { ...state, title: action.payload };
    case "PRICE":
      return { ...state, price: action.payload };
    case "RATING":
      return { ...state, rating: action.payload };
    case "BRAND":
        return { ...state, brand: action.payload };
    case "DISCOUNT":
        return { ...state, discountPercentage: action.payload };
    case "CATEGORY":
      return { ...state, category: action.payload };
    case "DESCRIPTION":
      return { ...state, description: action.payload };
    case "THUMBNAIL":
      return { ...state, thumbnail: action.payload };
    case "IMAGES":
      return { ...state, images: action.payload };
    case "STOCK":
      return { ...state, stock: action.payload };
    case 'RESET':
      return {...state,...action.payload}
    default:
      return state;
  }
};
