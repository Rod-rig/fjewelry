import React, { useState } from "react";
import PropTypes from "prop-types";
import { Input } from "../form/input";
import { Email } from "../form/email";
import { Select } from "../form/select";
import { Textarea } from "../form/textarea";
import ajax from "../../helpers/ajax";
import { Loader } from "../components/loader";

const labels = {
  title: "Speak with our expert advisors",
  text1: "Please call us on",
  text2:
    "or fill in the details below and one of our experts will call you back.",
  firstName: "First Name *",
  secondName: "Second Name *",
  email: "Email *",
  tel: "Phone",
  policy1:
    "I confirm I want to receive newsletters and marketing e-mails from F Jewellery in line with their",
  policy2:
    "(By submitting this form you agree to our Terms & Conditions and the terms of your Privacy Policy.)",
  policyLInk: "Privacy policy",
  enq: "Enquiry Type",
  submit: "Send",
  enquiry: [
    "Lorem ipsum dolor sit.",
    "Lorem ipsum dolor",
    "Lorem ipsum",
    "Lorem",
  ],
  info: "Additional information *",
  success: "Your request has been successfully sent",
};

export const Callback = props => {
  const [enq, setEnq] = useState(0);
  const [fname, setFName] = useState("");
  const [sname, setSName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [info, setInfo] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isSuccessSubmit, setSuccessSubmit] = useState(false);
  const [isError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const submitForm = e => {
    e.preventDefault();
    setLoading(true);
    ajax
      .post({
        url: "/query/contact/send/",
        data: {
          cbk_fname: fname,
          cbk_sname: sname,
          cbk_email: email,
          cbk_tel: tel,
          cbk_enq: enq,
          cbk_info: info,
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
    <div className="text-center">{labels.success}</div>
  ) : isLoading ? (
    <div className="text-center">
      <Loader />
    </div>
  ) : (
    <form onSubmit={submitForm}>
      <div className="modal__title">{labels.title}</div>
      <div className="modal__text">
        {labels.text1}{" "}
        <a
          className="callback__phone"
          href={`tel:${props.phone.split(" ").join("")}`}
        >
          {props.phone}
        </a>{" "}
        {labels.text2}
      </div>
      {isError && (
        <div className="text-error text-center mb-15">{errorMessage}</div>
      )}
      <div className="callback__row">
        <div className="callback__col">
          <div className="mb-15">
            <Input
              label={labels.firstName}
              onChange={e => setFName(e.target.value)}
              name="cbk_fname"
              id="cbk_fname"
              value={fname}
              isError={false}
            />
          </div>
          <div className="mb-15">
            <Input
              label={labels.secondName}
              onChange={e => setSName(e.target.value)}
              name="cbk_sname"
              id="cbk_sname"
              value={sname}
              isError={false}
            />
          </div>
          <div className="mb-15">
            <Email
              label={labels.email}
              onChange={e => setEmail(e.target.value)}
              name="cbk_email"
              id="cbk_email"
              value={email}
              isError={false}
            />
          </div>
          <div>
            <Input
              type="tel"
              label={labels.tel}
              onChange={e => setTel(e.target.value)}
              name="cbk_tel"
              id="cbk_tel"
              value={tel}
              isError={false}
            />
          </div>
        </div>
        <div className="callback__col">
          <div className="mb-15">
            <Select
              label={labels.enq}
              onChange={e => {
                setEnq(e.target.value);
              }}
              name="cbk_enq"
              id="cbk_enq"
              value={enq}
              options={labels.enquiry.map((l, i) => ({
                label: l,
                value: i,
              }))}
              isError={false}
            />
          </div>
          <div>
            <Textarea
              label={labels.info}
              name="cbk_info"
              onChange={e => setInfo(e.target.value)}
              id="cbk_info"
              className="callback__textarea"
              value={info}
              isError={false}
            />
          </div>
        </div>
      </div>
      <div className="callback__policy">
        <span className="callback__policy1">{labels.policy1}</span>{" "}
        <a href="" className="callback__policy1">
          {labels.policyLInk}
        </a>{" "}
        <span className="callback__policy2">{labels.policy2}</span>
      </div>
      <div className="text-center">
        <button className="main_link" type="submit">
          {labels.submit}
        </button>
      </div>
    </form>
  );
};

Callback.propTypes = {
  phone: PropTypes.string,
};
