import React from "react";
import { closeModal } from "./modal";

const labels = {
  title: "Request sent",
  text: "Your request has been successfully sent",
  ok: "Ok",
};

export const Success = () => (
  <React.Fragment>
    <div className="modal__title">{labels.title}</div>
    <div className="modal__text">{labels.text}</div>
    <div className="text-center mt-20">
      <button className="main_link" type="button" onClick={closeModal}>
        {labels.ok}
      </button>
    </div>
  </React.Fragment>
);
