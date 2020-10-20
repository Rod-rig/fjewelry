export const initCardEvents = () => {
  const sizeButtons = document.querySelectorAll(".js_size_more");
  const sizes = document.querySelectorAll(".js_card_size");
  const tabTrigger = document.querySelectorAll(".js_card_tab_trigger");
  const showSpecBtn = document.querySelectorAll(".js_show_spec");
  const reviewsTogglers = document.querySelectorAll(".js_reviews_toggle");
  const infoTab = document.querySelectorAll(".js_info_tab");
  const textBtn = document.querySelectorAll(".js_card_text_btn");

  // init sizes expand/collapse
  for (let i = 0; i < sizeButtons.length; i++) {
    sizeButtons[i].addEventListener("click", function () {
      const sizesContainer = document.querySelector(".js_card_sizes");
      sizesContainer.classList.toggle("card__sizes--more");
    });
  }

  for (let i = 0; i < sizes.length; i++) {
    sizes[i].addEventListener("click", function () {
      for (let j = 0; j < sizes.length; j++) {
        sizes[j].classList.remove("card__size--active");
      }
      this.classList.add("card__size--active");
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
};
