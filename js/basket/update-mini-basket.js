export const updateMiniBasket = data => {
  const countElement = document.querySelector(".js_cart-count");
  if (countElement) {
    countElement.classList.remove("hide");
    countElement.textContent = data["cart_items_count"];
  }
};
