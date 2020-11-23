import React from "react";
import PropTypes from "prop-types";

export const Radio = props => {
  return (
    <label htmlFor={props.id} className="fj_radio">
      <input
        id={props.id}
        checked={props.checked}
        className="fj_radio__input"
        name={props.name}
        type="radio"
        value={props.value}
        onChange={props.onChange}
      />
      <div className="fj_radio__content">
        {props.label ? props.label : props.children}
      </div>
    </label>
  );
};

Radio.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  label: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any,
  children: PropTypes.any,
};
