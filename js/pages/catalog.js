export const initSortCatalog = () => {
  const select = document.querySelector(".js_catalog_sort");

  if (select) {
    select.addEventListener("change", function () {
      window.location = this.value;
    });
  }
};
