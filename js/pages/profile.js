import ajax from "../helpers/ajax";
import { removeLoader, showFullScreenLoader } from "../react/components/loader";
import { updateMiniBasket } from "../basket/update-mini-basket";

const initOrderToggle = () => {
  const toggler = document.querySelectorAll(".js_order_toggle");

  if (toggler.length) {
    toggler.forEach(t => {
      t.addEventListener("click", function () {
        const orderWrap = this.closest(".js_profile_order");

        if (orderWrap) {
          orderWrap.classList.toggle("active");
        }
      });
    });
  }
};

const removeFromWishlist = () => {
  const removeButtons = document.querySelectorAll(".js_remove_wish");
  if (removeButtons.length > 0) {
    for (let i = 0; removeButtons[i]; i++) {
      removeButtons[i].addEventListener("click", function () {
        const id = this.getAttribute("data-id");

        if (!id) return;

        showFullScreenLoader();
        ajax
          .post({
            url: `/query/product/removewishlist/`,
            data: {
              product: id,
            },
          })
          .then(() => {
            window.location.reload();
          })
          .catch(e => {
            removeLoader();
            console.log(`Couldn't remove product id ${id} from wishlist`, e);
          });
      });
    }
  }
};

const addAllToBasket = () => {
  const addToBasket = document.querySelector(".js_add_wishlist_to_bag");

  addToBasket &&
    addToBasket.addEventListener("click", function () {
      const id = this.getAttribute("data-id");
      if (!id) return;
      showFullScreenLoader();
      ajax
        .post({
          url: "/query/wishlist/AddAllToCart/",
          data: {
            wishlist_id: id,
          },
        })
        .then(() => {
          window.location = "/checkout/cart";
        })
        .catch(err => {
          removeLoader();
          console.log("Couldn't add wishlist to basket", err);
        });
    });
};

const addWishToBasket = () => {
  const buttons = document.querySelectorAll(".js_add_wish_to_basket");
  if (buttons.length > 0) {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {
        const id = this.getAttribute("data-id");
        if (!id) return;
        showFullScreenLoader();
        ajax
          .post({
            url: "/query/cart/add/",
            data: {
              product: id,
            },
          })
          .then(({ data }) => {
            updateMiniBasket(data);
            removeLoader();
          })
          .catch(e => {
            removeLoader();
            console.log(`Couldn't add product id ${id} to basket`, e);
          });
      });
    }
  }
};

const initReorder = () => {
  const reorderButtons = document.querySelectorAll(".js_reorder");

  if (reorderButtons.length > 0) {
    for (let i = 0; i < reorderButtons.length; i++) {
      reorderButtons[i].addEventListener("click", function (e) {
        e.preventDefault();
        const id = this.getAttribute("data-id");
        if (!id) return;

        showFullScreenLoader();
        ajax
          .post({
            url: `/query/sales/reorder/order_id/${id}/`,
          })
          .then(() => {
            window.location = "/checkout/cart";
          })
          .catch(err => {
            removeLoader();
            console.log(`Couldn't reorder ${id}`, err);
          });
      });
    }
  }
};

export const initProfileEvents = () => {
  initOrderToggle();
  removeFromWishlist();
  addAllToBasket();
  addWishToBasket();
  initReorder();
};
