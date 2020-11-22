import React, { useState, useEffect } from "react";
import ajax from "../../helpers/ajax";
import { Loader } from "../components/loader";
import { Delivery } from "./delivery";
import { Input } from "../form/input";
import { Select } from "../form/select";
import { Textarea } from "../form/textarea";

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
    addr: "My addresses",
    post: "Post Code *",
    country: "Country *",
    addr1: "Address Line 1 *",
    addr2: "Address Line 2 *",
    town: "Town / City *",
    region: "Region",
    info: "Additional information",
  },
  addressTitle: "Delivery address",
  titles: ["Mr.", "Ms.", "Mrs.", "Miss."],
  countries: [
    "United Kingdom",
    "Ireland",
    "France",
    "Italy",
    "Spain",
    "Germany",
  ],
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
  const [addr, setAddr] = useState("");
  const [post, setPost] = useState("");
  const [country, setCountry] = useState("");
  const [addr1, setAddr1] = useState("");
  const [addr2, setAddr2] = useState("");
  const [town, setTown] = useState("");
  const [region, setRegion] = useState("");
  const [info, setInfo] = useState("");

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
                  <div className="order__row">
                    <div className="order__col">
                      <Select
                        label={labels.placeholders.addr}
                        onChange={e => {
                          setAddr(e.target.value);
                        }}
                        name="addr"
                        id="addr"
                        value={addr}
                        options={data["addresses"].map((l, i) => ({
                          label: l,
                          value: i,
                        }))}
                        isError={false}
                      />
                    </div>
                    <div className="order__col">
                      <Input
                        label={labels.placeholders.post}
                        onChange={e => setPost(e.target.value)}
                        name="post"
                        id="post"
                        value={post}
                      />
                    </div>
                  </div>
                  <div className="order__row">
                    <div className="order__col">
                      <Input
                        label={labels.placeholders.country}
                        onChange={e => setCountry(e.target.value)}
                        name="country"
                        id="country"
                        value={country}
                      />
                    </div>
                    <div className="order__col">
                      <Input
                        label={labels.placeholders.addr1}
                        onChange={e => setAddr1(e.target.value)}
                        name="addr_line1"
                        id="addr_line1"
                        value={addr1}
                      />
                    </div>
                  </div>
                  <div className="order__row">
                    <div className="order__col">
                      <Input
                        label={labels.placeholders.town}
                        onChange={e => setTown(e.target.value)}
                        name="town"
                        id="town"
                        value={town}
                      />
                    </div>
                    <div className="order__col">
                      <Input
                        label={labels.placeholders.addr2}
                        onChange={e => setAddr2(e.target.value)}
                        name="addr_line2"
                        id="addr_line2"
                        value={addr2}
                      />
                    </div>
                  </div>
                  <div className="order__row">
                    <div className="order__col">
                      <Input
                        label={labels.placeholders.region}
                        onChange={e => setRegion(e.target.value)}
                        name="region"
                        id="region"
                        value={region}
                      />
                    </div>
                    <div className="order__col">
                      <Textarea
                        className=""
                        label={labels.placeholders.info}
                        name="add_info"
                        onChange={e => setInfo(e.target.value)}
                        id="add_info"
                        value={info}
                      />
                    </div>
                  </div>
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
