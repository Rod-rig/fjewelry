import { tns } from "../../node_modules/tiny-slider/src/tiny-slider";
import { isMobile } from "../helpers/is-mobile";

const THUMB = ".js_media_thumb";

export const initCardMediaSlider = () => {
  const mediaSlider = document.querySelector(".js_media_slider");
  const mediaPopupSlider = document.querySelector(".js_media_popup_slider");

  if (mediaSlider) {
    const mainSliderInstance = tns({
      container: mediaSlider,
      items: 1,
      slideBy: 1,
      navContainer: THUMB,
      navAsThumbnails: true,
      loop: false,
      controls: false,
    });

    if (mediaPopupSlider) {
      const popupSliderInstance = tns({
        container: mediaPopupSlider,
        items: 1,
        slideBy: 1,
        loop: false,
        navPosition: "bottom",
        controlsContainer: ".js_media_popup_ctrl",
      });

      mainSliderInstance.events.on("indexChanged", info => {
        popupSliderInstance.goTo(info.index);
      });
    }
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
