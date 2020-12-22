import "../scss/other.scss";
import { initCommon } from "./common";
import { initContactForm } from "./react/forms/contact";

document.addEventListener("DOMContentLoaded", function () {
  initCommon();
  initContactForm();
});
