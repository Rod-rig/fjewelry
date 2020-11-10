import React from "react";
import PropTypes from "prop-types";

export const BasketItem = props => (
  <div className="basket_item">
    <div className="basket_item__img">
      <img
        className="img-responsive basket_item__image"
        src={props.data.img}
        alt={props.data.name}
      />
    </div>
    <div className="basket_item__body">
      <a className="basket_item__name" href={props.data.href}>
        {props.data.name}
      </a>
      <div className="basket_item__price">
        {props.data.oldPrice && (
          <React.Fragment>
            <div className="basket_item__oldprice">{props.data.oldPrice}</div>
            <div className="basket_item__divider"> | </div>
          </React.Fragment>
        )}
        {props.data.price && (
          <div
            className={`basket_item__newprice ${
              !props.data.oldPrice && "basket_item__newprice--one"
            }`}
          >
            {props.data.price}
          </div>
        )}
        {props.data.sale && (
          <div className="basket_item__sale">{props.data.sale}</div>
        )}
      </div>
      <div className="basket_item__name">{props.data.sku}</div>
      <div className="basket_item__status">
        <svg className="basket_item__status_icon">
          <use xlinkHref="#tick"></use>
        </svg>
        <div className="basket_item__status_text">{props.data.status}</div>
      </div>
    </div>
    <div className="basket_item__footer">
      {props.data.sizes && props.data.sizes.length > 0 ? (
        <div className="basket_item__sizes">
          {props.data.sizes && props.data.sizes.length > 0
            ? props.data.sizes.map(s => (
                <div
                  onClick={() => props.setActiveSize(s)}
                  className={`basket_item__size ${
                    props.data.activeSizes.includes(s)
                      ? "basket_item__size--active"
                      : ""
                  }`}
                  key={s}
                >
                  {s}
                </div>
              ))
            : ""}
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
        <button className="btn basket_item__remove" type="button">
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
  labels: PropTypes.any,
};
