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

export const initProfileEvents = () => {
  initOrderToggle();
};
