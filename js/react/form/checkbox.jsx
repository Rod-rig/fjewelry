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
      <label
        htmlFor={props.id}
        className={`checkbox__label ${props.className ? props.className : ""}`}
      >
        {props.label ? props.label : props.children}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  label: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.any,
  className: PropTypes.string,
};
