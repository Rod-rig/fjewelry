import SimpleBar from "simplebar";

export const initFilterScroll = () => {
  const filters = document.querySelectorAll(".js_filter_scroll");

  for (let i = 0; i < filters.length; i++) {
    new SimpleBar(filters[i], {
      autoHide: false,
      classNames: {
        scrollbar: "custom__scrollbar",
        track: "custom__track",
      },
    });
  }
};
