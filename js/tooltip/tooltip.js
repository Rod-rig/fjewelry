import tippy from "tippy.js";

export const initTooltips = () => {
  const root = document.querySelectorAll(".js_tooltip");
  tippy(root, {
    maxWidth: 200,
    duration: [0, 0],
  });
};
