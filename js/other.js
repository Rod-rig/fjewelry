import "../scss/other.scss";
import { initCommon } from "./common";
import { initContactForm } from "./react/forms/contact";
import { initLoginForm } from "./react/forms/login2";
import { initSeoScroll } from "./scroll/seo-text";
import { initSeoToggle } from "./seo/seo";
import { initFAQEvents, initLoadMore } from "./pages/other";

document.addEventListener("DOMContentLoaded", function () {
  initCommon();
  initSeoScroll();
  initSeoToggle();
  initContactForm();
  initFAQEvents();
  initLoadMore();
  initLoginForm();
});
