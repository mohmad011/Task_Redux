export default function basketReducer(state = [], action) {
  switch (action.type) {

    case "ADD_PRODUCT_TO_BASKET": {
        return [
            ...state,
            {
                products: action.products
            }
        ]
    }

    case "REMOVE_PRODUCT_FROM_BASKET": {
        const item_index = action.productId;
        const new_state = [...state];

        return new_state.filter(item => item.products.id !== item_index)
    }      
    default:
      return state;
  }
}