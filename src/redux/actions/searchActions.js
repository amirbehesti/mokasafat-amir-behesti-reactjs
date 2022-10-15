export const searchProduct = (data) => {
    return {
      type: "SEARCH_PRODUCT",
      payload: data,
    };
  };