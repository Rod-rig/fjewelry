import SimpleBar from "simplebar";

export const initSeoScroll = () => {
  const seo = document.querySelector(".js_seo_text");
  seo &&
    new SimpleBar(seo, {
      autoHide: false,
      classNames: {
        scrollbar: "custom__scrollbar",
        track: "custom__track",
      },
    });
};
