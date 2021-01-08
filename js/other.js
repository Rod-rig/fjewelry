import "../scss/other.scss";
import { initCommon } from "./common";
import { initContactForm } from "./react/forms/contact";
import { initSeoScroll } from "./scroll/seo-text";
import { initSeoToggle } from "./seo/seo";
import { initFAQEvents } from "./pages/other";

document.addEventListener("DOMContentLoaded", function () {
  initCommon();
  initSeoScroll();
  initSeoToggle();
  initContactForm();
  initFAQEvents();
});
