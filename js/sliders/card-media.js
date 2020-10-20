import { tns } from "../../node_modules/tiny-slider/src/tiny-slider";
import { isMobile } from "../helpers/is-mobile";

const THUMB = ".js_media_thumb";

export const initCardMediaSlider = () => {
  const mediaSlider = document.querySelector(".js_media_slider");

  if (mediaSlider) {
    tns({
      container: mediaSlider,
      items: 1,
      slideBy: 1,
      navContainer: THUMB,
      navAsThumbnails: true,
      loop: false,
      controls: false,
    });
  }

  const thumb = document.querySelector(".js_media_thumb_carousel");
  if (thumb && !isMobile()) {
    tns({
      container: thumb,
      items: 4,
      slideBy: 1,
      loop: false,
      nav: false,
      controlsContainer: ".js_media_thumb_ctrl",
      axis: "vertical",
      responsive: {
        992: {
          items: 5,
        },
      },
    });
  }
};
