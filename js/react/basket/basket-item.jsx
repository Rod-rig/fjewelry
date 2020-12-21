import React from "react";
import PropTypes from "prop-types";

const toggleSizes = target => {
  const sizes = target.closest(".js_sizes");
  sizes && sizes.classList.toggle("show");
};

const SIZE_LIMIT_MOB = 11;
const SIZE_LIMIT = 17;
const SIZE_KEY = "all_options";

export const BasketItem = props => (
  <div className="basket_item">
    <div className="basket_item__img">
      <img
        className="img-responsive basket_item__image"
        src={props.data.product_image.src}
        alt={props.data.product_image.alt}
      />
    </div>
    <div className="basket_item__body">
      <a className="basket_item__name" href={props.data.product_url}>
        {props.data.product_name}
      </a>
      <div className="basket_item__price">
        {props.data.product_price && (
          <React.Fragment>
            <div className="basket_item__oldprice">
              {props.data.product_price}
            </div>
            <div className="basket_item__divider"> | </div>
          </React.Fragment>
        )}
        {props.data.product_price && (
          <div
            className={`basket_item__newprice ${
              !props.data.product_price && "basket_item__newprice--one"
            }`}
          >
            {props.data.product_price}
          </div>
        )}
        {props.data.sale && (
          <div className="basket_item__sale">{props.data.sale}</div>
        )}
      </div>
      <div className="basket_item__name">{props.data.product_sku}</div>
      {/*<div className="basket_item__status">
        <svg className="basket_item__status_icon">
          <use xlinkHref="#tick" />
        </svg>
        <div className="basket_item__status_text">{props.data.status}</div>
      </div>*/}
    </div>
    <div className="basket_item__footer">
      {props.data[SIZE_KEY] &&
      props.data[SIZE_KEY][0] &&
      props.data[SIZE_KEY][0].length > 0 ? (
        <div className="basket_item__sizes js_sizes">
          {props.data[SIZE_KEY][0].map((s, i) => {
            return (i === SIZE_LIMIT_MOB &&
              SIZE_LIMIT_MOB < props.data[SIZE_KEY][0].length - 1) ||
              (i === SIZE_LIMIT &&
                SIZE_LIMIT < props.data[SIZE_KEY][0].length - 1) ? (
              <React.Fragment key={s.id}>
                <div
                  onClick={e => toggleSizes(e.target)}
                  className={`basket_item__size basket_item__size--mob-more ${
                    i === SIZE_LIMIT_MOB &&
                    SIZE_LIMIT_MOB < props.data[SIZE_KEY][0].length - 1
                      ? "basket_item__size--mob"
                      : "basket_item__size--desktop"
                  }`}
                >
                  <svg className="basket_item__arrow">
                    <use xlinkHref="#arrow" />
                  </svg>
                </div>
                <div
                  onClick={() => props.setActiveSize(s)}
                  className={`basket_item__size ${
                    s.selected ? "basket_item__size--active" : ""
                  }`}
                >
                  {s.label}
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment key={s.id}>
                <div
                  onClick={() => props.setActiveSize(s)}
                  className={`basket_item__size ${
                    s.selected ? "basket_item__size--active" : ""
                  }`}
                >
                  {s.label}
                </div>
                {(i > SIZE_LIMIT_MOB &&
                  i === props.data[SIZE_KEY][0].length - 1) ||
                (i > SIZE_LIMIT && i === props.data[SIZE_KEY][0].length - 1) ? (
                  <div
                    key={s + 1000}
                    onClick={e => toggleSizes(e.target)}
                    className="basket_item__size basket_item__size--last"
                  >
                    <svg className="basket_item__arrow">
                      <use xlinkHref="#arrow" />
                    </svg>
                  </div>
                ) : (
                  ""
                )}
              </React.Fragment>
            );
          })}
        </div>
      ) : (
        ""
      )}
      <div className="basket_item__bottom">
        <div className="basket_item__quan">{props.labels.quantity}</div>
        <select
          className="basket_item__select"
          onChange={e => props.setQuantity(e.target.value)}
          value={props.data.qty}
        >
          {[...new Array(100)].map((a, index) => (
            <option key={index} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
        <button
          className="btn basket_item__remove"
          type="button"
          onClick={props.removeItem}
        >
          {props.labels.remove}
        </button>
      </div>
    </div>
  </div>
);

BasketItem.propTypes = {
  data: PropTypes.any,
  setActiveSize: PropTypes.func.isRequired,
  setQuantity: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  labels: PropTypes.any,
};
