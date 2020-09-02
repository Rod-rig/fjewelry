export const initFooterEvents = () => {
  const triggers = document.querySelectorAll(".js_footer_trigger");
  for (let i = 0; i < triggers.length; i++) {
    triggers[i].addEventListener("click", function () {
      this.classList.toggle("active");
      const selector = this.getAttribute("data-target");
      const el = document.querySelector(selector);
      if (el) {
        el.classList.toggle("hide");
      }
    });
  }
};
