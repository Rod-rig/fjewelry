import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { Email } from "../form/email";

export const initJoinForm = () => {
  const root = document.querySelector(".js_join_root");

  const label = root.getAttribute("data-label");
  const consent = root.getAttribute("data-consent");
  const submit = root.getAttribute("data-submit");
  ReactDOM.render(
    <Join label={label} consent={consent} submit={submit} />,
    root
  );
};

const submitForm = e => {
  e.preventDefault();
  console.log("submit");
};

const Join = props => {
  const [email, setEmail] = useState("");
  return (
    <form className="join__form" onSubmit={submitForm}>
      <Email
        label={props.label}
        onChange={e => setEmail(e.target.value)}
        name="join_email"
        id="join_email"
        value={email}
      />
      <div className="join__consent">{props.consent}</div>
      <div className="text-center">
        <button className="main_link" type="submit">
          {props.submit}
        </button>
      </div>
    </form>
  );
};

Join.propTypes = {
  label: PropTypes.string,
  consent: PropTypes.string,
  submit: PropTypes.string,
};
