import React, { useState } from "react";
import { Email } from "../form/email";
import { Input } from "../form/input";
// import { isEmail } from "../../helpers/is-email";
import { Checkbox } from "../form/checkbox";
import ajax from "../../helpers/ajax";
import { Loader } from "../components/loader";

const labels = {
  title: "Enter cabinet",
  text: "Please log in to manage your existing orders.",
  emailLabel: "Email *",
  passwordLabel: "Password *",
  forgot: "Forgot password",
  reg: "Registration",
  remember: "Remember me",
  submit: "Submit",
  success: "Successful login, the page will be reloaded",
};

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [isSuccessSubmit, setSuccessSubmit] = useState(false);
  const [isError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const submitForm = e => {
    e.preventDefault();
    setLoading(true);
    ajax
      .post({
        url: "/query/customer/login/",
        data: {
          username: email,
          password,
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
          <Email
            name="login_email"
            id="login_email"
            label={labels.emailLabel}
            onChange={e => setEmail(e.target.value)}
            value={email}
            isError={isError}
          />
        </div>
        <div className="mb-15">
          <Input
            type="password"
            name="login_pwd"
            id="login_pwd"
            label={labels.passwordLabel}
            onChange={e => setPassword(e.target.value)}
            value={password}
            isError={isError}
          />
        </div>
        <div className="login__links">
          <a href="" className="login__link js_forgot_trigger">
            {labels.forgot}
          </a>
          <span> | </span>
          <a href="" className="login__link">
            {labels.reg}
          </a>
        </div>
        <div className="login__check">
          <Checkbox
            id="login_rem"
            name="login_rem"
            checked={remember}
            label={labels.remember}
            onChange={e => setRemember(e.target.checked)}
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
