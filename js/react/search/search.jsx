import React, { useState } from "react";
import { closeSearch } from "./";

const labels = {
  button: "Search",
  placeholder: "Are you looking for?",
  all: "Show all",
  rrp: "RRP",
};

export const Search = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="search">
      <form action="/search/">
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
          <button className="btn search__submit" type="submit">
            {labels.button}
          </button>
        </div>
      </form>
      {search.length > 0 ? (
        <div className="search__result">
          <div>
            <a className="search__link" href="">
              Lorem ipsum dolor sit amet.
            </a>
            <a className="search__link" href="">
              Lorem ipsum dolor sit amet.
            </a>
            <a className="search__link" href="">
              Lorem ipsum dolor sit amet.
            </a>
          </div>

          <div>
            <div className="search__card">
              <div className="search__img">
                <a href="">
                  <img
                    src="https://via.placeholder.com/200x200"
                    alt=""
                    className="img-responsive"
                  />
                </a>
              </div>
              <div className="search__card_body">
                <div className="mb-10">
                  <a className="search__card_link" href="">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </a>
                </div>
                <div className="search__card_footer">
                  <div className="search__price">£ 60</div>
                </div>
              </div>
            </div>
            <div className="search__card">
              <div className="search__img">
                <a href="">
                  <img
                    src="https://via.placeholder.com/200x200"
                    alt=""
                    className="img-responsive"
                  />
                </a>
              </div>
              <div className="search__card_body">
                <div className="mb-10">
                  <a className="search__card_link" href="">
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                  </a>
                </div>
                <div className="search__card_footer">
                  <span className="search__oldprice">
                    {labels.rrp}{" "}
                    <span className="search__oldprice--line">£ 75</span>
                  </span>
                  <span className="search__divider"> | </span>
                  <span className="search__newprice">£ 40</span>
                </div>
              </div>
            </div>
          </div>
          <div className="search__all">
            <a href={`/search/?q=${search}`} className="search__all_link">
              {labels.all}
            </a>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
