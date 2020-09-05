import "../scss/main.scss";
import { initCommon } from "./common";
import { initWatchedCarousel } from "./sliders/watched";
import { initSeoScroll } from "./scroll/seo-text";
import { initSeoToggle } from "./seo/seo";

document.addEventListener("DOMContentLoaded", function () {
  initCommon();
  initWatchedCarousel();
  initSeoScroll();
  initSeoToggle();
});
