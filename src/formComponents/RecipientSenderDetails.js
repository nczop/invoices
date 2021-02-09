import React from "react";
import PropTypes from "prop-types";
import TextField from '@material-ui/core/TextField';
import FormHeader from "./FormHeader";
import { Field } from "formik";

function RecipientSenderDetails(props) {
  return (
    <>
      <FormHeader header={props.header} />
      <div>
        <Field
          label="Company name"
          fullWidth
          name={`${props.details}.companyName`}
          as={TextField}
          InputProps={{
            readOnly: props.disabled,
          }}
        />
        <Field
          label="City"
          fullWidth
          name={`${props.details}.city`}
          as={TextField}
          InputProps={{
            readOnly: props.disabled,
          }}
        />
        <Field
          label="Street"
          fullWidth
          name={`${props.details}.street`}
          as={TextField}
          InputProps={{
            readOnly: props.disabled,
          }}
        />
        <Field
          label="Post Code"
          fullWidth
          name={`${props.details}.postcode`}
          as={TextField}
          InputProps={{
            readOnly: props.disabled,
          }}
        />
        <Field
          label="NIP"
          fullWidth
          name={`${props.details}.nip`}
          as={TextField}
          InputProps={{
            readOnly: props.disabled,
          }}
        />
        <Field
          label="Tel"
          fullWidth
          name={`${props.details}.phone`}
          as={TextField}
          InputProps={{
            readOnly: props.disabled,
          }}
        />
        <Field
          label="E-mail"
          fullWidth
          name={`${props.details}.email`}
          as={TextField}
          InputProps={{
            readOnly: props.disabled,
          }}
        />
        <Field
          label="Bank account"
          fullWidth
          name={`${props.details}.bankAccount`}
          as={TextField}
          InputProps={{
            readOnly: props.disabled,
          }}
        />
      </div>
    </>
  );
}
RecipientSenderDetails.propTypes = {
  header: PropTypes.string.isRequired,
};
export default RecipientSenderDetails;
