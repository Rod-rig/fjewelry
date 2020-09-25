import SimpleBar from "simplebar";

export const initBreadcrumbsScroll = () => {
  const breadcrumbs = document.querySelector(".js_breadcrumbs_scroll");
  breadcrumbs &&
    new SimpleBar(breadcrumbs, {
      autoHide: false,
      classNames: {
        scrollbar: "custom__scrollbar",
        track: "custom__track",
      },
    });
};
