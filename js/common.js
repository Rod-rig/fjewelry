import { initFooterEvents } from "./footer/footer";
import { initMenuEvents, initSubmenuEvents } from "./pages/main";
import { initClosestPolyfill } from "./polyfill/closest";
import { initSearchEvents } from "./react/search";
import {
  initCallbackTrigger,
  initForgotTrigger,
  initLoginTrigger,
} from "./react/modals";
import { initBasketScroll } from "./scroll/basket";
import { initBasketEvents } from "./basket/basket";

export const initCommon = () => {
  initClosestPolyfill();
  initSearchEvents();
  initMenuEvents();
  initSubmenuEvents();
  initBasketScroll();
  initBasketEvents();
  initFooterEvents();
  initLoginTrigger();
  initForgotTrigger();
  initCallbackTrigger();
};
