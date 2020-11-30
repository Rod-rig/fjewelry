import React, { useState } from "react";
import { Email } from "../form/email";
import { openModal } from "../modals/modal";
import { Success } from "../modals/success";
import ajax from "../../helpers/ajax";
import { Loader } from "../components/loader";

const labels = {
  title: "Password Recovery",
  text: "Your password reset instructions will be sent to you in an email.",
  emailLabel: "Email *",
  submit: "Submit",
};

export const Forgot = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const submitForm = e => {
    e.preventDefault();
    setLoading(true);
    ajax
      .post({
        url: "/query/customer/forgotPassword/",
        data: {
          email,
        },
      })
      .then(() => {
        setLoading(false);
        setError(false);
        openModal(<Success />);
      })
      .catch(({ response }) => {
        setLoading(false);
        setError(true);
        setErrorMessage(response.data.message);
      });
  };

  return isLoading ? (
    <div className="text-center">
      <Loader />
    </div>
  ) : (
    <React.Fragment>
      <div className="modal__title">{labels.title}</div>
      <div className="modal__text">{labels.text}</div>
      {isError && (
        <div className="text-error text-center mb-15">{errorMessage}</div>
      )}
      <form onSubmit={submitForm}>
        <div className="mb-15">
          <Email
            name="fgt_email"
            id="fgt_email"
            label={labels.emailLabel}
            onChange={e => setEmail(e.target.value)}
            value={email}
            isError={isError}
          />
        </div>
        <div className="text-center">
          <button className="main_link" type="submit">
            {labels.submit}
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};
