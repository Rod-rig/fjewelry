import React, { useState } from "react";
import { render } from "react-dom";
import { Email } from "../form/email";
import { Input } from "../form/input";
import { Checkbox } from "../form/checkbox";
import ajax from "../../helpers/ajax";
import { showFullScreenLoader, removeLoader } from "../components/loader";

const labels = {
  emailLabel: "Email *",
  passwordLabel: "Password *",
  forgot: "Forgot password",
  remember: "Remember me",
  submit: "Login",
  reg: "Registration",
};

export const Login2 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [isError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const submitForm = e => {
    e.preventDefault();
    showFullScreenLoader();
    ajax
      .post({
        url: "/query/customer/login/",
        data: {
          username: email,
          password,
        },
      })
      .then(() => {
        setError(false);
        window.location.href = "/";
        removeLoader();
      })
      .catch(({ response }) => {
        setError(true);
        setErrorMessage(response.data.message);
        removeLoader();
      });
  };

  return (
    <React.Fragment>
      {isError && (
        <div className="text-error text-center mb-15">{errorMessage}</div>
      )}
      <form onSubmit={submitForm}>
        <div className="mb-15">
          <Email
            name="auth_email"
            id="auth_email"
            label={labels.emailLabel}
            onChange={e => setEmail(e.target.value)}
            value={email}
            isError={isError}
          />
        </div>
        <div className="mb-15">
          <Input
            type="password"
            name="auth_pwd"
            id="auth_pwd"
            label={labels.passwordLabel}
            onChange={e => setPassword(e.target.value)}
            value={password}
            isError={isError}
          />
        </div>
        <div className="auth__form_row">
          <div className="login__links">
            <a href="" className="login__link js_forgot_trigger">
              {labels.forgot}
            </a>
            <span className="auth__reg"> | </span>
            <a href="" className="login__link auth__reg js_reg_trigger">
              {labels.reg}
            </a>
          </div>
          <div className="login__check">
            <Checkbox
              id="auth_rem"
              name="auth_rem"
              checked={remember}
              label={labels.remember}
              onChange={e => setRemember(e.target.checked)}
            />
          </div>
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

export const initLoginForm = () => {
  const root = document.querySelector(".js_login_root");
  render(<Login2 />, root);
};
