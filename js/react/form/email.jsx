import React from "react";
import PropTypes from "prop-types";

export const Email = props => {
  return (
    <React.Fragment>
      <label className="fj_label" htmlFor={props.id}>
        {props.label}
      </label>
      <input
        type="email"
        value={props.value}
        name={props.name}
        id={props.id}
        className={`fj_input ${props.isError ? "fj_input--error" : ""}`}
        onChange={props.onChange}
        required
      />
    </React.Fragment>
  );
};

Email.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  isError: PropTypes.bool,
};
