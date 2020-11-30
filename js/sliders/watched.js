import { tns } from "../../node_modules/tiny-slider/src/tiny-slider";

export const initCarousel = el => {
  tns({
    container: el,
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
};

export const initWatchedCarousel = () => {
  const sliders = document.querySelectorAll(".js_main_carousel");

  if (sliders.length > 0) {
    for (let i = 0; i < sliders.length; i++) {
      initCarousel(sliders[i]);
    }
  }
};
