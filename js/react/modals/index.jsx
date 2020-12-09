import React from "react";
import { openModal } from "./modal";
import { Login } from "../forms/login";
import { Forgot } from "../forms/forgot";
import { Callback } from "../forms/callback";
import { Registration } from "../forms/registration";

export const initLoginTrigger = () => {
  const loginTrigger = document.querySelectorAll(".js_login_trigger");

  for (let i = 0; i < loginTrigger.length; i++) {
    loginTrigger[i].addEventListener("click", function (e) {
      e.preventDefault();
      openModal(<Login />);
    });
  }
};

export const initForgotTrigger = () => {
  document.addEventListener("click", function (e) {
    const isTrigger = e.target.classList.contains("js_forgot_trigger");

    if (isTrigger) {
      e.preventDefault();
      openModal(<Forgot />);
    }
  });
};

export const initRegisterTrigger = () => {
  document.addEventListener("click", function (e) {
    const isTrigger = e.target.classList.contains("js_reg_trigger");

    if (isTrigger) {
      e.preventDefault();
      openModal(<Registration />);
    }
  });
};

export const initCallbackTrigger = () => {
  const callTrigger = document.querySelectorAll(".js_callback");

  for (let i = 0; i < callTrigger.length; i++) {
    callTrigger[i].addEventListener("click", function () {
      const phone = this.getAttribute("data-phone");
      openModal(<Callback phone={phone} />, "callback");
    });
  }
};
