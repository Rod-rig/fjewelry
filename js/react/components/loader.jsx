import React from "react";
import ReactDOM from "react-dom";
import { closeModal } from "../modals/modal";

export const Loader = () => (
  <div>
    <svg className="loader" viewBox="20 20 60 60">
      <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50" />
    </svg>
  </div>
);

export const FullScreenLoader = () => (
  <div className="loader_bg">
    <Loader />
  </div>
);

export const showFullScreenLoader = () => {
  const root = document.querySelector(".js_modals");
  root && ReactDOM.render(<FullScreenLoader />, root);
};

export const removeLoader = () => {
  closeModal();
};
