import ajax from "../helpers/ajax";
import { removeLoader, showFullScreenLoader } from "../react/components/loader";

export const updateHeaderCompareCounter = count => {
  const counter = document.querySelectorAll(".js_compare_count");
  for (let i = 0; i < counter.length; i++) {
    counter[i].classList[count > 0 ? "remove" : "add"]("hide");
    counter[i].innerHTML = count;
  }
};

export const initCompareEvents = () => {
  const compareButtons = document.querySelectorAll(".js_compare");

  if (compareButtons && compareButtons.length > 0) {
    document.addEventListener("click", function (e) {
      const target = e.target;
      const compareButton = target.closest(".js_compare");

      if (compareButton) {
        showFullScreenLoader();
        const id = compareButton.getAttribute("data-id");

        if (id) {
          const action = compareButton.classList.contains("active")
            ? "remove"
            : "add";
          ajax
            .post({
              url: `/query/product/${action}compare/`,
              data: {
                product: id,
              },
            })
            .then(({ data }) => {
              removeLoader();
              compareButton.classList.toggle("active");
              updateHeaderCompareCounter(data.count);
            })
            .catch(e => {
              removeLoader();
              console.log(`Couldn't add/remove product id ${id} to compare`, e);
            });
        }
      }
    });
  }
};
