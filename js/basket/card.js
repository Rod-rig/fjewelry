import ajax from "../helpers/ajax";
import { removeLoader, showFullScreenLoader } from "../react/components/loader";
import { updateMiniBasket } from "./update-mini-basket";

export const initAddToBasket = () => {
  const addToBasket = document.querySelectorAll(".js_card_basket");

  if (addToBasket && addToBasket.length > 0) {
    for (let i = 0; i < addToBasket.length; i++) {
      addToBasket[i].addEventListener("click", function () {
        showFullScreenLoader();
        let prop, val;
        const id = this.getAttribute("data-id");
        const sizesElement = document.querySelector(".js_card_sizes");

        if (sizesElement) {
          prop = sizesElement.getAttribute("data-property-id");
          const activeSizeEl = sizesElement.querySelector(
            ".card__size--active"
          );
          val = activeSizeEl.getAttribute("data-value-id");
        }

        if (id) {
          ajax
            .post({
              url: "/query/cart/add/",
              data: prop
                ? {
                    product: id,
                    options: {
                      [prop]: val,
                    },
                  }
                : {
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
        }
      });
    }
  }
};
