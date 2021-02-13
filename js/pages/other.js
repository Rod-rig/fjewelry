import { initPagination } from "../common/pagination";

export const initFAQEvents = () => {
  const triggers = document.querySelectorAll(".js_faq_trigger");
  for (let i = 0; i < triggers.length; i++) {
    triggers[i].addEventListener("click", function () {
      const parent = this.closest(".js_faq");
      parent && parent.classList.toggle("active");
    });
  }
};

export const initLoadMore = () => initPagination(".js_blog_list");
