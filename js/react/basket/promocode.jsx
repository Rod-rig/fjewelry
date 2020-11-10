import React from "react";
import PropTypes from "prop-types";

export const Promocode = props => (
  <div className="promo">
    <button type="button" className="btn promo__btn">
      {props.labels.promo}
    </button>
  </div>
);

Promocode.propTypes = {
  labels: PropTypes.any,
};
