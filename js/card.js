import "../scss/card.scss";
import { initCommon } from "./common";
import { initBreadcrumbsScroll } from "./scroll/breadcrumbs";
import { initWatchedCarousel } from "./sliders/watched";
import { initCardMediaSlider } from "./sliders/card-media";
import { initCardEvents } from "./pages/card";
import { initQuickView } from "./pages/catalog";
import { initReviewForm } from "./react/forms/review";
import { initJoinForm } from "./react/forms/join";
import { initSeoScroll } from "./scroll/seo-text";
import { initSeoToggle } from "./seo/seo";

document.addEventListener("DOMContentLoaded", function () {
  initCommon();
  initBreadcrumbsScroll();
  initWatchedCarousel();
  initCardMediaSlider();
  initCardEvents();
  initReviewForm();
  initQuickView();
  initJoinForm();
  initSeoScroll();
  initSeoToggle();
});
