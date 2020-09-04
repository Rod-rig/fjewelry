import { tns } from "../../node_modules/tiny-slider/src/tiny-slider";

export const initWatchedCarousel = () => {
  const slider = document.querySelector(".js_watched_carousel");

  if (slider) {
    tns({
      container: slider,
      items: 2,
      slideBy: "page",
      gutter: 20,
      controls: false,
      navPosition: "bottom",
      loop: false,
      responsive: {
        480: {
          items: 3,
        },
        768: {
          items: 4,
          gutter: 25,
        },
        992: {
          gutter: 40,
        },
      },
    });
  }
};
