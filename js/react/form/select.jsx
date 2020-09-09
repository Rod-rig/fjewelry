import React from "react";
import PropTypes from "prop-types";

export const Select = props => (
  <React.Fragment>
    <label className="fj_label" htmlFor={props.id}>
      {props.label}
    </label>
    <select
      className={`fj_select ${props.isError ? "fj_select--error" : ""}`}
      id={props.id}
      value={props.value}
      onChange={props.onChange}
      name={props.name}
    >
      {props.options.map((option, index) => {
        return (
          <option key={`${option.label}-${index}`} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </select>
  </React.Fragment>
);

Select.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
    })
  ).isRequired,
  isError: PropTypes.bool,
};
