import React from "react";
import { openModal } from "./modal";
import { SizeGuide } from "./size-guide";

export const initSizeGuideTrigger = () => {
  const sizeGuideTrigger = document.querySelector(".js_size_guide");

  if (sizeGuideTrigger) {
    const title = sizeGuideTrigger.getAttribute("data-title");
    const description = sizeGuideTrigger.getAttribute("data-description");
    const description2 = sizeGuideTrigger.getAttribute("data-description2");
    const link = sizeGuideTrigger.getAttribute("data-link");
    const href = sizeGuideTrigger.getAttribute("data-href");
    const placeholder1 = sizeGuideTrigger.getAttribute("data-placeholder1");
    const placeholder2 = sizeGuideTrigger.getAttribute("data-placeholder2");
    const src = sizeGuideTrigger.getAttribute("data-src");
    sizeGuideTrigger.addEventListener("click", function (e) {
      e.preventDefault();
      openModal(
        <SizeGuide
          title={title}
          description={description}
          description2={description2}
          link={link}
          href={href}
          placeholder1={placeholder1}
          placeholder2={placeholder2}
          src={src}
        />,
        "size_guide"
      );
    });
  }
};
