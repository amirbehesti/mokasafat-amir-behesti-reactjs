export const favoriteProducts = (data) => {
    return {
      type: "FAVORITES",
      payload: data,
    };
  };


  export const addDeleteFavorite = (data) => {
    return {
      type: "ADD_REMOVE_FAVORITES",
      payload: data,
    };
  };