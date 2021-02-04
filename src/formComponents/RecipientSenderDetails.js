import React from "react";
import PropTypes from "prop-types";
import { TextField } from "formik-material-ui";
import FormHeader from "./FormHeader";
import { Field } from "formik";

function RecipientSenderDetails(props) {
  return (
    <>
      <div>
        <FormHeader header={props.header} />
        <div>
          <Field
            label="Company name"
            fullWidth
            name={`${props.details}.companyName`}
            component={TextField}
            InputProps={{
              readOnly: props.disabled,
            }}
          />
          <Field
            label="City"
            fullWidth
            name={`${props.details}.city`}
            component={TextField}
            InputProps={{
              readOnly: props.disabled,
            }}
          />
          <Field
            label="Street"
            fullWidth
            name={`${props.details}.street`}
            component={TextField}
            InputProps={{
              readOnly: props.disabled,
            }}
          />
          <Field
            label="Post Code"
            fullWidth
            name={`${props.details}.postcode`}
            component={TextField}
            InputProps={{
              readOnly: props.disabled,
            }}
          />
          <Field
            label="NIP"
            fullWidth
            name={`${props.details}.nip`}
            component={TextField}
            InputProps={{
              readOnly: props.disabled,
            }}
          />
          <Field
            label="Tel"
            fullWidth
            name={`${props.details}.phone`}
            component={TextField}
            InputProps={{
              readOnly: props.disabled,
            }}
          />
          <Field
            label="E-mail"
            fullWidth
            name={`${props.details}.email`}
            component={TextField}
            InputProps={{
              readOnly: props.disabled,
            }}
          />
          <Field
            label="Bank account"
            fullWidth
            name={`${props.details}.bankAccount`}
            component={TextField}
            InputProps={{
              readOnly: props.disabled,
            }}
          />
        </div>
      </div>
    </>
  );
}
RecipientSenderDetails.propTypes = {
  header: PropTypes.string.isRequired,
};
export default RecipientSenderDetails;
