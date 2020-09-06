import SimpleBar from "simplebar";

export const initBasketScroll = () => {
  const basket = document.querySelector(".js_basket_scroll");
  basket &&
    new SimpleBar(basket, {
      autoHide: false,
      classNames: {
        scrollbar: "custom__scrollbar",
        track: "custom__track",
      },
    });
};
