import React from "react";
import FormFooter from "./form-footer";

const Input = (props) => {

  return (
    <div className="form__body">
      <div className="form__controls">
        <div className="control__textbox-group">
          <label className="control__textbox-label" htmlFor="firstName">
            Fornavn
          </label>
          <input
            className="control__textbox-input"
            type="text"
            id="firstName"
            name="firstName"
            value={props.firstNameValue}
            onChange={props.handleChange}
          />
          {props.isInvalidFirstName && (
            <p className="is-error">Fornavn er påkrevd.</p>
          )}
        </div>
        <div className="control__textbox-group">
          <label className="control__textbox-label" htmlFor="firstName">
            Etternavn
          </label>
          <input
            className="control__textbox-input"
            type="text"
            id="lastName"
            name="lastName"
            value={props.lastNameValue}
            onChange={props.handleChange}
          />
          {props.isInvalidLastName && (
            <p className="is-error">Etternavn er påkrevd.</p>
          )}
        </div>
        <fieldset className="control__checkbox-fieldset">
          <legend className="control__checkbox-legend">
            Vil du delta på bryllupet vårt?
          </legend>

          <div className="control__checkbox-group">
            <div>
              <input
                className="control__checkbox-input"
                type="radio"
                id="attend-1"
                value="yes"
                name="attending"
                defaultChecked={props.attendingValue === "yes"}
                onClick={props.handleChange}
              />
              <label
                className="control__checkbox-description"
                htmlFor="attend-1"
              >
                <span className="control__checkbox-label">Ja</span>
              </label>
            </div>
            <div>
              <input
                className="control__checkbox-input"
                type="radio"
                id="attend-0"
                name="attending"
                value="no"
                defaultChecked={props.attendingValue === "no"}
                onClick={props.handleChange}
              />
              <label
                className="control__checkbox-description"
                htmlFor="attend-0"
              >
                <span className="control__checkbox-label">Nei</span>
              </label>
            </div>
          </div>
          {props.isInvalidAttending && (
            <p
              className="is-error"
              style={{ position: "relative", top: "-25px" }}
            >
              Vennligst svar om du vil delta.
            </p>
          )}
        </fieldset>

        <div
          style={{
            display: props.attendingValue === "no" ? "none" : "block",
          }}
        >
          <fieldset className="control__checkbox-fieldset">
            <legend className="control__checkbox-legend">
              Velg din matpreferanse:
            </legend>

            <div className="control__checkbox-group">
              <div>
                <input
                  className="control__checkbox-input"
                  type="radio"
                  id="meat-1"
                  value="yes"
                  name="eatingMeat"
                  defaultChecked={props.eatingMeatValue === "yes"}
                  onClick={props.handleChange}
                />
                <label
                  className="control__checkbox-description"
                  htmlFor="meat-1"
                >
                  <span className="control__checkbox-label">
                    Kjøtt 🥩
                  </span>
                </label>
              </div>
              <div>
                <input
                  className="control__checkbox-input"
                  type="radio"
                  id="meat-0"
                  value="no"
                  name="eatingMeat"
                  defaultChecked={props.eatingMeatValue === "no"}
                  onClick={props.handleChange}
                />
                <label
                  className="control__checkbox-description"
                  htmlFor="meat-0"
                >
                  <span className="control__checkbox-label">
                    Vegetar 🥦
                  </span>
                </label>
              </div>
            </div>
            {props.isInvalidEatingMeat && (
              <p
                className="is-error"
                style={{ position: "relative", top: "-25px" }}
              >
                Fortell oss hva du foretrekker å spise.
              </p>
            )}
          </fieldset>

          <div className="control__textbox-group">
            <label
              className="control__textbox-label"
              htmlFor="dietaryRestrictions"
            >
              Har du noen matallergier eller intoleranser?
            </label>
            <label
              className="control__textbox-caption"
              htmlFor="dietaryRestrictions"
            >
              (For eksempel: Nøtter, gluten, sjømat, etc.)
            </label>
            <input
              className="control__textbox-input"
              type="text"
              id="dietaryRestrictions"
              name="dietaryRestrictions"
              value={props.dietaryRestrictionsValue}
              onChange={props.handleChange}
            />
          </div>
        </div>
        <div className="control__textbox-group">
          <label className="control__textbox-label" htmlFor="message">
            Ønsker du å legge igjen en kort kommentar?
          </label>
          <textarea
            className="control__textbox-input"
            id="message"
            name="message"
            value={props.message}
            onChange={props.handleChange}
          />
        </div>
      </div>

      <FormFooter renderFooter={props.renderFooter} />
    </div>
  );
};

export default Input;
