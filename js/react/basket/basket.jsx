import React, { useState, useEffect } from "react";
import ajax from "../../helpers/ajax";
import { Loader } from "../components/loader";
import { BasketItem } from "./basket-item";
import { Promocode } from "./promocode";
import { Delivery } from "./delivery";

const PRODUCTS = "products";

export const Basket = () => {
  const [isLoaded, setLoaded] = useState(false);
  const [basket, setData] = useState({});

  useEffect(() => {
    ajax.get({ url: "../ajax/basket.json" }).then(({ data }) => {
      setData(data);
      setLoaded(true);
    });
  }, []);

  const setActiveSize = (productId, size) => {
    console.log(productId, size);
    // const products = [...basket[PRODUCTS]];
    // const productIndex = products.findIndex(p => p.id === productId);
    // const sizes = [...products[productIndex]["activeSizes"]];
    //
    // if (sizes.includes(size)) {
    //   const index = sizes.findIndex(s => s === size);
    //   sizes.splice(index, 1);
    // } else {
    //   sizes.push(size);
    // }
    //
    // products[productIndex]["activeSizes"] = sizes;
    // setData({ ...basket, products });
  };

  const setQuantity = (productId, value) => {
    console.log(productId, value);
  };

  return isLoaded ? (
    basket[PRODUCTS] && basket[PRODUCTS].length > 0 ? (
      <div className="basket__row">
        <div className="basket__left">
          {basket[PRODUCTS].map(p => (
            <BasketItem
              setActiveSize={size => setActiveSize(p.id, size)}
              setQuantity={value => setQuantity(p.id, value)}
              key={p.id}
              data={p}
              labels={basket["labels"]}
            />
          ))}
        </div>
        <div className="basket__right">
          <Delivery basket={basket} />
          <div className="basket__promo">
            <Promocode labels={basket["labels"]} />
          </div>
        </div>
      </div>
    ) : (
      <div>{basket["labels"]["empty"]}</div>
    )
  ) : (
    <Loader />
  );
};
