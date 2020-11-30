import ajax from "../helpers/ajax";
import { initCarousel } from "../sliders/watched";

export const fetchViewedProducts = () => {
  const viewed = document.querySelector(".js_viewed-products");

  if (viewed) {
    ajax
      .get({
        url: "/query/viewed/get/",
      })
      .then(({ data }) => {
        viewed.innerHTML = data;
        const carousel = viewed.querySelector(".js_main_carousel");
        carousel && initCarousel(carousel);
      })
      .catch(e => {
        console.log("Couldn't fetch viewed products", e);
      });
  }
};
