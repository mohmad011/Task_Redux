import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeProductFromBasket } from "./actions";

// You can use console.log for debugging purposes.

// This component is already implemented and working as expected.
// `Please focus on Redux related parts.
export function Basket() {


  const dispatch = useDispatch()
  const MyEvents = useSelector(state => state)

  const onRemove = (productId) => {
    dispatch(removeProductFromBasket(productId))
  }

  let quantity = MyEvents.reduce((total, item) => total + parseInt(item.products.quantity), 0)
  let total = MyEvents.reduce((total, item) => total + parseInt(item.products.quantity) * item.products.price, 0)
  return (
    <div>
      <ul className="products">
        {MyEvents.map((item) => (
          <li key={item.products.id} id={`item-${item.products.id}`}>
            <span>Name: {item.products.name}</span>
            <span>Quantity: {quantity}</span>
            <button
              id={`remove-${item.products.id}`}
              onClick={() => onRemove(item.products.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div>
        Total price: <span id="total-price">{total}</span>
      </div>
    </div>
  );
}

export default Basket;
