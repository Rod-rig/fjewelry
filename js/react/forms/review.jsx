import React, { useState } from "react";
import PropTypes from "prop-types";
import { render } from "react-dom";
import { Email } from "../form/email";
import { Input } from "../form/input";
import { Textarea } from "../form/textarea";
import ajax from "../../helpers/ajax";
import { Loader } from "../components/loader";

const labels = {
  success: "You have successfully added a review",
};

export const initReviewForm = () => {
  const root = document.querySelector(".js_review_form");

  if (root) {
    const name = root.getAttribute("data-name");
    const email = root.getAttribute("data-email");
    const review = root.getAttribute("data-review");
    const submit = root.getAttribute("data-submit");
    const id = root.getAttribute("data-id");
    const title = root.getAttribute("data-title");
    render(
      <Review
        name={name}
        email={email}
        review={review}
        submit={submit}
        id={id}
        title={title}
      />,
      root
    );
  }
};

const Review = props => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isSuccessSubmit, setSuccessSubmit] = useState(false);
  const [isError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const submitForm = e => {
    e.preventDefault();
    setLoading(true);
    ajax
      .post({
        url: "/query/product/addreview/",
        data: {
          product: props.id,
          nickname: email,
          title: name,
          detail: review,
        },
      })
      .then(() => {
        setSuccessSubmit(true);
        setError(false);
      })
      .catch(({ response }) => {
        setLoading(false);
        setError(true);
        setErrorMessage(response.data.message);
      });
  };

  return isSuccessSubmit ? (
    <div className="reviews__success">{labels.success}</div>
  ) : isLoading ? (
    <div className="reviews__success">
      <Loader />
    </div>
  ) : (
    <form onSubmit={submitForm}>
      <div className="reviews__form_title">{props.title}</div>
      {isError && (
        <div className="text-error text-center mb-15">{errorMessage}</div>
      )}
      <div className="reviews__row">
        <div className="reviews__name">
          <Input
            label={props.name}
            onChange={e => setName(e.target.value)}
            name="review_name"
            id="review_name"
            value={name}
            isError={isError}
          />
        </div>
        <div className="reviews__email">
          <Email
            label={props.email}
            onChange={e => setEmail(e.target.value)}
            name="review_email"
            id="review_email"
            value={email}
            isError={isError}
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
          isError={isError}
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
  id: PropTypes.string,
  title: PropTypes.string,
};
