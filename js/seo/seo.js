export const initSeoToggle = () => {
  const seoToggle = document.querySelector(".js_seo_toggle");

  seoToggle &&
    seoToggle.addEventListener("click", function (e) {
      e.preventDefault();
      const SEO_OPENED_CLASSNAME = "seo__content--opened";
      const SEO_MORE_HIDE_CLASSNAME = "seo__more--hide";
      const seo = document.querySelector(".js_seo_text");
      const target = e.target;
      const action = target.getAttribute("data-action");

      if (action === "more" || action === "less") {
        this.classList.toggle(SEO_MORE_HIDE_CLASSNAME);
      }

      if (action === "more") {
        seo.classList.add(SEO_OPENED_CLASSNAME);
      }

      if (action === "less") {
        seo.classList.remove(SEO_OPENED_CLASSNAME);
      }
    });
};
