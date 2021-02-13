import React, { useEffect, useState } from "react";
import { render, unmountComponentAtNode } from "react-dom";
import PropTypes from "prop-types";
import ajax from "../../helpers/ajax";
import { initQuickViewSlider } from "../../sliders/quick-view";

export const openQuickView = data => {
  const el = document.querySelector(".js_modals");
  el && render(<QuickView data={data} />, el);
};

const closeModal = () => {
  const el = document.querySelector(".js_modals");
  el && unmountComponentAtNode(el);
};

const QuickView = props => {
  const [size, setSize] = useState(props.data.selectedSku);
  const [status, setStatus] = useState(props.data.status);
  const [price, setPrice] = useState(props.data.prices);

  const fetchSizeInfo = (e, id) => {
    e.preventDefault();

    ajax
      .get({
        url: `/query/product/getSize/?sku=${id}`,
      })
      .then(({ data }) => {
        setSize(data.id);
        setStatus(data.status);
        setPrice(data.prices);
      })
      .catch(err => {
        console.log(`Couldn't get product size info for sku ${id}`, err);
      });
  };

  useEffect(() => {
    initQuickViewSlider();
  }, []);

  return (
    <div className="js_quick_view_modal">
      <div className="modal quick_view__modal">
        <div className="modal__backdrop js_quick_view" onClick={closeModal} />
        <div className="modal__root quick_view">
          <div className="modal__close js_quick_view">
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
          <div className="quick_view__row">
            <div className="quick_view__col1 carousel">
              <div className="quick_view__carousel">
                <div
                  className={`${
                    props.data.gallery && props.data.gallery.length > 0
                      ? "js_quick_view_slider"
                      : ""
                  }`}
                >
                  {props.data.gallery && props.data.gallery.length > 0 ? (
                    props.data.gallery.map(i => (
                      <img key={i} className="img-responsive" src={i} alt="" />
                    ))
                  ) : (
                    <img
                      className="img-responsive"
                      src="/media/catalog/product/placeholder/default/no-photo.png"
                      alt=""
                    />
                  )}
                </div>
                <div className="minicard__actions">
                  <div className="minicard__like_btn">
                    <button
                      className="btn js_wish"
                      type="button"
                      data-id={props.data.id}
                    >
                      <svg className="minicard__like">
                        <use xlinkHref="#like" />
                      </svg>
                    </button>
                  </div>
                  <div className="minicard__compare_btn">
                    <button
                      className="btn js_compare"
                      type="button"
                      data-id={props.data.id}
                    >
                      <svg className="minicard__compare">
                        <use xlinkHref="#compare" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {props.data.gallery && props.data.gallery.length > 0 ? (
                <div className="quick_view__thumbs">
                  <div
                    className={
                      props.data.gallery.length > 4
                        ? "quick_view__thumb_carousel"
                        : ""
                    }
                  >
                    <div
                      className={`js_thumb ${
                        props.data.gallery.length > 4
                          ? "js_thumb_carousel"
                          : "quick_view__thumb_row"
                      }`}
                    >
                      {props.data.gallery.map(i => (
                        <div key={i} className="quick_view__thumb">
                          <img className="img-responsive" src={i} alt="" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {props.data.gallery.length > 4 ? (
                    <div className="quick_view__ctrl js_thumb_ctrl">
                      <div className="quick_view__nav">
                        <svg className="quick_view__nav_icon">
                          <use xlinkHref="#quick-view-arrow" />
                        </svg>
                      </div>
                      <div className="quick_view__nav quick_view__nav--right">
                        <svg className="quick_view__nav_icon">
                          <use xlinkHref="#quick-view-arrow" />
                        </svg>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="quick_view__col2">
              <div className="quick_view__name">{props.data.name}</div>
              <div className="mb-15 quick_view__price">
                {price.regularPriceFormatted !== price.specialPriceFormatted ? (
                  <React.Fragment>
                    <span className="minicard__oldprice">
                      RRP{" "}
                      <span className="minicard__oldprice--line">
                        {price.specialPriceFormatted}
                      </span>
                    </span>
                    <span className="minicard__divider"> | </span>
                    <span className="minicard__price">
                      {price.regularPriceFormatted}{" "}
                      <span className="minicard__sale">
                        {price.discount_percent}
                      </span>
                    </span>
                  </React.Fragment>
                ) : (
                  <span className="minicard__price minicard__price--only">
                    {price.regularPriceFormatted}
                  </span>
                )}
              </div>
              {status === "is_in_stock" ? (
                <div className="quick_view__status mb-15">
                  <svg className="quick_view__instock_icon">
                    <use xlinkHref="#tick" />
                  </svg>
                  <div className="quick_view__instock">in stock</div>
                </div>
              ) : status === "spec_order" ? (
                <div className="quick_view__status mb-15">
                  {/*<svg class="quick_view__instock_icon">
                    <use xlink:href="#specorder"></use>
                  </svg>*/}
                  <div className="quick_view__specorder">special order</div>
                </div>
              ) : (
                <div className="quick_view__status mb-15">
                  {/*<svg class="quick_view__instock_icon">
                    <use xlink:href="#discontinued"></use>
                  </svg>*/}
                  <div className="quick_view__disc">discontinued</div>
                </div>
              )}
              {props.data.options && (
                <div className="filter__sizes mb-15">
                  {props.data.options[0].map(s => (
                    <a
                      key={s.id}
                      href=""
                      onClick={e => fetchSizeInfo(e, s.products[0])}
                      className={`filter__size ${
                        size === s.products[0] ? "filter__size--active" : ""
                      }`}
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              )}
              <div className="quick_view__features mb-15">
                <svg className="quick_view__info_icon">
                  <use xlinkHref="#return" />
                </svg>
                <div className="quick_view__info">
                  <span className="quick_view__info_primary">FREE</span> RETURN
                  14 DAYS
                </div>
              </div>
              <div className="quick_view__features mb-15">
                <svg className="quick_view__info_icon">
                  <use xlinkHref="#delivery" />
                </svg>
                <div className="quick_view__info">
                  <span className="quick_view__info_primary">FREE</span>{" "}
                  DELIVERY OVER £ 49
                </div>
              </div>
              <table className="quick_view__table">
                <tbody>
                  {props.data.attributes.map(a => (
                    <tr key={a.value}>
                      <td className="quick_view__td">{a.label}:</td>
                      <td className="quick_view__td quick_view__td--right">
                        {a.value}
                      </td>
                    </tr>
                  ))}
                  {/*<tr>
                    <td className="quick_view__main quick_view__td">
                      Product code
                    </td>
                    <td className="quick_view__main quick_view__td quick_view__td--right">
                      000124508
                    </td>
                  </tr>*/}
                </tbody>
              </table>
            </div>
          </div>

          <div className="quick_view__buttons">
            <a
              href={props.data.url}
              className="btn quick_view__btn"
              type="button"
            >
              <span className="quick_view__btn_text">More info</span>
            </a>
            {/*<? if ($current_status === "spec_order") { ?>*/}
            {/*<button
              className="btn quick_view__btn js_callback"
              type="button"
              data-phone="+44 203 540 1477"
            >
              <span className="quick_view__btn_text">PRE-ORDER</span>
            </button>*/}
            {/*<? } else { ?>*/}
            {status === "is_in_stock" ? (
              <button
                className="btn quick_view__btn js_add_to_basket"
                data-id={props.data.id}
                type="button"
              >
                <span className="quick_view__btn_text">Add to bag</span>
              </button>
            ) : (
              <button
                className="btn quick_view__btn js_callback"
                data-phone="+44 203 540 1477"
                type="button"
              >
                <span className="quick_view__btn_text">Pre-order</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

QuickView.propTypes = {
  data: PropTypes.any,
};
