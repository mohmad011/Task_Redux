import { createStore } from "redux";
import React from "react";
import ReactDOM from "react-dom";
import { Provider , useDispatch } from "react-redux";
import basketReducer from "./reducer";
import Basket from "./Basket";
import { addProductToBasket } from "./actions";


const store = createStore(basketReducer);

const AddProductComponent = () => {

  const dispatch = useDispatch()

  const getSampleProduct = () => {
    return {
      id: Math.floor(Math.random() * 10000000),
      name: "product 1",
      quantity: 1,
      price: 1.0,
    };
  }

  const addMyProduct = (products) => {
      dispatch(addProductToBasket(products));
  }

  return <button onClick={() => addMyProduct(getSampleProduct())}>Add product to basket</button>
}

ReactDOM.render(
  <Provider store={store}>
    <Basket />

    <div id="utils">
      <AddProductComponent />
    </div>
  </Provider>,
  document.getElementById("root")
);
