import React from "react";
import PropTypes from "prop-types";

export const Textarea = props => (
  <React.Fragment>
    <label className="fj_label" htmlFor={props.id}>
      {props.label}
    </label>
    <textarea
      className={`fj_textarea ${props.className}`}
      name={props.name}
      onChange={props.onChange}
      value={props.value}
      id={props.id}
    />
  </React.Fragment>
);

Textarea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
};
