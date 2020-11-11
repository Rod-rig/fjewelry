import { initQuickViewSlider } from "../sliders/quick-view";
import ajax from "../helpers/ajax";

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

const initLoadMore = () => {
  const currentPager = document.querySelector(".pagination__link--current");
  const pageLinks = document.querySelectorAll(".pagination__link");

  if (!pageLinks) {
    return;
  }

  const currentIndex = Array.from(pageLinks).findIndex(
    i => i.className.indexOf("pagination__link--current") > -1
  );
  let index = 1;
  let page = Number(currentPager.textContent.trim()) + 1;
  document.addEventListener("click", function (e) {
    const target = e.target;
    const loadMoreBtn = target.closest(".js_load_more");

    if (target && loadMoreBtn) {
      e.preventDefault();
      loadMoreBtn.classList.add("active");

      ajax
        .get({
          url: `?ajax=1&p=${page}`,
        })
        .then(({ data }) => {
          const catalog = document.querySelector(".catalog__list");
          if (data.html && data.html.content) {
            catalog.insertAdjacentHTML("beforeend", data.html.content);
          }
          if (pageLinks[currentIndex + index]) {
            pageLinks[currentIndex + index].classList.add(
              "pagination__link--current"
            );
          }
          page += 1;
          index += 1;
          loadMoreBtn.classList.remove("active");
        })
        .catch(error => {
          console.log(error);
          loadMoreBtn.classList.remove("active");
        });
    }
  });
};

export const initCatalogEvents = () => {
  initSortCatalog();
  initFilterHide();
  initSubfilterToggle();
  initQuickView();
  initLoadMore();
};
