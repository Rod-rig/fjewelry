import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { Email } from "../form/email";
import { Input } from "../form/input";
import { Textarea } from "../form/textarea";

export const initReviewForm = () => {
  const root = document.querySelector(".js_review_form");

  if (root) {
    const name = root.getAttribute("data-name");
    const email = root.getAttribute("data-email");
    const review = root.getAttribute("data-review");
    const submit = root.getAttribute("data-submit");
    ReactDOM.render(
      <Review name={name} email={email} review={review} submit={submit} />,
      root
    );
  }
};

const submitForm = e => {
  e.preventDefault();
  console.log("submit");
};

const Review = props => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  return (
    <form onSubmit={submitForm}>
      <div className="reviews__row">
        <div className="reviews__name">
          <Input
            label={props.name}
            onChange={e => setName(e.target.value)}
            name="review_name"
            id="review_name"
            value={name}
          />
        </div>
        <div className="reviews__email">
          <Email
            label={props.email}
            onChange={e => setEmail(e.target.value)}
            name="review_email"
            id="review_email"
            value={email}
          />
        </div>
      </div>
      <div className="mb-15">
        <Textarea
          className="reviews__user_text"
          label={props.review}
          name="reviews_name"
          onChange={e => setReview(e.target.value)}
          id="reviews_name"
          value={review}
        />
      </div>
      <div className="reviews__send">
        <button className="main_link" type="submit">
          {props.submit}
        </button>
      </div>
    </form>
  );
};

Review.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  review: PropTypes.string,
  submit: PropTypes.string,
};
