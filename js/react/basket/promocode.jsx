import React, { useState } from "react";
import PropTypes from "prop-types";

export const Promocode = props => {
  const [isOpened, open] = useState(false);

  // if (!props.isSuccess) {
  //   return (
  //     <div className="promo promo__success">
  //       <svg className="promo__success_icon">
  //         <use xlinkHref="#tick" />
  //       </svg>
  //       <span className="promo__success_text">{props.labels.promoSuccess}</span>
  //     </div>
  //   );
  // }

  return (
    <div className="promo">
      {isOpened ? (
        <React.Fragment>
          <div className="promo__title">{props.labels.promoTitle}</div>
          <form className="promo__row" onSubmit={e => e.preventDefault()}>
            <input
              type="text"
              // value={props.value}
              name="promo"
              className="fj_input promo__input"
              // onChange={props.onChange}
              placeholder={props.labels.promoPlaceholder}
              autoComplete="off"
            />
            <button className="promo__submit" type="submit">
              {props.labels.promoSubmit}
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
            {props.labels.promo}
          </button>
        </div>
      )}
    </div>
  );
};

Promocode.propTypes = {
  labels: PropTypes.any,
};
