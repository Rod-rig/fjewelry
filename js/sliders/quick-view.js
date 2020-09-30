import { tns } from "../../node_modules/tiny-slider/src/tiny-slider";
import { isMobile } from "../helpers/is-mobile";

const THUMB = ".js_thumb";

export const initQuickViewSlider = () => {
  const quickView = document.querySelector(".js_quick_view_slider");

  if (quickView) {
    tns({
      container: quickView,
      items: 1,
      slideBy: 1,
      navContainer: THUMB,
      navAsThumbnails: true,
      loop: false,
      controls: false,
    });
  }

  const thumb = document.querySelector(".js_thumb_carousel");
  if (thumb && !isMobile()) {
    tns({
      container: thumb,
      items: 4,
      slideBy: 1,
      loop: false,
      nav: false,
      controlsContainer: ".js_thumb_ctrl",
      gutter: 10,
    });
  }
};
