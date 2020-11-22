import React, { useState, useEffect } from "react";
import ajax from "../../helpers/ajax";
import { Loader } from "../components/loader";
import { Delivery } from "./delivery";
import { Input } from "../form/input";
import { Select } from "../form/select";

const labels = {
  guest: "Checkout as a guest",
  guestNote: "(without registration)",
  existing: "Existing customer",
  existingNote: "(sign in to continue)",
  loginSubmit: "Continue",
  forgot: "Forgot password",
  reg: "Registration",
  placeholders: {
    email: "Email *",
    pwd: "Password *",
    fname: "First name *",
    lname: "Last name *",
    phone: "Phone",
    title: "Title *",
  },
  titles: ["Mr.", "Ms.", "Mrs.", "Miss."],
  addressTitle: "My addresses",
};

export const OrderForm = () => {
  const [isLoaded, setLoaded] = useState(false);
  const [data, setData] = useState({});
  const [isGuest, setGuest] = useState("noguest");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [title, setTitle] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    ajax.get({ url: "../ajax/order.json" }).then(({ data }) => {
      setData(data);
      setLoaded(true);
    });
  }, []);

  return isLoaded ? (
    data ? (
      <div className="order basket__row">
        <div className="basket__left">
          <React.Fragment>
            <div className="order__user">
              <label
                htmlFor="guest1"
                className="basket__delivery_radio order__radio"
              >
                <input
                  id="guest1"
                  checked={isGuest === "noguest"}
                  className="basket__delivery_input"
                  name="user"
                  type="radio"
                  value="noguest"
                  onChange={e => setGuest(e.target.value)}
                />
                <div className="basket__delivery_body order__radio_text">
                  <div className="basket__delivery_name">{labels.existing}</div>
                  <div className="basket2_note">{labels.existingNote}</div>
                </div>
              </label>
              <label
                htmlFor="guest2"
                className="basket__delivery_radio order__radio"
              >
                <input
                  id="guest2"
                  checked={isGuest === "guest"}
                  className="basket__delivery_input"
                  name="user"
                  type="radio"
                  value="guest"
                  onChange={e => setGuest(e.target.value)}
                />
                <div className="basket__delivery_body order__radio_text">
                  <div className="basket__delivery_name">{labels.guest}</div>
                  <div className="basket2_note">{labels.guestNote}</div>
                </div>
              </label>
            </div>
            {isGuest === "noguest" ? (
              <React.Fragment>
                {!data["isAuthed"] ? (
                  <form onSubmit={e => e.preventDefault()}>
                    <div className="order__row">
                      <div className="order__col">
                        <Input
                          label={labels.placeholders.email}
                          onChange={e => setEmail(e.target.value)}
                          name="email"
                          id="email"
                          value={email}
                        />
                      </div>
                      <div className="order__col">
                        <Input
                          type="password"
                          name="password"
                          id="password"
                          label={labels.placeholders.pwd}
                          onChange={e => setPassword(e.target.value)}
                          value={password}
                          isError={false}
                        />
                      </div>
                    </div>
                    <div className="order__login">
                      <button className="order__submit" type="submit">
                        {labels.loginSubmit}
                      </button>
                      <div className="order__login_btns">
                        <button
                          className="order__login_btn btn js_forgot_trigger"
                          type="button"
                        >
                          {labels.forgot}
                        </button>
                        <div className="order__login_div"> | </div>
                        <button className="order__login_btn btn" type="button">
                          {labels.reg}
                        </button>
                      </div>
                    </div>
                  </form>
                ) : (
                  <div className="order__authed">
                    <svg className="order__authed_tick">
                      <use xlinkHref="#tick" />
                    </svg>
                    <div className="order__email">qwe@gmail.com</div>
                  </div>
                )}
              </React.Fragment>
            ) : (
              <form onSubmit={e => e.preventDefault()}>
                <div className="order__row">
                  <div className="order__col">
                    <Input
                      label={labels.placeholders.email}
                      onChange={e => setEmail(e.target.value)}
                      name="email"
                      id="email"
                      value={email}
                    />
                  </div>
                </div>
                <div className="order__login">
                  <button className="order__submit" type="submit">
                    {labels.loginSubmit}
                  </button>
                </div>
              </form>
            )}
            {data["isAuthed"] ? (
              <form onSubmit={e => e.preventDefault()}>
                <div className="order__section">
                  <div className="order__row">
                    <div className="order__col">
                      <Select
                        label={labels.placeholders.title}
                        onChange={e => {
                          setTitle(e.target.value);
                        }}
                        name="title"
                        id="title"
                        value={title}
                        options={labels.titles.map((l, i) => ({
                          label: l,
                          value: i,
                        }))}
                        isError={false}
                        className="order__select"
                      />
                    </div>
                  </div>
                  <div className="order__row">
                    <div className="order__col">
                      <Input
                        label={labels.placeholders.fname}
                        onChange={e => setFname(e.target.value)}
                        name="fname"
                        id="fname"
                        value={fname}
                      />
                    </div>
                    <div className="order__col">
                      <Input
                        label={labels.placeholders.email}
                        onChange={e => setEmail(e.target.value)}
                        name="email"
                        id="email"
                        value={email}
                      />
                    </div>
                  </div>
                  <div className="order__row">
                    <div className="order__col">
                      <Input
                        label={labels.placeholders.lname}
                        onChange={e => setLname(e.target.value)}
                        name="lname"
                        id="lname"
                        value={lname}
                      />
                    </div>
                    <div className="order__col">
                      <Input
                        type="tel"
                        label={labels.placeholders.phone}
                        onChange={e => setPhone(e.target.value)}
                        name="order_phone"
                        id="order_phone"
                        value={phone}
                      />
                    </div>
                  </div>
                </div>

                <div className="order__section">
                  <div className="order__title">{labels.addressTitle}</div>
                </div>
              </form>
            ) : (
              ""
            )}
          </React.Fragment>
        </div>
        <div className="basket__right">
          <Delivery basket={data} />
        </div>
      </div>
    ) : (
      <div>{data["labels"]["empty"]}</div>
    )
  ) : (
    <Loader />
  );
};
