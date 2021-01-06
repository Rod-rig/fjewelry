import React, { useState } from "react";
import PropTypes from "prop-types";
import { render } from "react-dom";
import { Input } from "../form/input";
import { Select } from "../form/select";

const labels = {
  save: "Save",
  cancel: "Cancel",
};

export const initProfileEditForm = () => {
  const root = document.querySelector(".js_profile_edit");

  if (root) {
    const labels = {
      title: root.getAttribute("data-label-title"),
      firstname: root.getAttribute("data-label-firstname"),
      lastname: root.getAttribute("data-label-lastname"),
      email: root.getAttribute("data-label-email"),
      phone: root.getAttribute("data-label-phone"),
      date: root.getAttribute("data-label-date"),
    };
    const title = root.getAttribute("data-title");
    const firstname = root.getAttribute("data-firstname");
    const lastname = root.getAttribute("data-lastname");
    const email = root.getAttribute("data-email");
    const phone = root.getAttribute("data-phone");
    const date = root.getAttribute("data-date");
    const href = root.getAttribute("data-cancel-href");
    render(
      <ProfileEdit
        labels={labels}
        title={title}
        firstname={firstname}
        lastname={lastname}
        email={email}
        phone={phone}
        date={date}
        href={href}
      />,
      root
    );
  }
};
const titles = ["Mr.", "Ms.", "Mrs.", "Miss."];

const ProfileEdit = props => {
  const [title, setTitle] = useState(props.title);
  const [firstName, setFirstname] = useState(props.firstname);
  const [lastName, setLastname] = useState(props.lastname);
  const [email, setEmail] = useState(props.email);
  const [phone, setPhone] = useState(props.phone);
  const [date, setDate] = useState(props.date);

  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="profile__personal">
        <div className="profile__personal_col">
          <Select
            label={props.labels.title}
            onChange={e => {
              setTitle(e.target.value);
            }}
            name="prof_title"
            id="prof_title"
            value={title}
            options={titles.map((l, i) => ({
              label: l,
              value: i,
            }))}
            isError={false}
          />
        </div>
        <div className="profile__personal_col">
          <Input
            label={props.labels.firstname}
            onChange={e => setFirstname(e.target.value)}
            name="prof_firstname"
            id="prof_firstname"
            value={firstName}
          />
        </div>
        <div className="profile__personal_col">
          <Input
            label={props.labels.lastname}
            onChange={e => setLastname(e.target.value)}
            name="prof_lastname"
            id="prof_lastname"
            value={lastName}
          />
        </div>
        <div className="profile__personal_col">
          <Input
            label={props.labels.email}
            onChange={e => setEmail(e.target.value)}
            name="prof_email"
            id="prof_email"
            value={email}
          />
        </div>
        <div className="profile__personal_col">
          <Input
            label={props.labels.phone}
            onChange={e => setPhone(e.target.value)}
            name="prof_phone"
            id="prof_phone"
            value={phone}
          />
        </div>
        <div className="profile__personal_col">
          <Input
            label={props.labels.date}
            onChange={e => setDate(e.target.value)}
            name="prof_date"
            id="prof_date"
            value={date}
          />
        </div>
      </div>
      <div className="profile__personal_footer">
        <button type="button" className="main_link">
          {labels.save}
        </button>
        <a href={props.href} className="profile__personal_cancel">
          {labels.cancel}
        </a>
      </div>
    </form>
  );
};

ProfileEdit.propTypes = {
  labels: PropTypes.any,
  title: PropTypes.string,
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  date: PropTypes.string,
  href: PropTypes.string,
};
