import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const el = document.querySelector(".js_modals");

export const openModal = (children, className) => {
  el && ReactDOM.render(<Modal className={className}>{children}</Modal>, el);
};

const closeModal = () => {
  el && ReactDOM.unmountComponentAtNode(el);
};

export const Modal = props => (
  <div className="modal">
    <div onClick={closeModal} className="modal__backdrop" />
    <div className="modal__root">
      <div className="modal__close">
        <button
          onClick={closeModal}
          className="modal__close_btn"
          aria-label="Close modal"
          type="button"
        >
          <svg className="modal__close_icon">
            <use xlinkHref="#close" />
          </svg>
        </button>
      </div>
      {props.children}
    </div>
  </div>
);

Modal.propTypes = {
  children: PropTypes.element,
};
