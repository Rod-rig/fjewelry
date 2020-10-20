import { initQuickViewSlider } from "../sliders/quick-view";

const initSortCatalog = () => {
  const select = document.querySelector(".js_catalog_sort");

  if (select) {
    select.addEventListener("change", function () {
      window.location = this.value;
    });
  }
};

const initFilterHide = () => {
  const filterToggle = document.querySelectorAll(".js_filter_toggle");
  const catalog = document.querySelector(".js_catalog_list");
  for (let i = 0; i < filterToggle.length; i++) {
    filterToggle[i].addEventListener("click", function () {
      if (catalog) {
        catalog.classList.toggle("catalog--filter-hide");
      }
    });
  }
};

const initSubfilterToggle = () => {
  const subFilterToggle = document.querySelectorAll(".js_subfilter_toggle");

  for (let i = 0; i < subFilterToggle.length; i++) {
    subFilterToggle[i].addEventListener("click", function () {
      const subFilter = this.closest(".js_subfilter");

      if (subFilter) {
        subFilter.classList.toggle("filter__section--hide");
      }
    });
  }
};

export const initQuickView = () => {
  const triggers = document.querySelectorAll(".js_quick_view");
  let isInited = false;
  initQuickViewSlider();

  for (let i = 0; i < triggers.length; i++) {
    triggers[i].addEventListener("click", function () {
      const modal = document.querySelector(".js_quick_view_modal");
      modal && modal.classList.toggle("hide");

      if (!isInited) {
        initQuickViewSlider();
        isInited = true;
      }
    });
  }
};

export const initCatalogEvents = () => {
  initSortCatalog();
  initFilterHide();
  initSubfilterToggle();
  initQuickView();
};
