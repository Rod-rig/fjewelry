import React, { useState } from "react";
import PropTypes from "prop-types";
import { render, unmountComponentAtNode } from "react-dom";
import { Input } from "../form/input";
import { Select } from "../form/select";
import { countries } from "../../helpers/countries";
import ajax from "../../helpers/ajax";
import { removeLoader, showFullScreenLoader } from "../components/loader";

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
        render(
          <Address
            onCancel={() => {
              unmountComponentAtNode(root);
            }}
          />,
          root
        );
      }
    });
  }
};

const initAddressEdit = () => {
  const editButton = document.querySelectorAll(".js_address_edit");

  if (editButton.length > 0) {
    editButton.forEach(e => {
      e.addEventListener("click", function () {
        const id = this.getAttribute("data-id");
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
              id={id}
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
  const countryId = countries.find(c => c.name === props.country);
  const [city, setCity] = useState(props.city);
  const [country, setCountry] = useState(
    props.country ? countryId.id : countries[0].id
  );
  const [region, setRegion] = useState(props.region);
  const [postcode, setPostcode] = useState(props.postcode);
  const [address1, setAddress1] = useState(props.address1);
  const [address2, setAddress2] = useState(props.address2);

  const onSubmit = e => {
    e.preventDefault();
    showFullScreenLoader();
    const isEditMode = Boolean(props.id);
    ajax
      .post({
        url: isEditMode
          ? `/query/customer/StoreAddress/id/${props.id}/`
          : "/query/customer/StoreAddress/",
        data: {
          country_id: country,
          region: region,
          street: [address1, address2],
          postcode: postcode,
          city: city,
        },
      })
      .then(() => {
        window.location.reload();
      })
      .catch(err => {
        removeLoader();
        console.log("Couldn't add/change address", err);
      });
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="addresses__form">
        <div className="addresses__form_control">
          <Select
            label={labels.country}
            onChange={e => {
              setCountry(e.target.value);
            }}
            name="add_country"
            id="add_country"
            value={country}
            options={countries.map(country => ({
              label: country.name,
              value: country.id,
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
            required={false}
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
          {Boolean(props.id) && (
            <button
              className="btn addresses__remove"
              type="button"
              onClick={onAddressRemove.bind(this, props.id)}
            >
              <svg className="addresses__icon">
                <use xlinkHref="#close" />
              </svg>
              <span className="addresses__remove_text">{labels.delete}</span>
            </button>
          )}
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
  id: PropTypes.string,
};

const onAddressRemove = id => {
  showFullScreenLoader();
  ajax
    .post({
      url: `/query/customer/DeleteAddress/id/${id}/`,
    })
    .then(() => {
      window.location.reload();
    })
    .catch(err => {
      removeLoader();
      console.log(`Couldn't remove address id ${id}`, err);
    });
};

const initAddressRemove = () => {
  document.addEventListener("click", function (e) {
    const target = e.target.closest(".js_remove_address");

    if (target) {
      const id = target.getAttribute("data-id");

      if (!id) return;

      onAddressRemove(id);
    }
  });
};

export const initAddressEvents = () => {
  initAddressToggle();
  initAddressAdd();
  initAddressEdit();
  initAddressRemove();
};
