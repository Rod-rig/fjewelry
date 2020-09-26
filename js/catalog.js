import "../scss/catalog.scss";
import { initCommon } from "./common";
import { initBreadcrumbsScroll } from "./scroll/breadcrumbs";
import { initSeoScroll } from "./scroll/seo-text";
import { initFilterScroll } from "./scroll/filter";
import { initSeoToggle } from "./seo/seo";
import { initCatalogEvents } from "./pages/catalog";
import { initRange } from "./range/range";

document.addEventListener("DOMContentLoaded", function () {
  initCommon();
  initBreadcrumbsScroll();
  initCatalogEvents();
  initFilterScroll();
  initRange();
  initSeoScroll();
  initSeoToggle();
});
