import React, { useState } from "react";
import { Email } from "../form/email";
import { openModal } from "../modals/modal";
import { Success } from "../modals/success";

const labels = {
  title: "Password Recovery",
  text: "Your password reset instructions will be sent to you in an email.",
  emailLabel: "Email *",
  submit: "Submit",
};

const onSubmit = () => openModal(<Success />);

export const Forgot = () => {
  const [email, setEmail] = useState("");

  return (
    <div>
      <div className="modal__title">{labels.title}</div>
      <div className="modal__text">{labels.text}</div>
      <form onSubmit={onSubmit}>
        <div className="mb-15">
          <Email
            name="fgt_email"
            id="fgt_email"
            label={labels.emailLabel}
            onChange={e => setEmail(e.target.value)}
            value={email}
            isError={false}
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
