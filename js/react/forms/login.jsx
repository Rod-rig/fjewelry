import React, { useState } from "react";
import { Email } from "../form/email";
import { Input } from "../form/input";
// import { isEmail } from "../../helpers/is-email";
import { Checkbox } from "../form/checkbox";

const labels = {
  title: "Enter cabinet",
  text: "Please log in to manage your existing orders.",
  emailLabel: "Email *",
  passwordLabel: "Password *",
  forgot: "Forgot password",
  reg: "Registration",
  remember: "Remember me",
  submit: "Submit",
};

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);

  return (
    <div>
      <div className="modal__title">{labels.title}</div>
      <div className="modal__text">{labels.text}</div>
      <form onSubmit={() => {}}>
        <div className="mb-15">
          <Email
            name="login_email"
            id="login_email"
            label={labels.emailLabel}
            onChange={e => setEmail(e.target.value)}
            value={email}
            isError={false}
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
            isError={false}
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
    </div>
  );
};
