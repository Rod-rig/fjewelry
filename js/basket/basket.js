import ajax from "../helpers/ajax";
import { removeLoader, showFullScreenLoader } from "../react/components/loader";

const getCoords = elem => {
  const box = elem.getBoundingClientRect();

  const body = document.body;
  const docEl = document.documentElement;

  const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  const scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

  const clientTop = docEl.clientTop || body.clientTop || 0;
  const clientLeft = docEl.clientLeft || body.clientLeft || 0;

  const top = box.top + scrollTop - clientTop;
  const left = box.left + scrollLeft - clientLeft;

  return {
    top: top,
    left: left,
    width: box.width,
    height: box.height,
  };
};

const flyToCart = addToBasketBtn => {
  const cart = document.querySelector(".js_basket_trigger");
  const cartOffset = getCoords(cart);
  const minicard = addToBasketBtn.closest(".minicard");
  if (minicard) {
    const image = minicard.querySelector(".minicard__img");
    const imageOffset = getCoords(image);
    const src = image.getAttribute("src");
    const imgNode = document.createElement("img");
    imgNode.setAttribute("src", src);
    imgNode.style.top = `${imageOffset.top}px`;
    imgNode.style.left = `${imageOffset.left}px`;
    imgNode.style.position = "absolute";
    imgNode.style.zIndex = "1000";
    document.body.appendChild(imgNode);

    setTimeout(() => {
      const deltaX = cartOffset.left - imageOffset.left - imageOffset.width / 2;
      const deltaY = cartOffset.top - imageOffset.top - imageOffset.height / 2;
      imgNode.style.transition = "transform 0.4s ease-in";
      imgNode.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(0)`;

      setTimeout(() => {
        imgNode.remove();
      }, 400);
    }, 100);
  }
};

export const initBasketEvents = () => {
  const basketTrigger = document.querySelector(".js_basket_trigger");
  const basketClose = document.querySelectorAll(".js_basket_close");

  if (basketTrigger) {
    basketTrigger.addEventListener("click", function () {
      const basket = document.querySelector(".js_basket");
      basket && basket.classList.remove("hide");
    });
  }

  for (let i = 0; i < basketClose.length; i++) {
    basketClose[i].addEventListener("click", function (e) {
      e.preventDefault();
      const basket = document.querySelector(".js_basket");
      basket && basket.classList.add("hide");
    });
  }

  // add product to basket
  document.addEventListener("click", function (e) {
    const target = e.target;
    const addToBasket = target.closest(".js_add_to_basket");

    if (addToBasket) {
      showFullScreenLoader();
      const id = addToBasket.getAttribute("data-id");
      ajax
        .post({
          url: "/query/cart/add/",
          data: {
            product: id,
          },
        })
        .then(({ data }) => {
          const countElement = document.querySelector(".js_cart-count");
          if (countElement) {
            countElement.classList.remove("hide");
            countElement.textContent = data.cart_items_count;
          }
          removeLoader();
          flyToCart(addToBasket);
        })
        .catch(e => {
          removeLoader();
          console.log(`Couldn't add product id ${id} to basket`, e);
        });
    }
  });
};
