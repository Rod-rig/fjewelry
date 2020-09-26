import { tns } from "../../node_modules/tiny-slider/src/tiny-slider";

export const initCatalogCommentsCarousel = () => {
  const slider = document.querySelector(".js_catalog_comments");

  if (slider) {
    tns({
      container: slider,
      items: 1,
      controls: false,
      navPosition: "bottom",
      loop: false,
      responsive: {
        768: {
          items: 2,
          gutter: 40,
        },
      },
    });
  }
};
