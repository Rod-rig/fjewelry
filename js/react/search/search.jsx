import React, { useState } from "react";
import { closeSearch } from "./";
import ajax from "../../helpers/ajax";
import { Loader } from "../components/loader";

const labels = {
  button: "Search",
  placeholder: "Are you looking for?",
  rrp: "RRP",
  notfound: "Nothing found",
};

export const Search = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState(null);
  const [isLoaded, setLoaded] = useState(null);

  const onSearch = () => {
    if (search.length > 0) {
      setLoaded(false);
      ajax
        .get({
          url: `/query/search/suggest/`,
          params: {
            q: search,
          },
        })
        .then(({ data }) => {
          setResult(data);
          setLoaded(true);
        })
        .catch(e => {
          setLoaded(false);
          console.log("Couldn't get search result", e);
        });
    }
  };

  return (
    <div className="search">
      <form onSubmit={e => e.preventDefault()}>
        <div className="search__row">
          <button
            onClick={closeSearch}
            type="button"
            className="btn search__close"
          >
            <svg className="search__close_icon">
              <use xlinkHref="#close" />
            </svg>
          </button>
          <input
            className="search__input"
            onChange={e => setSearch(e.target.value)}
            value={search}
            type="text"
            autoComplete="off"
            placeholder={labels.placeholder}
          />
          <button
            className="btn search__submit"
            type="button"
            onClick={onSearch}
          >
            {labels.button}
          </button>
        </div>
      </form>
      {isLoaded === false ? (
        <div className="search__loader">
          <Loader />
        </div>
      ) : (
        ""
      )}
      {isLoaded === true &&
      result &&
      result.categories.length === 0 &&
      result.products.length === 0 ? (
        <div className="search__loader">{labels.notfound}</div>
      ) : (
        ""
      )}
      {isLoaded === true &&
      result &&
      (result.categories.length > 0 || result.products.length > 0) ? (
        <div>
          <div>
            {result.categories.map((category, index) => (
              <a key={index} className="search__link" href={category.url}>
                {category.name}
              </a>
            ))}
          </div>

          <div>
            {result.products.map((product, index) => (
              <div key={index} className="search__card">
                <div className="search__img">
                  <a href="">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="img-responsive"
                    />
                  </a>
                </div>
                <div className="search__card_body">
                  <div className="mb-10">
                    <a className="search__card_link" href={product.url}>
                      {product.name}
                    </a>
                  </div>
                  <div className="search__card_footer">
                    <span className="search__oldprice">
                      {labels.rrp}{" "}
                      <span className="search__oldprice--line">
                        {product.prices.regularPriceFormatted}
                      </span>
                    </span>
                    <span className="search__divider"> | </span>
                    <span className="search__newprice">
                      {product.prices.specialPriceFormatted}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
