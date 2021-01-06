import { initQuickViewSlider } from "../sliders/quick-view";
import ajax from "../helpers/ajax";
import { isDesktop } from "../helpers/is-desktop";
import { removeLoader, showFullScreenLoader } from "../react/components/loader";
import { openQuickView } from "../react/modals/quick-view";

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

const fetchQuickViewInfo = id => {
  showFullScreenLoader();
  ajax
    .get({
      url: `/query/product/get/?product=${id}`,
    })
    .then(({ data }) => {
      removeLoader();
      openQuickView(data);
    })
    .catch(err => {
      removeLoader();
      console.log("Couldn't get quick view info", err);
    });
};

export const initQuickView = () => {
  let isInited = false;
  initQuickViewSlider();

  document.addEventListener("click", function (e) {
    const target = e.target.closest(".js_quick_view");

    if (target) {
      const id = target.getAttribute("data-id");
      if (!id) return;
      fetchQuickViewInfo(id);

      if (!isInited) {
        initQuickViewSlider();
        isInited = true;
      }
    }
  });
};

const initLoadMore = () => {
  const currentPager = document.querySelector(".pagination__link--current");
  const pageLinks = document.querySelectorAll(".pagination__link");

  if (pageLinks.length === 0) {
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

const initMobFilter = () => {
  if (isDesktop()) {
    return;
  }
  const chex = document.querySelectorAll(".js_filter_chex");

  if (chex && chex.length > 0) {
    document.addEventListener("click", function (e) {
      const target = e.target;
      const targetChex = target.closest(".js_filter_chex");

      if (targetChex) {
        e.preventDefault();
        const url = targetChex.getAttribute("href");
        ajax
          .get({
            url,
          })
          .then(({ data }) => {
            const filter = document.querySelector(".filter");
            filter.innerHTML = data.html.filter;
            removeLoader();
          })
          .catch(e => {
            removeLoader();
            console.log("Couldn't fetch filter data", e);
          });
      }
    });
  }
};

export const initCatalogEvents = () => {
  initSortCatalog();
  initFilterHide();
  initSubfilterToggle();
  initQuickView();
  initLoadMore();
  initMobFilter();
};
