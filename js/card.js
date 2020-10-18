import "../scss/card.scss";
import { initCommon } from "./common";
import { initBreadcrumbsScroll } from "./scroll/breadcrumbs";
import { initWatchedCarousel } from "./sliders/watched";
import { initCardMediaSlider } from "./sliders/card-media";
import { initCardSizesEvents } from "./pages/card";

document.addEventListener("DOMContentLoaded", function () {
  initCommon();
  initBreadcrumbsScroll();
  initWatchedCarousel();
  initCardMediaSlider();
  initCardSizesEvents();
});
