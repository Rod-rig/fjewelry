import React, { useState } from "react";
import PropTypes from "prop-types";

const labels = {
  promo: "I have promo code!",
  promoTitle: "Promo code",
  promoPlaceholder: "Enter promotional code here",
  promoSubmit: "Apply",
  promoSuccess: "Your promo code was applied successfully!",
};

export const Promocode = props => {
  const [isOpened, open] = useState(false);

  if (props.isSuccess) {
    return (
      <div className="promo promo__success">
        <svg className="promo__success_icon">
          <use xlinkHref="#tick" />
        </svg>
        <span className="promo__success_text">{labels.promoSuccess}</span>
      </div>
    );
  }

  return (
    <div className="promo">
      {isOpened ? (
        <React.Fragment>
          <div className="promo__title">{labels.promoTitle}</div>
          <form className="promo__row" onSubmit={props.onSubmit}>
            <div>
              <input
                type="text"
                value={props.value}
                name="promo"
                className={`fj_input promo__input ${
                  props.promoError ? "fj_input--error" : ""
                }`}
                onChange={props.onChange}
                placeholder={labels.promoPlaceholder}
                autoComplete="off"
              />
              {props.promoError && (
                <div className="text-error">{props.promoError}</div>
              )}
            </div>
            <button className="promo__submit" type="submit">
              {labels.promoSubmit}
            </button>
          </form>
        </React.Fragment>
      ) : (
        <div className="text-center">
          <button
            type="button"
            className="btn promo__btn"
            onClick={() => open(true)}
          >
            {labels.promo}
          </button>
        </div>
      )}
    </div>
  );
};

Promocode.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isSuccess: PropTypes.bool,
  promoError: PropTypes.string,
};
