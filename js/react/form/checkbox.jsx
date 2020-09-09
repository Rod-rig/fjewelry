import React from "react";
import PropTypes from "prop-types";

export const Checkbox = props => {
  return (
    <div className="checkbox">
      <input
        id={props.id}
        name={props.name}
        type="checkbox"
        className="checkbox__input"
        checked={props.checked ? "checked" : ""}
        onChange={props.onChange}
      />
      <label htmlFor={props.id} className="checkbox__label">
        {props.label}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  label: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
};
