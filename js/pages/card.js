export const initCardSizesEvents = () => {
  const sizeButtons = document.querySelectorAll(".js_size_more");
  const sizes = document.querySelectorAll(".js_card_size");

  // init sizes expand/collapse
  for (let i = 0; i < sizeButtons.length; i++) {
    sizeButtons[i].addEventListener("click", function () {
      const sizesContainer = document.querySelector(".js_card_sizes");
      sizesContainer.classList.toggle("card__sizes--more");
    });
  }

  for (let i = 0; i < sizes.length; i++) {
    sizes[i].addEventListener("click", function () {
      for (let j = 0; j < sizes.length; j++) {
        sizes[j].classList.remove("card__size--active");
      }
      this.classList.add("card__size--active");
    });
  }
};
