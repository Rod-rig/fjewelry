import "../scss/profile.scss";
import { initCommon } from "./common";
import { initBreadcrumbsScroll } from "./scroll/breadcrumbs";
import { initProfileEvents } from "./pages/profile";
import { initShareWishlistTrigger } from "./react/forms/share-wishlist";
import { initAddressEvents } from "./react/forms/address";

document.addEventListener("DOMContentLoaded", function () {
  initCommon();
  initBreadcrumbsScroll();
  initProfileEvents();
  initShareWishlistTrigger();
  initAddressEvents();
});
