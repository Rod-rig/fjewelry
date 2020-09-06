import React from "react";
import ReactDOM from "react-dom";
import { Search } from "./search";
import { isDesktop } from "../../helpers/is-desktop";

const getRoot = () =>
  isDesktop() ? ".js_search_desktop" : ".js_search_mobile";

export const initSearchEvents = () => {
  const trigger = document.querySelector(".js_search_trigger");

  if (trigger) {
    trigger.addEventListener("click", function () {
      const searchRoot = document.querySelector(getRoot());
      if (searchRoot) {
        if (searchRoot.children.length > 0) {
          ReactDOM.unmountComponentAtNode(searchRoot);
        } else {
          ReactDOM.render(<Search />, searchRoot);
        }
      }
    });
  }
};

export const closeSearch = () => {
  const searchRoot = document.querySelector(getRoot());
  searchRoot && ReactDOM.unmountComponentAtNode(searchRoot);
};
