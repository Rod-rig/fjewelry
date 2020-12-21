import { initFooterEvents } from "./footer/footer";
import { initMenuEvents, initSubmenuEvents } from "./pages/main";
import { initClosestPolyfill } from "./polyfill/closest";
import { initSearchEvents } from "./react/search";
import {
  initCallbackTrigger,
  initForgotTrigger,
  initLoginTrigger,
  initRegisterTrigger,
} from "./react/modals";
import { initBasketScroll } from "./scroll/basket";
import { initBasketEvents } from "./basket/basket";
import { initBreadcrumbsScroll } from "./scroll/breadcrumbs";

export const initCommon = () => {
  initClosestPolyfill();
  initSearchEvents();
  initMenuEvents();
  initSubmenuEvents();
  initBreadcrumbsScroll();
  initBasketScroll();
  initBasketEvents();
  initFooterEvents();
  initLoginTrigger();
  initForgotTrigger();
  initRegisterTrigger();
  initCallbackTrigger();
};
