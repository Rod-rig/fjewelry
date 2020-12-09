import React, { useState } from "react";
import { Email } from "../form/email";
import { Input } from "../form/input";
// import { isEmail } from "../../helpers/is-email";
import { Checkbox } from "../form/checkbox";
import ajax from "../../helpers/ajax";
import { Loader } from "../components/loader";

const labels = {
  title: "Register",
  text: "Please fill in the information below",
  fnameLabel: "First Name *",
  lnameLabel: "Last Name *",
  emailLabel: "Email *",
  passwordLabel: "Password *",
  confirmPasswordLabel: "Confirm Password *",
  forgot: "Forgot password",
  reg: "Registration",
  subscribe: "Sign up for newsletter",
  submit: "Create account",
  success: "Successful login, the page will be reloaded",
  terms1: "By submitting this form you agree to our ",
  terms2: "Terms & Conditions",
  terms3: " and the terms of your ",
  terms4: "Privacy Policy",
};

export const Registration = () => {
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubscribed, setSubscribed] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [isSuccessSubmit, setSuccessSubmit] = useState(false);
  const [isError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const submitForm = e => {
    e.preventDefault();
    setLoading(true);
    ajax
      .post({
        url: "/query/customer/register/",
        data: {
          // username: email,
          // password,
        },
      })
      .then(() => {
        setSuccessSubmit(true);
        setError(false);
        window.location.reload();
      })
      .catch(({ response }) => {
        setLoading(false);
        setError(true);
        setErrorMessage(response.data.message);
      });
  };

  return isSuccessSubmit ? (
    <div>{labels.success}</div>
  ) : isLoading ? (
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
          <Input
            name="reg_fname"
            id="reg_fname"
            label={labels.fnameLabel}
            onChange={e => setFname(e.target.value)}
            value={fname}
            isError={isError}
          />
        </div>
        <div className="mb-15">
          <Input
            name="reg_lname"
            id="reg_lname"
            label={labels.lnameLabel}
            onChange={e => setLname(e.target.value)}
            value={lname}
            isError={isError}
          />
        </div>
        <div className="mb-15">
          <Email
            name="reg_email"
            id="reg_email"
            label={labels.emailLabel}
            onChange={e => setEmail(e.target.value)}
            value={email}
            isError={isError}
          />
        </div>
        <div className="mb-15">
          <Input
            type="password"
            name="reg_pwd"
            id="reg_pwd"
            label={labels.passwordLabel}
            onChange={e => setPassword(e.target.value)}
            value={password}
            isError={isError}
          />
        </div>
        <div className="mb-15">
          <Input
            type="password"
            name="conf_reg_pwd"
            id="conf_reg_pwd"
            label={labels.confirmPasswordLabel}
            onChange={e => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            isError={isError}
          />
        </div>
        <div className="mb-15">
          <Checkbox
            id="login_rem"
            name="login_rem"
            checked={isSubscribed}
            label={labels.subscribe}
            onChange={e => setSubscribed(e.target.checked)}
          />
        </div>
        <div className="register__footer">
          {labels.terms1} <a href="">{labels.terms2}</a> {labels.terms3}{" "}
          <a href="">{labels.terms4}</a>
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
