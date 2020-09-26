import Nouislider from "nouislider";
import wNumb from "wnumb";
import { isDesktop } from "../helpers/is-desktop";
// import { fetchMobFilter, updateMobFilter } from "../filter/filter";
// import { renderLoader } from "../components/Loader";

// const SHOW_MORE_LINK = ".js_filter_more_link";

const showMoreButton = (button, href) => {
  if (isDesktop()) {
    button.querySelector(".js_filter_more_link").setAttribute("href", href);
    button.classList.remove("hide");
  }
};

// const hideMoreButton = button => {
//   if (isDesktop()) {
//     button.classList.add("hide");
//   }
// };

const buildFilterUrl = (values, url) => {
  const from = Math.round(values[0]);
  const to = Math.round(values[1]);

  // return url.replace("#VALUE#", `${from}-${to}`);
  return `${url}-${from}-${to}`;
};

export const initRange = () => {
  const STEP_RANGE = 1;
  const range = document.querySelectorAll(".js_range");
  const inputFrom = document.querySelectorAll(".js_range_input_from");
  const inputTo = document.querySelectorAll(".js_range_input_to");
  const showMore = document.querySelectorAll(".js_filter_show_more");
  // const cancelBtns = document.querySelectorAll(".js_filter_cancel");

  range.forEach((item, index) => {
    const min = parseInt(item.getAttribute("data-min"));
    const max = parseInt(item.getAttribute("data-max"));
    const start = parseInt(item.getAttribute("data-start"));
    const end = parseInt(item.getAttribute("data-end"));

    if (min !== max) {
      Nouislider.create(item, {
        start: [start, end],
        connect: true,
        step: STEP_RANGE,
        format: wNumb({
          thousand: " ",
          decimals: 0,
        }),
        range: {
          min,
          max,
        },
      });

      item.noUiSlider.on("update", function (values, handle) {
        const value = values[handle];

        if (handle) {
          inputTo[index].value = value;
        } else {
          inputFrom[index].value = value;
        }
      });

      item.noUiSlider.on("set", function (values, handle, unencoded) {
        const url = item.getAttribute("data-link");
        const href = buildFilterUrl(unencoded, url);
        showMoreButton(showMore[index], href);

        // if (isMobile()) {
        //   const filterLoader = document.querySelector(".js_filter_loader");
        //   renderLoader(filterLoader, "filter__loader");
        //
        //   const blockId = item
        //     .closest(".js_collapse_target")
        //     .getAttribute("data-id");
        //   fetchMobFilter(href, blockId, updateMobFilter);
        // }
      });

      inputFrom[index].addEventListener("change", function () {
        item.noUiSlider.set([this.value, null]);
      });

      // inputFrom[index].addEventListener("keyup", function () {
      //   const end = item.noUiSlider.get()[1];
      //   const url = item.getAttribute("data-link");
      //   const href = buildFilterUrl([this.value, end], url);
      //   showMoreButton(showMore[index], href);
      // });

      // if (isDesktop()) {
      //   inputFrom[index].addEventListener("keydown", function (e) {
      //     if (e.which === 13) {
      //       setTimeout(() => {
      //         document.querySelectorAll(SHOW_MORE_LINK)[index].click();
      //       }, 0);
      //     }
      //   });
      // }

      inputTo[index].addEventListener("change", function () {
        const value =
          this.value !== "" ? this.value : item.noUiSlider.options.range.max;
        item.noUiSlider.set([null, value]);
      });

      // inputTo[index].addEventListener("keyup", function () {
      //   const start = item.noUiSlider.get()[0];
      //   const url = item.getAttribute("data-link");
      //   const href = buildFilterUrl([start, this.value], url);
      //   showMoreButton(showMore[index], href);
      // });

      // if (isDesktop()) {
      //   inputTo[index].addEventListener("keydown", function (e) {
      //     if (e.which === 13) {
      //       setTimeout(() => {
      //         document.querySelectorAll(SHOW_MORE_LINK)[index].click();
      //       }, 0);
      //     }
      //   });
      // }
    } else {
      // just to avoid js errors
      item.setAttribute("disabled", "disabled");
      inputFrom[index].setAttribute("disabled", "disabled");
      inputTo[index].setAttribute("disabled", "disabled");
      Nouislider.create(item, {
        start: [start, end],
        tooltips: [true, true],
        connect: true,
        step: STEP_RANGE,
        format: wNumb({
          thousand: " ",
          decimals: 0,
        }),
        range: {
          min,
          max: max + STEP_RANGE,
        },
      });
    }

    // cancelBtns[index].addEventListener("click", function () {
    //   item.noUiSlider.updateOptions({
    //     start: [start, end],
    //   });
    //   hideMoreButton(showMore[index]);
    // });
  });
};
