export function addProductToBasket(products) {
  const action = {
  	type: "ADD_PRODUCT_TO_BASKET",
    products,
    // quantity
  };
  return action;
}

export const removeProductFromBasket = (productId) => {
  return {
  	type: "REMOVE_PRODUCT_FROM_BASKET",
    productId
  };
};