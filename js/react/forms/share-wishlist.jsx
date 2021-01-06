import React, { useState } from "react";
import { closeModal, openModal } from "../modals/modal";
import { Textarea } from "../form/textarea";
import ajax from "../../helpers/ajax";
import { Loader } from "../components/loader";

const labels = {
  title: "Wish List Sharing",
  submit: "Share wish list",
  emails: "Email addresses, separated by commas*",
  msg: "Message",
  success: "You have successfully shared your wish list.",
  ok: "Ok",
};

export const initShareWishlistTrigger = () => {
  const shareWishlistTrigger = document.querySelector(".js_share_wishlist");

  if (shareWishlistTrigger) {
    shareWishlistTrigger.addEventListener("click", function (e) {
      e.preventDefault();
      openModal(<ShareWishlist />);
    });
  }
};

const ShareWishlist = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccessSubmit, setSuccessSubmit] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);

    ajax
      .post({
        url: "/query/wishlist/share/",
        data: {
          emails: email,
          message: message,
        },
      })
      .then(() => {
        setSuccessSubmit(true);
        setLoading(false);
      })
      .catch(({ response }) => {
        setLoading(false);
        setError(true);
        setErrorMessage(response.data.message);
        console.log("Couldn't share wishlist", response);
      });
  };

  return isLoading ? (
    <div className="text-center">
      <Loader />
    </div>
  ) : (
    <form className="join__form" onSubmit={onSubmit}>
      <div className="modal__title">{labels.title}</div>
      {isSuccessSubmit ? (
        <div className="text-center">
          <div className="profile_wish__success">{labels.success}</div>
          <button
            className="main_link"
            type="button"
            onClick={() => closeModal()}
          >
            {labels.ok}
          </button>
        </div>
      ) : (
        <React.Fragment>
          {isError && <div className="text-error mb-10">{errorMessage}</div>}
          <div className="mb-15">
            <Textarea
              label={labels.emails}
              value={email}
              name="wishlist_emails"
              onChange={e => setEmail(e.target.value)}
              id="wishlist_emails"
              className="profile_wish__textarea"
              isError={isError}
            />
          </div>
          <div className="mb-15">
            <Textarea
              label={labels.msg}
              value={message}
              name="wishlist_msg"
              onChange={e => setMessage(e.target.value)}
              id="wishlist_msg"
              className="profile_wish__textarea"
            />
          </div>
          <div className="text-center">
            <button className="main_link" type="submit">
              {labels.submit}
            </button>
          </div>
        </React.Fragment>
      )}
    </form>
  );
};
