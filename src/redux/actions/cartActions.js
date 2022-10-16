export const addDeleteCart = (data) => {
    return {
      type: "ADD_DELETE_CART",
      payload: data,
    };
  };

  export const increaseCount = (data) => {
    return {
      type: "INCREASE",
      payload: data,
    };
  };

  export const decreaseCount = (data) => {
    return {
      type: "DECREASE",
      payload: data,
    };
  };

  export const updateCart = (data) => {
    return {
      type: "PREV_ITEMS",
      payload: data,
    };
  };