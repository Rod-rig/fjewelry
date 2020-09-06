import { initFooterEvents } from "./footer/footer";
import { initMenuEvents, initSubmenuEvents } from "./pages/main";
import { initClosestPolyfill } from "./polyfill/closest";
import { initSearchEvents } from "./react/search";

export const initCommon = () => {
  initClosestPolyfill();
  initSearchEvents();
  initMenuEvents();
  initSubmenuEvents();
  initFooterEvents();
};
