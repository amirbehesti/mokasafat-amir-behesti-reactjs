export const filterProduct = (data) => {
    return {
      type: "FILTER_PRODUCT",
      payload: data,
    };
  };