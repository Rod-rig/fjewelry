import React from "react";
import PropTypes from "prop-types";

const labels = {
  secure: "Secure checkout",
  promoDelivery: "Promo code",
  price: "Price",
  delivery: "Delivery",
  total: "Total",
  totalNote: "(Including VAT, Postage & Packaging)",
};

export const Delivery = props => (
  <div className="basket__delivery">
    <div className="basket__delivery_inner">
      <div className="basket__delivery_radios">
        {props.deliveries.length > 0 &&
          props.deliveries.map(d => (
            <label
              htmlFor={d.method_code}
              key={d.method_code}
              className="basket__delivery_radio"
            >
              <input
                id={d.method_code}
                checked={d.method_code === props.deliveryCode}
                className="basket__delivery_input"
                name="delivery"
                type="radio"
                value={d.method_code}
                data-name={d.method_title}
                onChange={props.onDeliveryChange}
              />
              <div className="basket__delivery_body">
                <div className="basket__delivery_content">
                  {/*<svg className="basket__delivery_icon">
                  <use xlinkHref={`#${d.icon}`} />
                </svg>*/}
                  <div className="basket__delivery_name">{d.method_title}</div>
                </div>
                {/*<div className="basket__delivery_schedule">{d.schedule}</div>*/}
              </div>
            </label>
          ))}
      </div>
      <div className="mt-20">
        <div className="basket__delivery_row">
          <div className="basket__delivery_price">{labels.price}</div>
          <div className="basket__delivery_price">
            {props.total.total_price_without_discount_formatted}
          </div>
        </div>
        <div className="basket__delivery_row">
          <div className="basket__delivery_price">{labels.delivery}</div>
          <div className="basket__delivery_price">{props.deliveryName}</div>
        </div>
        {props.discount && (
          <div className="basket__delivery_row">
            <div className="basket__delivery_price">{labels.promoDelivery}</div>
            <div className="basket__delivery_price basket__delivery_price--promo">
              {props.discount}
            </div>
          </div>
        )}
      </div>
      <div className="basket__delivery_total">
        <div className="basket__delivery_row">
          <div className="basket__delivery_price basket__delivery_price--total">
            {labels.total}
          </div>
          <div className="basket__delivery_price">
            {props.total.total_price_formatted}
          </div>
        </div>
        <div className="basket__delivery_schedule">{labels.totalNote}</div>
      </div>
      {props.shouldShowSecureButton && (
        <div className="basket__delivery_footer">
          <a href={"/checkout/"} className="basket__delivery_submit">
            {labels.secure}
          </a>
        </div>
      )}
    </div>
  </div>
);

Delivery.propTypes = {
  deliveries: PropTypes.any,
  discount: PropTypes.string,
  total: PropTypes.any,
  shouldShowSecureButton: PropTypes.bool,
  onDeliveryChange: PropTypes.func.isRequired,
  deliveryCode: PropTypes.string,
  deliveryName: PropTypes.string,
};
