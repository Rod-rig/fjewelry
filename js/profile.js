import "../scss/profile.scss";
import { initCommon } from "./common";
import { initBreadcrumbsScroll } from "./scroll/breadcrumbs";
import { initProfileEvents } from "./pages/profile";
import { initShareWishlistTrigger } from "./react/forms/share-wishlist";
import { initAddressEvents } from "./react/forms/address";
import { initSubscription } from "./react/forms/subscription";
import { initProfileEditForm } from "./react/forms/profile-edit";

document.addEventListener("DOMContentLoaded", function () {
  initCommon();
  initBreadcrumbsScroll();
  initProfileEvents();
  initShareWishlistTrigger();
  initAddressEvents();
  initSubscription();
  initProfileEditForm();
});
