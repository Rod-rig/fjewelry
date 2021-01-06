import ajax from "../helpers/ajax";
import { updateHeaderWishCounter } from "./wishlist";
import { updateHeaderCompareCounter } from "./compare";

export const updateUserInfo = () => {
  ajax
    .get({
      url: "/query/status/",
    })
    .then(({ data }) => {
      const mobUserHeader = document.querySelector(".js_mobile-cabinet");
      const userHeader = document.querySelector(".js_head-cabinet");

      if (mobUserHeader) {
        mobUserHeader.outerHTML = data["mobile-cabinet"];
      }

      if (userHeader) {
        userHeader.outerHTML = data["head-cabinet"];
      }

      updateHeaderWishCounter(data["wishlist-count"]);
      updateHeaderCompareCounter(data["compare-count"]);
    })
    .catch(e => {
      console.log("Couldn't get user status /query/status/", e);
    });
};
