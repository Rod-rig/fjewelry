import React, { useState } from "react";
import { render } from "react-dom";

export const initSubscription = () => {
  const root = document.querySelector(".js_subscription_form");
  root && render(<SubscriptionForm />, root);
};

const labels = {
  chex: "General Subscription",
  save: "Save",
};

const SubscriptionForm = () => {
  const [isSubscribed, setSubscribed] = useState(true);
  return (
    <form onSubmit={e => e.preventDefault()}>
      <div className="subscription__checkbox_wrap">
        <label htmlFor="subscription" className="subscription__checkbox">
          <input
            checked={isSubscribed}
            id="subscription"
            name="subscription"
            type="checkbox"
            className="hide subscription__checkbox_input"
            onChange={() => setSubscribed(!isSubscribed)}
          />
          <div className="subscription__checkbox_text">{labels.chex}</div>
        </label>
      </div>
      <div className="subscription__submit">
        <button type="submit" className="main_link">
          {labels.save}
        </button>
      </div>
    </form>
  );
};
