export const initSortCatalog = () => {
  const select = document.querySelector(".js_catalog_sort");

  if (select) {
    select.addEventListener("change", function () {
      window.location = this.value;
    });
  }
};

export const initFilterHide = () => {
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
