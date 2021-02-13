import React from "react";
import PropTypes from "prop-types";

export const Input = props => {
  return (
    <React.Fragment>
      <label className="fj_label" htmlFor={props.id}>
        {props.label}
      </label>
      <input
        type={props.type}
        value={props.value}
        name={props.name}
        id={props.id}
        className={`fj_input ${props.isError ? "fj_input--error" : ""}`}
        onChange={props.onChange}
        required={props.required}
      />
    </React.Fragment>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  isError: PropTypes.bool,
  required: PropTypes.bool,
};

Input.defaultProps = {
  type: "text",
  required: true,
};
