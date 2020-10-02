import SimpleBar from "simplebar";

export const initTagsScroll = () => {
  const tags = document.querySelectorAll(".js_tags_scroll");

  for (let i = 0; i < tags.length; i++) {
    new SimpleBar(tags[i], {
      autoHide: false,
      classNames: {
        scrollbar: "custom__scrollbar",
        track: "custom__track",
      },
    });
  }
};
