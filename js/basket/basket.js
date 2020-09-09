export const initBasketEvents = () => {
  const basketTrigger = document.querySelector(".js_basket_trigger");
  const basketClose = document.querySelectorAll(".js_basket_close");

  if (basketTrigger) {
    basketTrigger.addEventListener("click", function () {
      const basket = document.querySelector(".js_basket");
      basket.classList.remove("hide");
    });
  }

  for (let i = 0; i < basketClose.length; i++) {
    basketClose[i].addEventListener("click", function (e) {
      e.preventDefault();
      const basket = document.querySelector(".js_basket");
      basket.classList.add("hide");
    });
  }
};
