import { initFooterEvents } from "./footer/footer";
import { initMenuEvents, initSubmenuEvents } from "./pages/main";
import { initClosestPolyfill } from "./polyfill/closest";

export const initCommon = () => {
  initClosestPolyfill();
  initMenuEvents();
  initSubmenuEvents();
  initFooterEvents();
};
