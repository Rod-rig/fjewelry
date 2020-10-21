import React, { useState } from "react";
import PropTypes from "prop-types";

const calcRingSize = size => {
  if (/^\d+$/.test(size)) {
    return Math.round((size / Math.PI) * 10) / 10;
  } else {
    return "";
  }
};

export const SizeGuide = props => {
  const [size, setSize] = useState("");
  return (
    <React.Fragment>
      <div className="modal__title">{props.title}</div>
      <div className="modal__text size_guide__descr">{props.description}</div>
      <div className="modal__text size_guide__descr">
        {props.description2}{" "}
        <a className="size_guide__link" href={props.href}>
          {props.link}
        </a>
      </div>
      <div className="size_guide__form">
        <input
          placeholder={props.placeholder1}
          value={size}
          id="finger-size"
          className="fj_input mb-15"
          onChange={e => setSize(e.target.value)}
          type="text"
          maxLength="2"
          required
        />
        <input
          placeholder={props.placeholder2}
          value={calcRingSize(size)}
          id="ring-size"
          className="fj_input"
          type="text"
          disabled
        />
      </div>
      <div className="size_guide__img_wrap">
        <div className="size_guide__img">
          <img src={props.src} alt="" className="img-responsive" />
        </div>
      </div>
    </React.Fragment>
  );
};

SizeGuide.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  description2: PropTypes.string,
  href: PropTypes.string,
  link: PropTypes.string,
  placeholder1: PropTypes.string,
  placeholder2: PropTypes.string,
  src: PropTypes.string,
};
