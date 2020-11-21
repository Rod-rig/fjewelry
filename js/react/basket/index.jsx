import React from "react";
import { render } from "react-dom";
import { Basket } from "./basket";
import { OrderForm } from "./order-form";

export const initBasket = () => {
  const root = document.querySelector(".js_basket_root");

  root && render(<Basket />, root);
};

export const initBasket2 = () => {
  const root = document.querySelector(".js_basket2_root");

  root && render(<OrderForm />, root);
};
