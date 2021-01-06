import React from "react";
import { openModal } from "./modal";
import { Login } from "../forms/login";
import { Forgot } from "../forms/forgot";
import { Callback } from "../forms/callback";
import { Registration } from "../forms/registration";

export const initLoginTrigger = () => {
  document.addEventListener("click", function (e) {
    const trigger = e.target.closest(".js_login_trigger");

    if (trigger) {
      e.preventDefault();
      openModal(<Login />);
    }
  });
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
  document.addEventListener("click", function (e) {
    const trigger = e.target.closest(".js_callback");

    if (trigger) {
      e.preventDefault();
      const phone = trigger.getAttribute("data-phone");
      openModal(<Callback phone={phone} />, "callback");
    }
  });
};
