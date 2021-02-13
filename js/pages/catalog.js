import ajax from "../helpers/ajax";
import { isDesktop } from "../helpers/is-desktop";
import { removeLoader, showFullScreenLoader } from "../react/components/loader";
import { openQuickView } from "../react/modals/quick-view";
import { initFilterScroll } from "../scroll/filter";
import { initRange } from "../range/range";
import { initPagination } from "../common/pagination";

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
  document.addEventListener("click", function (e) {
    const target = e.target;
    const subFilter = target.closest(".js_subfilter_toggle");

    if (subFilter) {
      const subFilter = target.closest(".js_subfilter");
      subFilter.classList.toggle("filter__section--hide");
    }
  });
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
  document.addEventListener("click", function (e) {
    const target = e.target.closest(".js_quick_view");

    if (target) {
      const id = target.getAttribute("data-id");
      if (!id) return;
      fetchQuickViewInfo(id);
    }
  });
};

export const fetchMobFilter = url => {
  showFullScreenLoader();
  ajax
    .get({
      url,
    })
    .then(({ data }) => {
      const filter = document.querySelector(".filter");
      filter.innerHTML = data.html.filter;
      initFilterScroll();
      initRange();
      removeLoader();
      const filterSubmitButton = document.querySelector(".js_filter_submit");
      filterSubmitButton.setAttribute("href", url);
    })
    .catch(e => {
      removeLoader();
      console.log("Couldn't fetch filter data", e);
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
        fetchMobFilter(url);
      }
    });
  }
};

export const initCatalogEvents = () => {
  initSortCatalog();
  initFilterHide();
  initSubfilterToggle();
  initQuickView();
  initPagination(".catalog__list");
  initMobFilter();
};
