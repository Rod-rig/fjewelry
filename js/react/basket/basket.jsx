import React, { useState, useEffect } from "react";
import ajax from "../../helpers/ajax";
import {
  Loader,
  removeLoader,
  showFullScreenLoader,
} from "../components/loader";
import { BasketItem } from "./basket-item";
import { Promocode } from "./promocode";
import { Delivery } from "./delivery";

const labels = {
  empty: "Basket is empty",
  quantity: "Quantity:",
  remove: "Remove",
};

const PRODUCTS = "items";

export const Basket = () => {
  const [isLoaded, setLoaded] = useState(false);
  const [basket, setData] = useState({});
  const [promo, setPromo] = useState("");
  const [discount, setDiscount] = useState("");
  const [isPromoSuccess, setPromoSuccess] = useState(false);
  const [promoError, setPromoError] = useState("");
  const [deliveryCode, setDeliveryCode] = useState("");
  const [deliveryPrice, setDeliveryPrice] = useState("");

  useEffect(() => {
    ajax
      .post({ url: "/query/cart/get/" })
      .then(({ data }) => {
        setData(data);
        setLoaded(true);
        if (data.deliveries && data.deliveries.length > 0) {
          const selectedDelivery = data.deliveries.find(d => d.selected);

          if (!selectedDelivery) {
            ajax
              .post({
                url: "/query/cart/calculate/",
                data: {
                  addressInformation: {
                    shipping_address: {
                      countryId: "",
                      region: "",
                      postcode: null,
                    },
                    shipping_method_code: data.deliveries[0].method_code,
                    shipping_carrier_code: data.deliveries[0].method_code,
                  },
                },
              })
              .then(({ data: response }) => {
                setData({
                  ...data,
                  total: response,
                });
              })
              .catch(e => {
                console.log(`Couldn't fetch delivery info`, e);
              });
          }

          setDeliveryCode(
            selectedDelivery
              ? selectedDelivery.method_code
              : data.deliveries[0].method_code
          );
          setDeliveryPrice(
            selectedDelivery
              ? selectedDelivery.price_incl_tax
              : data.deliveries[0].price_incl_tax
          );
        }
        if (Math.abs(data.total.coupon_discount) > 0) {
          setDiscount(data.total.coupon_discount_formatted);
          setPromoSuccess(true);
        }
      })
      .catch(() => {
        setLoaded(true);
        setData(null);
      });
  }, []);

  const setActiveSize = (productId, option) => {
    showFullScreenLoader();
    ajax
      .post({
        url: "/query/cart/updateItemOptions/",
        data: {
          id: productId,
          options: {
            [option.property_id]: option.id,
          },
        },
      })
      .then(({ data }) => {
        setData(data);
        removeLoader();
      })
      .catch(e => {
        removeLoader();
        console.log(`Couldn't change item size`, e);
      });
  };

  const removeItem = id => {
    showFullScreenLoader();
    ajax
      .post({
        url: "/query/cart/delete/",
        data: {
          id,
        },
      })
      .then(({ data }) => {
        setData(data);
        removeLoader();
      })
      .catch(e => {
        removeLoader();
        console.log(`Couldn't remove item ${id}`, e);
      });
  };

  const setQuantity = (id, value) => {
    showFullScreenLoader();
    ajax
      .post({
        url: "/query/cart/updateItemQty/",
        data: {
          id,
          qty: value,
        },
      })
      .then(({ data }) => {
        setData(data);
        removeLoader();
      })
      .catch(e => {
        removeLoader();
        console.log(`Couldn't change item quantity ${id}`, e);
      });
  };

  const sendPromo = e => {
    e.preventDefault();
    showFullScreenLoader();
    ajax
      .post({
        url: "/query/cart/coupon/",
        data: {
          remove: 0,
          coupon_code: promo,
        },
      })
      .then(({ data }) => {
        setData(data);
        setPromoSuccess(true);
        setDiscount(data.total.coupon_discount_formatted);
        removeLoader();
      })
      .catch(({ response }) => {
        removeLoader();
        setPromoError(response.data.message);
        console.log(`Couldn't apply promo ${promo}`, response);
      });
  };

  const onDeliveryChange = e => {
    const target = e.target;
    showFullScreenLoader();
    ajax
      .post({
        url: "/query/cart/calculate/",
        data: {
          addressInformation: {
            shipping_address: {
              countryId: "",
              region: "",
              postcode: null,
            },
            shipping_method_code: target.value,
            shipping_carrier_code: target.value,
          },
        },
      })
      .then(({ data }) => {
        setData({
          ...basket,
          total: data,
        });
        setDeliveryCode(target.value);
        // need delivery price in total data
        // setDeliveryName(target.getAttribute("data-name"));
        setDeliveryPrice(target.getAttribute("data-price"));
        removeLoader();
      })
      .catch(e => {
        removeLoader();
        console.log(`Couldn't fetch delivery info`, e);
      });
  };

  return isLoaded ? (
    basket &&
    basket.cart &&
    basket.cart[PRODUCTS] &&
    basket.cart[PRODUCTS].length > 0 ? (
      <div className="basket__row">
        <div className="basket__left">
          {basket.cart[PRODUCTS].map(p => (
            <BasketItem
              setActiveSize={option => setActiveSize(p.item_id, option)}
              setQuantity={value => setQuantity(p.item_id, value)}
              removeItem={() => removeItem(p.item_id)}
              key={p.item_id}
              data={p}
              labels={labels}
            />
          ))}
        </div>
        <div className="basket__right">
          {basket.deliveries && (
            <Delivery
              deliveries={basket.deliveries}
              total={basket.total}
              shouldShowSecureButton={true}
              discount={discount}
              onDeliveryChange={onDeliveryChange}
              deliveryCode={deliveryCode}
              deliveryPrice={deliveryPrice}
            />
          )}
          <div className="basket__promo">
            <Promocode
              value={promo}
              isSuccess={isPromoSuccess}
              onChange={e => setPromo(e.target.value)}
              onSubmit={sendPromo}
              promoError={promoError}
            />
          </div>
        </div>
      </div>
    ) : (
      <div>{labels.empty}</div>
    )
  ) : (
    <Loader />
  );
};
