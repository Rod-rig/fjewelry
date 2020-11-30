import React, { useState } from "react";
import PropTypes from "prop-types";
import { render } from "react-dom";
import { Email } from "../form/email";
import ajax from "../../helpers/ajax";

const labels = {
  success: "You have successfully subscribed to the newsletter",
};

export const initJoinForm = () => {
  const root = document.querySelector(".js_join_root");

  if (root) {
    const label = root.getAttribute("data-label");
    const consent = root.getAttribute("data-consent");
    const submit = root.getAttribute("data-submit");
    render(<Join label={label} consent={consent} submit={submit} />, root);
  }
};

const Join = props => {
  const [email, setEmail] = useState("");
  const [isSuccessSubmit, setSuccessSubmit] = useState(false);
  const [isError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const submitForm = e => {
    e.preventDefault();
    ajax
      .post({
        url: "/query/subscriber/add/",
        data: {
          email,
        },
      })
      .then(() => {
        setSuccessSubmit(true);
        setError(false);
      })
      .catch(({ response }) => {
        setError(true);
        setErrorMessage(response.data.message);
      });
  };

  return isSuccessSubmit ? (
    <div className="text-center">{labels.success}</div>
  ) : (
    <form className="join__form" onSubmit={submitForm}>
      {isError && (
        <div className="text-error text-center mb-15">{errorMessage}</div>
      )}
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
