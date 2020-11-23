import React from "react";
import PropTypes from "prop-types";

export const Delivery = props => (
  <div className="basket__delivery">
    <div className="basket__delivery_inner">
      <div className="basket__delivery_radios">
        {props.basket.delivery.map(d => (
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
      </div>
      <div className="mt-20">
        <div className="basket__delivery_row">
          <div className="basket__delivery_price">
            {props.basket.labels.price}
          </div>
          <div className="basket__delivery_price">
            {props.basket.main.price}
          </div>
        </div>
        <div className="basket__delivery_row">
          <div className="basket__delivery_price">
            {props.basket.labels.delivery}
          </div>
          <div className="basket__delivery_price">
            {props.basket.main.delivery}
          </div>
        </div>
        <div className="basket__delivery_row">
          <div className="basket__delivery_price">
            {props.basket.labels.promoDelivery}
          </div>
          <div className="basket__delivery_price basket__delivery_price--promo">
            - £15.00
          </div>
        </div>
      </div>
      <div className="basket__delivery_total">
        <div className="basket__delivery_row">
          <div className="basket__delivery_price basket__delivery_price--total">
            {props.basket.labels.total}
          </div>
          <div className="basket__delivery_price">
            {props.basket.main.total}
          </div>
        </div>
        <div className="basket__delivery_schedule">
          {props.basket.labels.totalNote}
        </div>
      </div>
      <div className="basket__delivery_footer">
        <a href={props.basket.hrefs.submit} className="basket__delivery_submit">
          {props.basket.labels.secure}
        </a>
      </div>
    </div>
  </div>
);

Delivery.propTypes = {
  basket: PropTypes.any,
};
