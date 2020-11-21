import "../scss/basket.scss";
import { initCommon } from "./common";
import { initBreadcrumbsScroll } from "./scroll/breadcrumbs";
import { initWatchedCarousel } from "./sliders/watched";
import { initQuickView } from "./pages/catalog";
import { initBasket, initBasket2 } from "./react/basket";

document.addEventListener("DOMContentLoaded", function () {
  initCommon();
  initBreadcrumbsScroll();
  initWatchedCarousel();
  initQuickView();
  initBasket();
  initBasket2();
});
