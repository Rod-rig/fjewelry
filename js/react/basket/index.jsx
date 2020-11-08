import React from "react";
import ReactDOM from "react-dom";
import { Basket } from "./basket";

export const initBasket = () => {
  const root = document.querySelector(".js_basket_root");

  root && ReactDOM.render(<Basket />, root);
};
