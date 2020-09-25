import "../scss/catalog.scss";
import { initCommon } from "./common";
import { initBreadcrumbsScroll } from "./scroll/breadcrumbs";
import { initSeoScroll } from "./scroll/seo-text";
import { initSeoToggle } from "./seo/seo";
import { initFilterHide, initSortCatalog } from "./pages/catalog";

document.addEventListener("DOMContentLoaded", function () {
  initCommon();
  initBreadcrumbsScroll();
  initSortCatalog();
  initFilterHide();
  initSeoScroll();
  initSeoToggle();
});
