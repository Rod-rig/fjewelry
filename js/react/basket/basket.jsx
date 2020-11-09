import React, { useState, useEffect } from "react";
import ajax from "../../helpers/ajax";
import { Loader } from "../components/loader";
import { BasketItem } from "./basket-item";

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
      <div className="">
        <div className="">
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
          <div className="basket__delivery">
            {basket["delivery"].map(d => (
              <div key={d.name} className="basket__delivery_radio">
                <input
                  checked={d.checked}
                  className="basket__delivery_input"
                  name="delivery"
                  type="radio"
                  onChange={e => {
                    console.log(e.target.checked);
                  }}
                />
                <div className="basket__delivery_body">
                  <div className="basket__delivery_content">
                    <svg className="basket__delivery_icon">
                      <use xlinkHref={`#${d.icon}`} />
                    </svg>
                    <div className="basket__delivery_name">{d.name}</div>
                  </div>
                  <div className="basket__delivery_schedule">{d.schedule}</div>
                </div>
              </div>
            ))}
            <div className="mt-20">
              <div className="basket__delivery_row">
                <div className="basket__delivery_price">
                  {basket.labels.price}
                </div>
                <div className="basket__delivery_price">
                  {basket.main.price}
                </div>
              </div>
              <div className="basket__delivery_row">
                <div className="basket__delivery_price">
                  {basket.labels.delivery}
                </div>
                <div className="basket__delivery_price">
                  {basket.main.delivery}
                </div>
              </div>
            </div>
            <div className="basket__delivery_total">
              <div className="basket__delivery_row">
                <div className="basket__delivery_price basket__delivery_price--total">
                  {basket.labels.total}
                </div>
                <div className="basket__delivery_price">
                  {basket.main.total}
                </div>
              </div>
              <div className="basket__delivery_schedule">
                {basket.labels.totalNote}
              </div>
            </div>
            <div className="basket__delivery_footer">
              <a href={basket.hrefs.submit} className="basket__delivery_submit">
                {basket.labels.secure}
              </a>
            </div>
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
