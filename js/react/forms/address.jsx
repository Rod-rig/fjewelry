import React, { useState } from "react";
import PropTypes from "prop-types";
import { render, unmountComponentAtNode } from "react-dom";
import { Input } from "../form/input";
import { Select } from "../form/select";
import { countries } from "../../helpers/countries";

const labels = {
  city: "Town / City",
  country: "Country",
  region: "Region",
  postcode: "Post Code",
  address1: "Address Line 1",
  address2: "Address Line 2",
  save: "Save",
  cancel: "Cancel",
  delete: "Delete",
};

const initAddressAdd = () => {
  const addNewButton = document.querySelector(".js_add_new_address");

  if (addNewButton) {
    addNewButton.addEventListener("click", function () {
      const root = document.querySelector(".js_new_address_form");

      if (root) {
        // render(
        //   <Address
        //     onCancel={() => {
        //       unmountComponentAtNode(root);
        //     }}
        //   />,
        //   root
        // );
      }
    });
  }
};

const initAddressEdit = () => {
  const editButton = document.querySelectorAll(".js_address_edit");

  if (editButton.length > 0) {
    editButton.forEach(e => {
      e.addEventListener("click", function () {
        const root = this.closest(".js_address");
        const content = this.closest(".js_hide_on_edit");

        if (root) {
          const country = root.getAttribute("data-country");
          const city = root.getAttribute("data-city");
          const region = root.getAttribute("data-region");
          const postcode = root.getAttribute("data-postcode");
          const address1 = root.getAttribute("data-address1");
          const address2 = root.getAttribute("data-address2");
          removeOldAddressForm();
          document.querySelectorAll(".js_hide_on_edit").forEach(a => {
            a.classList.remove("hide");
          });
          content.classList.add("hide");

          render(
            <Address
              country={country}
              city={city}
              region={region}
              postcode={postcode}
              address1={address1}
              address2={address2}
              onCancel={() => {
                content.classList.remove("hide");
                removeOldAddressForm();
              }}
            />,
            root.querySelector(".js_address_form")
          );
        }
      });
    });
  }
};

const removeOldAddressForm = () => {
  document.querySelectorAll(".js_address").forEach(el => {
    el.classList.remove("active");
    unmountComponentAtNode(el.querySelector(".js_address_form"));
  });
};

const initAddressToggle = () => {
  const toggler = document.querySelectorAll(".js_toggle_address");
  if (toggler.length > 0) {
    toggler.forEach(t => {
      t.addEventListener("click", function () {
        const wrapper = this.closest(".js_address");

        if (wrapper.classList.contains("active")) {
          return;
        }
        removeOldAddressForm();
        wrapper.classList.toggle("active");
        const root = wrapper.querySelector(".js_address_form");

        if (root) {
          const country = wrapper.getAttribute("data-country");
          const city = wrapper.getAttribute("data-city");
          const region = wrapper.getAttribute("data-region");
          const postcode = wrapper.getAttribute("data-postcode");
          const address1 = wrapper.getAttribute("data-address1");
          const address2 = wrapper.getAttribute("data-address2");

          render(
            <Address
              country={country}
              city={city}
              region={region}
              postcode={postcode}
              address1={address1}
              address2={address2}
              onCancel={removeOldAddressForm}
            />,
            root
          );
        }
      });
    });
  }
};

const Address = props => {
  const [city, setCity] = useState(props.city);
  const [country, setCountry] = useState(props.country);
  const [region, setRegion] = useState(props.region);
  const [postcode, setPostcode] = useState(props.postcode);
  const [address1, setAddress1] = useState(props.address1);
  const [address2, setAddress2] = useState(props.address2);

  return (
    <div>
      <form onSubmit={e => e.preventDefault()} className="addresses__form">
        <div className="addresses__form_control">
          <Select
            label={labels.country}
            onChange={e => {
              setCountry(e.target.value);
            }}
            name="add_country"
            id="add_country"
            value={country}
            options={countries.map((l, i) => ({
              label: l,
              value: i,
            }))}
            isError={false}
          />
        </div>
        <div className="addresses__form_control">
          <Input
            label={labels.city}
            onChange={e => setCity(e.target.value)}
            name="add_city"
            id="add_city"
            value={city}
            isError={false}
          />
        </div>
        <div className="addresses__form_control">
          <Input
            label={labels.region}
            onChange={e => setRegion(e.target.value)}
            name="add_region"
            id="add_region"
            value={region}
            isError={false}
          />
        </div>
        <div className="addresses__form_control">
          <Input
            label={labels.postcode}
            onChange={e => setPostcode(e.target.value)}
            name="add_postcode"
            id="add_postcode"
            value={postcode}
            isError={false}
          />
        </div>
        <div className="addresses__form_control">
          <Input
            label={labels.address1}
            onChange={e => setAddress1(e.target.value)}
            name="add_address1"
            id="add_address1"
            value={address1}
            isError={false}
          />
        </div>
        <div className="addresses__form_control">
          <Input
            label={labels.address2}
            onChange={e => setAddress2(e.target.value)}
            name="add_address2"
            id="add_address2"
            value={address2}
            isError={false}
          />
        </div>
        <div className="addresses__form_buttons">
          <button type="submit" className="main_link">
            {labels.save}
          </button>
          <button
            className="btn addresses__cancel"
            type="button"
            onClick={props.onCancel}
          >
            {labels.cancel}
          </button>
          <button className="btn addresses__remove" type="button">
            <svg className="addresses__icon">
              <use xlinkHref="#close" />
            </svg>
            <span className="addresses__remove_text">{labels.delete}</span>
          </button>
        </div>
      </form>
    </div>
  );
};

Address.propTypes = {
  country: PropTypes.string,
  city: PropTypes.string,
  region: PropTypes.string,
  postcode: PropTypes.string,
  address1: PropTypes.string,
  address2: PropTypes.string,
  onCancel: PropTypes.func,
};

export const initAddressEvents = () => {
  initAddressToggle();
  initAddressAdd();
  initAddressEdit();
};
