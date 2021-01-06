import ajax from "../helpers/ajax";
import { removeLoader, showFullScreenLoader } from "../react/components/loader";

export const initCardEvents = () => {
  const sizeButtons = document.querySelectorAll(".js_size_more");
  const sizes = document.querySelectorAll(".js_card_size");
  const tabTrigger = document.querySelectorAll(".js_card_tab_trigger");
  const showSpecBtn = document.querySelectorAll(".js_show_spec");
  const reviewsTogglers = document.querySelectorAll(".js_reviews_toggle");
  const infoTab = document.querySelectorAll(".js_info_tab");
  const textBtn = document.querySelectorAll(".js_card_text_btn");
  const mediaPopupTrigger = document.querySelectorAll(".js_media_trigger");

  // init sizes expand/collapse
  for (let i = 0; i < sizeButtons.length; i++) {
    sizeButtons[i].addEventListener("click", function () {
      const sizesContainer = document.querySelector(".js_card_sizes");
      sizesContainer.classList.toggle("card__sizes--more");
    });
  }

  for (let i = 0; i < sizes.length; i++) {
    sizes[i].addEventListener("click", function () {
      const sku = this.getAttribute("data-sku");
      if (!sku) return;
      showFullScreenLoader();
      for (let j = 0; j < sizes.length; j++) {
        sizes[j].classList.remove("card__size--active");
      }
      this.classList.add("card__size--active");

      ajax
        .get({
          url: `/query/product/getSize/?sku=${sku}`,
        })
        .then(({ data }) => {
          const oldPrice = document.querySelector(".js_card_old_price");
          const price = document.querySelector(".js_card_price");
          const sku = document.querySelector(".js_card_sku");
          const buy = document.querySelectorAll(".js_card_basket");

          if (oldPrice) {
            oldPrice.innerHTML = data.prices.regularPriceFormatted;
          }
          if (price) {
            price.innerHTML = data.prices.specialPriceFormatted;
          }
          if (sku) {
            sku.innerHTML = data.sku;
          }
          for (let k = 0; k < buy.length; k++) {
            buy[k].setAttribute("data-id", data.id);
          }
          removeLoader();
        })
        .catch(err => {
          removeLoader();
          console.log(`Couldn't get product size info for sku ${sku}`, err);
        });
    });
  }

  for (let i = 0; i < tabTrigger.length; i++) {
    tabTrigger[i].addEventListener("click", function () {
      const tab = this.closest(".js_card_tab");
      tab.classList.toggle("card__tab--show");
    });
  }

  for (let i = 0; i < showSpecBtn.length; i++) {
    showSpecBtn[i].addEventListener("click", function () {
      const specTable = document.querySelector(".js_spec_table");

      if (specTable) {
        specTable.classList.toggle("card__tab_table--more");
      }
    });
  }

  for (let i = 0; i < reviewsTogglers.length; i++) {
    reviewsTogglers[i].addEventListener("click", function () {
      const reviewsList = document.querySelector(".js_reviews_list");

      if (reviewsList) {
        reviewsList.classList.toggle("reviews--show");
      }
    });
  }

  for (let i = 0; i < infoTab.length; i++) {
    infoTab[i].addEventListener("click", function () {
      const infoTrigger = document.querySelectorAll(".js_info_trigger");

      for (let j = 0; j < infoTrigger.length; j++) {
        infoTrigger[j].classList.remove("card__i_content--show");
      }

      for (let k = 0; k < infoTab.length; k++) {
        infoTab[k].classList.remove("active");
      }

      this.classList.toggle("active");
      const target = this.getAttribute("data-target");
      const el = document.querySelector(target);
      el && el.classList.toggle("card__i_content--show");
    });
  }

  for (let i = 0; i < textBtn.length; i++) {
    textBtn[i].addEventListener("click", function () {
      this.closest(".js_card_text").classList.toggle("card__i_text--show");
    });
  }

  for (let i = 0; i < mediaPopupTrigger.length; i++) {
    mediaPopupTrigger[i].addEventListener("click", function () {
      const popup = document.querySelector(".js_media_popup");
      popup.classList.toggle("hide");
    });
  }
};
