import ajax from "../helpers/ajax";

export const initPagination = root => {
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
          const catalog = document.querySelector(root);
          if (data.html && data.html.content) {
            catalog.insertAdjacentHTML("beforeend", data.html.content);
          }
          if (pageLinks[currentIndex + index]) {
            pageLinks[currentIndex + index].classList.add(
              "pagination__link--current"
            );

            if (
              pageLinks[currentIndex + index].getAttribute("data-last") ===
              "true"
            ) {
              loadMoreBtn.classList.add("hide");
            }
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
