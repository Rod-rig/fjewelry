import "../scss/catalog.scss";
import { initCommon } from "./common";
import { initBreadcrumbsScroll } from "./scroll/breadcrumbs";
// import { initWatchedCarousel } from "./sliders/watched";
// import { initSeoScroll } from "./scroll/seo-text";
// import { initSeoToggle } from "./seo/seo";
// import { initCategoriesEvents } from "./pages/main";

document.addEventListener("DOMContentLoaded", function () {
  initCommon();
  initBreadcrumbsScroll();
  // initWatchedCarousel();
  // initSeoScroll();
  // initSeoToggle();
  // initCategoriesEvents();
});
