import React from "react";
import { openModal } from "./modal";
import { Login } from "../forms/login";

export const initLoginTrigger = () => {
  const logintTrigger = document.querySelector(".js_login_trigger");

  if (logintTrigger) {
    logintTrigger.addEventListener("click", function () {
      openModal(<Login />);
    });
  }
};
