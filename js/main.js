import "../scss/main.scss";
import { initCommon } from "./common";
import { initWatchedCarousel } from "./sliders/watched";
import { initSeoScroll } from "./scroll/seo-text";
import { initSeoToggle } from "./seo/seo";
import { initCategoriesEvents } from "./pages/main";
import { initCompareEvents } from "./common/compare";
import { initWishEvents } from "./common/wishlist";
import { fetchViewedProducts } from "./common/viewed";

document.addEventListener("DOMContentLoaded", function () {
  initCommon();
  initWatchedCarousel();
  initSeoScroll();
  initSeoToggle();
  initCategoriesEvents();
  initCompareEvents();
  initWishEvents();
  fetchViewedProducts();
});
