import React, { useState } from "react";
import PropTypes from "prop-types";
import { Input } from "../form/input";
import { Email } from "../form/email";
import { Select } from "../form/select";
import { Textarea } from "../form/textarea";

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
};

export const Callback = props => {
  const [enq, setEnq] = useState(0);
  return (
    <React.Fragment>
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
      <div className="callback__row">
        <div className="callback__col">
          <div className="mb-15">
            <Input
              label={labels.firstName}
              onChange={() => {}}
              name="cbk_fname"
              id="cbk_fname"
            />
          </div>
          <div className="mb-15">
            <Input
              label={labels.secondName}
              onChange={() => {}}
              name="cbk_sname"
              id="cbk_sname"
            />
          </div>
          <div className="mb-15">
            <Email
              label={labels.email}
              onChange={() => {}}
              name="cbk_email"
              id="cbk_email"
            />
          </div>
          <div>
            <Input
              type="tel"
              label={labels.tel}
              onChange={() => {}}
              name="cbk_tel"
              id="cbk_tel"
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
              onChange={() => {}}
              id="cbk_info"
              className="callback__textarea"
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
        <button className="main_link" type="button">
          {labels.submit}
        </button>
      </div>
    </React.Fragment>
  );
};

Callback.propTypes = {
  phone: PropTypes.string,
};
