import "../scss/main.scss";
import { initCommon } from "./common";
import { initWatchedCarousel } from "./sliders/watched";

document.addEventListener("DOMContentLoaded", function () {
  initCommon();
  initWatchedCarousel();
});
