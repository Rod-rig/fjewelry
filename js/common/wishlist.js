import ajax from "../helpers/ajax";
import { removeLoader, showFullScreenLoader } from "../react/components/loader";
import { openLoginModal } from "../react/forms/login";

export const updateHeaderWishCounter = count => {
  const counter = document.querySelectorAll(".js_wish_count");
  for (let i = 0; i < counter.length; i++) {
    counter[i].classList[count > 0 ? "remove" : "add"]("hide");
    counter[i].innerHTML = count;
  }
};

export const initWishEvents = () => {
  const wishButtons = document.querySelectorAll(".js_wish");

  if (wishButtons && wishButtons.length > 0) {
    document.addEventListener("click", function (e) {
      const target = e.target;
      const wishButton = target.closest(".js_wish");

      if (wishButton) {
        if (!window.isLoggedIn) {
          openLoginModal();
          return;
        }
        showFullScreenLoader();
        const id = wishButton.getAttribute("data-id");

        if (id) {
          const action = wishButton.classList.contains("active")
            ? "remove"
            : "add";
          ajax
            .post({
              url: `/query/product/${action}wishlist/`,
              data: {
                product: id,
              },
            })
            .then(({ data }) => {
              removeLoader();
              wishButton.classList.toggle("active");
              updateHeaderWishCounter(data.count);
            })
            .catch(e => {
              removeLoader();
              console.log(
                `Couldn't add/remove product id ${id} to wishlist`,
                e
              );
            });
        }
      }
    });
  }
};
