import "../scss/card.scss";
import { initCommon } from "./common";
import { initBreadcrumbsScroll } from "./scroll/breadcrumbs";
import { initWatchedCarousel } from "./sliders/watched";
import { initCardMediaSlider } from "./sliders/card-media";
import { initCardEvents } from "./pages/card";
import { initReviewForm } from "./react/forms/review";

document.addEventListener("DOMContentLoaded", function () {
  initCommon();
  initBreadcrumbsScroll();
  initWatchedCarousel();
  initCardMediaSlider();
  initCardEvents();
  initReviewForm();
});
