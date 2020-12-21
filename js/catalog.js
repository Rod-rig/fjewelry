import "../scss/catalog.scss";
import { initCommon } from "./common";
import { initSeoScroll } from "./scroll/seo-text";
import { initFilterScroll } from "./scroll/filter";
import { initSeoToggle } from "./seo/seo";
import { initCatalogEvents } from "./pages/catalog";
import { initRange } from "./range/range";
import { initCatalogCommentsCarousel } from "./sliders/catalog-comments";
import { initJoinForm } from "./react/forms/join";
import { initWatchedCarousel } from "./sliders/watched";
import { initTagsScroll } from "./scroll/tags";
import { initCompareEvents } from "./common/compare";
import { initWishEvents } from "./common/wishlist";

document.addEventListener("DOMContentLoaded", function () {
  initCommon();
  initCatalogEvents();
  initFilterScroll();
  initTagsScroll();
  initRange();
  initSeoScroll();
  initSeoToggle();
  initCatalogCommentsCarousel();
  initJoinForm();
  initWatchedCarousel();
  initCompareEvents();
  initWishEvents();
});
