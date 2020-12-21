import "../scss/basket.scss";
import { initCommon } from "./common";
import { initWatchedCarousel } from "./sliders/watched";
import { initQuickView } from "./pages/catalog";
import { initBasket, initBasket2 } from "./react/basket";

document.addEventListener("DOMContentLoaded", function () {
  initCommon();
  initWatchedCarousel();
  initQuickView();
  initBasket();
  initBasket2();
});
