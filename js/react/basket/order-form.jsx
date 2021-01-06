import React, { useState, useEffect } from "react";
import { Elements, CardElement, useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ajax from "../../helpers/ajax";
import {
  Loader,
  removeLoader,
  showFullScreenLoader,
} from "../components/loader";
import { Delivery } from "./delivery";
import { Input } from "../form/input";
import { Select } from "../form/select";
import { Textarea } from "../form/textarea";
import { Radio } from "../form/radio";
import { Checkbox } from "../form/checkbox";
import { countries } from "../../helpers/countries";

const labels = {
  empty: "Basket is empty",
  quantity: "Quantity:",
  remove: "Remove",
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
    addr2: "Address Line 2",
    town: "Town / City *",
    region: "Region",
    info: "Additional information",
  },
  addressTitle: "Delivery address",
  billingTitle: "Billing address",
  payTitle: "Payment information",
  titles: [
    { name: "Mr.", value: "690" },
    { name: "Ms.", value: "691" },
    { name: "Mrs.", value: "692" },
    { name: "Miss.", value: "693" },
  ],
  countries: [
    "United Kingdom",
    "Ireland",
    "France",
    "Italy",
    "Spain",
    "Germany",
  ],
  billing: ["Same as Delivery Address", "other"],
  payment: ["PayPal", "Credit or debit card"],
  accept1: "I accept",
  accept2: "and",
  terms: "Terms & Conditions",
  privacy: "Privacy Policy",
  pay: "Pay",
};

const stripePromise = loadStripe(window.stripe.apiKey);

export const OrderFormWithPayment = () => {
  const [isLoaded, setLoaded] = useState(false);
  const [data, setData] = useState({});
  const [discount, setDiscount] = useState("");
  const [isGuest, setGuest] = useState("noguest");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [title, setTitle] = useState("690");
  const [phone, setPhone] = useState("");
  const [addr, setAddr] = useState("");
  const [post, setPost] = useState("");
  const [country, setCountry] = useState("");
  const [addr1, setAddr1] = useState("");
  const [addr2, setAddr2] = useState("");
  const [town, setTown] = useState("");
  const [region, setRegion] = useState("");
  const [info, setInfo] = useState("");
  const [isSameBilling, setBillingRadio] = useState("same");
  const [billAddr, setBillAddr] = useState("");
  const [billPost, setBillPost] = useState("");
  const [billCountry, setBillCountry] = useState("");
  const [billAddr1, setBillAddr1] = useState("");
  const [billTown, setBillTown] = useState("");
  const [billAddr2, setBillAddr2] = useState("");
  const [billRegion, setBillRegion] = useState("");
  const [billInfo, setBillInfo] = useState("");
  const [payment, setPayment] = useState("paypal_express");
  const [isAccepted, setAccept] = useState(true);
  const [deliveryCode, setDeliveryCode] = useState("");
  const [deliveryName, setDeliveryName] = useState("");
  const [isErrorForm, setErrorForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [cardComplete, setCardComplete] = useState(false);
  const stripe = useStripe();
  const [card, setCardRef] = useState(null);

  useEffect(() => {
    ajax
      .post({ url: "/query/checkout/get/" })
      .then(({ data }) => {
        setData(data);
        setLoaded(true);
        if (Math.abs(data.total.coupon_discount) > 0) {
          setDiscount(data.total.coupon_discount_formatted);
        }
        if (data.deliveries && data.deliveries.length > 0) {
          const selectedDelivery = data.deliveries.find(d => d.selected);
          setDeliveryCode(
            selectedDelivery
              ? selectedDelivery.method_code
              : data.deliveries[0].method_code
          );
          setDeliveryName(
            selectedDelivery
              ? selectedDelivery.method_title
              : data.deliveries[0].method_title
          );
        }
      })
      .catch(() => console.log("Couldn't get order info"));
  }, []);

  const [isLoginError, setLoginError] = useState(false);
  const [errorLoginMsg, setErrorLoginMsg] = useState("");

  const submitLoginForm = e => {
    e.preventDefault();
    setLoaded(false);
    ajax
      .post({
        url: "/query/customer/login/",
        data: {
          username: email,
          password,
        },
      })
      .then(() => {
        setLoginError(false);
        window.location.reload();
      })
      .catch(({ response }) => {
        setLoaded(true);
        setLoginError(true);
        setErrorLoginMsg(response.data.message);
      });
  };

  const postFormData = (shippingAddress, billingAddress, token) => {
    ajax
      .post({
        url: "/query/checkout/save/",
        data: {
          addressInformation: {
            shipping_address: shippingAddress,
            billing_address: billingAddress,
            shipping_method_code: deliveryCode,
            shipping_carrier_code: deliveryCode,
            extension_attributes: {},
          },
          email: email,
          paymentMethod: {
            method: payment,
            additional_data:
              payment === "stripe_payments"
                ? {
                    cc_stripejs_token: token,
                    cc_saved: "new_card",
                    cc_save: false,
                  }
                : {},
          },
          orderCustomAttributes: {
            additional_fields: {
              title: title,
              additional_information: info,
            },
          },
          agreement: isAccepted,
        },
      })
      .then(({ data }) => {
        window.location = data.redirectUrl;
        setErrorForm(false);
      })
      .catch(({ response }) => {
        setErrorForm(true);
        setErrorMessage(response.data.message);
        removeLoader();
        console.log("Couldn't submit order form");
      });
  };

  const submitOrderForm = e => {
    e.preventDefault();
    if (!cardComplete && payment === "stripe_payments") {
      return;
    }

    showFullScreenLoader();
    const shippingAddress = {
      countryId: country,
      region: region,
      street: [addr1, addr2],
      telephone: phone,
      postcode: post,
      city: town,
      firstname: fname,
      lastname: lname,
    };
    const billingAddress = isSameBilling
      ? shippingAddress
      : {
          countryId: country,
          region: billRegion,
          street: [billAddr1, billAddr2],
          telephone: phone,
          postcode: post,
          city: town,
          firstname: fname,
          lastname: lname,
          saveInAddressBook: 1,
        };

    if (payment === "stripe_payments") {
      stripe
        .createPaymentMethod({
          type: "card",
          card: card,
          billing_details: {
            email: email,
            phone: phone,
            name: fname,
            address: isSameBilling
              ? {
                  city: town,
                  country: country,
                  line1: addr1,
                  line2: addr2,
                  postal_code: post,
                  state: null,
                }
              : {
                  city: billTown,
                  country: billCountry,
                  line1: billAddr1,
                  line2: billAddr2,
                  postal_code: billPost,
                  state: null,
                },
          },
        })
        .then(data => {
          postFormData(shippingAddress, billingAddress, data.paymentMethod.id);
        })
        .catch(err => {
          removeLoader();
          console.log("Couldn't create stripe payment method", err);
        });
      return;
    }

    postFormData(shippingAddress, billingAddress);
  };

  const onDeliveryChange = e => {
    const target = e.target;
    showFullScreenLoader();
    ajax
      .post({
        url: "/query/cart/calculate/",
        data: {
          addressInformation: {
            shipping_address: {
              countryId: "",
              region: "",
              postcode: null,
            },
            shipping_method_code: target.value,
            shipping_carrier_code: target.value,
          },
        },
      })
      .then(({ data: response }) => {
        setData({
          ...data,
          total: response,
        });
        setDeliveryCode(target.value);
        setDeliveryName(target.getAttribute("data-name"));
        removeLoader();
      })
      .catch(e => {
        removeLoader();
        console.log(`Couldn't fetch delivery info`, e);
      });
  };

  return isLoaded ? (
    data ? (
      <div className="order basket__row">
        <div className="basket__left">
          <div className="order__user">
            <label
              htmlFor="guest1"
              className={`basket__delivery_radio order__radio ${
                Object.keys(data["customer_data"]).length === 0
                  ? ""
                  : "basket__delivery_radio--disabled"
              }`}
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
              className={`basket__delivery_radio order__radio ${
                Object.keys(data["customer_data"]).length === 0
                  ? ""
                  : "basket__delivery_radio--disabled"
              }`}
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
          {Object.keys(data["customer_data"]).length !== 0 ? (
            <div className="order__authed">
              <svg className="order__authed_tick">
                <use xlinkHref="#tick" />
              </svg>
              <div className="order__email">
                {data["customer_data"]["email"]}
              </div>
            </div>
          ) : (
            ""
          )}
          {Object.keys(data["customer_data"]).length === 0 ? (
            <React.Fragment>
              {isGuest === "noguest" ? (
                <form onSubmit={submitLoginForm}>
                  {isLoginError && (
                    <div className="text-error mb-10">{errorLoginMsg}</div>
                  )}
                  <div className="order__row">
                    <div className="order__col">
                      <Input
                        label={labels.placeholders.email}
                        onChange={e => setEmail(e.target.value)}
                        name="email"
                        id="email"
                        value={email}
                        isError={isLoginError}
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
                        isError={isLoginError}
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
                      <button
                        className="order__login_btn btn js_reg_trigger"
                        type="button"
                      >
                        {labels.reg}
                      </button>
                    </div>
                  </div>
                </form>
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
            </React.Fragment>
          ) : (
            <form onSubmit={submitOrderForm}>
              {isErrorForm && (
                <div className="text-error mt-20">{errorMessage}</div>
              )}
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
                      options={labels.titles.map(title => ({
                        label: title.name,
                        value: title.value,
                      }))}
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
                      isError={isErrorForm}
                    />
                  </div>
                  <div className="order__col">
                    <Input
                      label={labels.placeholders.email}
                      onChange={e => setEmail(e.target.value)}
                      name="email"
                      id="email"
                      value={email}
                      isError={isErrorForm}
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
                      isError={isErrorForm}
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
                      options={
                        Object.keys(data["customer_data"]["addresses"]).length >
                        0
                          ? Object.keys(data["customer_data"]["addresses"]).map(
                              l => ({
                                label:
                                  data["customer_data"]["addresses"][l].city,
                                value:
                                  data["customer_data"]["addresses"][l].city,
                              })
                            )
                          : []
                      }
                    />
                  </div>
                  <div className="order__col">
                    <Input
                      label={labels.placeholders.post}
                      onChange={e => setPost(e.target.value)}
                      name="post"
                      id="post"
                      value={post}
                      isError={isErrorForm}
                    />
                  </div>
                </div>
                <div className="order__row">
                  <div className="order__col">
                    <Select
                      label={labels.placeholders.country}
                      onChange={e => setCountry(e.target.value)}
                      name="country"
                      id="country"
                      value={country}
                      options={countries.map(country => ({
                        label: country.name,
                        value: country.id,
                      }))}
                    />
                  </div>
                  <div className="order__col">
                    <Input
                      label={labels.placeholders.addr1}
                      onChange={e => setAddr1(e.target.value)}
                      name="addr_line1"
                      id="addr_line1"
                      value={addr1}
                      isError={isErrorForm}
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
                      isError={isErrorForm}
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
                      className="order__comment"
                      label={labels.placeholders.info}
                      name="add_info"
                      onChange={e => setInfo(e.target.value)}
                      id="add_info"
                      value={info}
                    />
                  </div>
                </div>
              </div>
              <div className="order__section">
                <div className="order__title">{labels.billingTitle}</div>
                <div className="order__user">
                  <div className="order__radio">
                    <Radio
                      id="same"
                      name="billing"
                      checked={isSameBilling === "same"}
                      onChange={e => setBillingRadio(e.target.value)}
                      value="same"
                      label={labels.billing[0]}
                    />
                  </div>
                  <div className="order__radio">
                    <Radio
                      id="other"
                      name="billing"
                      checked={isSameBilling === "other"}
                      onChange={e => setBillingRadio(e.target.value)}
                      value="other"
                      label={labels.billing[1]}
                    />
                  </div>
                </div>
                {isSameBilling === "other" && (
                  <div>
                    <div className="order__row">
                      <div className="order__col">
                        <Select
                          label={labels.placeholders.addr}
                          onChange={e => {
                            setBillAddr(e.target.value);
                          }}
                          name="bill_addr"
                          id="bill_addr"
                          value={billAddr}
                          options={
                            Object.keys(data["customer_data"]["addresses"])
                              .length > 0
                              ? Object.keys(
                                  data["customer_data"]["addresses"]
                                ).map(l => ({
                                  label:
                                    data["customer_data"]["addresses"][l].city,
                                  value:
                                    data["customer_data"]["addresses"][l].city,
                                }))
                              : []
                          }
                        />
                      </div>
                      <div className="order__col">
                        <Input
                          label={labels.placeholders.post}
                          onChange={e => setBillPost(e.target.value)}
                          name="bill_post"
                          id="bill_post"
                          value={billPost}
                          isError={isErrorForm}
                        />
                      </div>
                    </div>
                    <div className="order__row">
                      <div className="order__col">
                        <Select
                          label={labels.placeholders.country}
                          onChange={e => setBillCountry(e.target.value)}
                          name="bill_country"
                          id="bill_country"
                          value={billCountry}
                          options={countries.map(country => ({
                            label: country.name,
                            value: country.id,
                          }))}
                        />
                      </div>
                      <div className="order__col">
                        <Input
                          label={labels.placeholders.addr1}
                          onChange={e => setBillAddr1(e.target.value)}
                          name="bill_addr_line1"
                          id="bill_addr_line1"
                          value={billAddr1}
                          isError={isErrorForm}
                        />
                      </div>
                    </div>
                    <div className="order__row">
                      <div className="order__col">
                        <Input
                          label={labels.placeholders.town}
                          onChange={e => setBillTown(e.target.value)}
                          name="bill_town"
                          id="bill_town"
                          value={billTown}
                          isError={isErrorForm}
                        />
                      </div>
                      <div className="order__col">
                        <Input
                          label={labels.placeholders.addr2}
                          onChange={e => setBillAddr2(e.target.value)}
                          name="bill_addr_line2"
                          id="bill_addr_line2"
                          value={billAddr2}
                        />
                      </div>
                    </div>
                    <div className="order__row">
                      <div className="order__col">
                        <Input
                          label={labels.placeholders.region}
                          onChange={e => setBillRegion(e.target.value)}
                          name="bill_region"
                          id="bill_region"
                          value={billRegion}
                        />
                      </div>
                      <div className="order__col">
                        <Textarea
                          className="order__comment"
                          label={labels.placeholders.info}
                          name="bill_add_info"
                          onChange={e => setBillInfo(e.target.value)}
                          id="bill_add_info"
                          value={billInfo}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="order__section order__section--last">
                <div className="order__title">{labels.payTitle}</div>
                <div className="order__user">
                  <div className="order__radio">
                    <Radio
                      id="paypal_express"
                      name="payment"
                      checked={payment === "paypal_express"}
                      onChange={e => setPayment(e.target.value)}
                      value="paypal_express"
                      label={labels.payment[0]}
                    />
                  </div>
                  <div className="order__radio">
                    <Radio
                      id="stripe_payments"
                      name="payment"
                      checked={payment === "stripe_payments"}
                      onChange={e => setPayment(e.target.value)}
                      value="stripe_payments"
                      label={labels.payment[1]}
                    />
                  </div>
                </div>
              </div>
              {payment === "stripe_payments" && (
                <div className="order__card">
                  <CardElement
                    options={{
                      style: {
                        base: {
                          fontSize: "16px",
                          fontFamily: '"Montserrat", sans-serif',
                          color: "#333",
                          "::placeholder": {
                            color: "#333",
                          },
                        },
                        invalid: {
                          color: "red",
                        },
                      },
                    }}
                    onChange={e => {
                      if (e.error) {
                        setErrorForm(Boolean(e.error));
                        setErrorMessage(e.error.message);
                      }
                      setCardComplete(e.complete);
                    }}
                    onReady={el => setCardRef(el)}
                  />
                </div>
              )}
              <Checkbox
                id="terms"
                name="terms"
                checked={isAccepted}
                onChange={() => setAccept(!isAccepted)}
                className="order__accept"
              >
                {labels.accept1 + " "}
                <a href="">{labels.terms}</a>
                {" " + labels.accept2 + " "}
                <a href="">{labels.privacy}</a>
              </Checkbox>
              <div className="order__submit_wrap">
                <button
                  className="order__submit order__submit_all"
                  type="submit"
                >
                  {labels.pay}
                </button>
              </div>
            </form>
          )}
        </div>
        <div className="basket__right">
          <Delivery
            deliveries={data.deliveries}
            total={data.total}
            shouldShowSecureButton={false}
            discount={discount}
            onDeliveryChange={onDeliveryChange}
            deliveryCode={deliveryCode}
            deliveryName={deliveryName}
          />
        </div>
      </div>
    ) : (
      <div>{labels["empty"]}</div>
    )
  ) : (
    <Loader />
  );
};

export const OrderForm = () => (
  <Elements stripe={stripePromise}>
    <OrderFormWithPayment />
  </Elements>
);
