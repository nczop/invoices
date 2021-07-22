import React from "react";
import PropTypes from "prop-types";
import TextField from '@material-ui/core/TextField';
import FormHeader from "./FormHeader";
import { Field } from "formik";
import ErrorMessageValidation from "./ErrorMessageValidation";

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
        <ErrorMessageValidation name={`${props.details}.companyName`} />
        <Field
          label="City"
          fullWidth
          name={`${props.details}.city`}
          as={TextField}
          InputProps={{
            readOnly: props.disabled,
          }}
        />
        <ErrorMessageValidation name={`${props.details}.city`} />
        <Field
          label="Street"
          fullWidth
          name={`${props.details}.street`}
          as={TextField}
          InputProps={{
            readOnly: props.disabled,
          }}
        />
        <ErrorMessageValidation name={`${props.details}.street`} />
        <Field
          label="Post Code"
          fullWidth
          name={`${props.details}.postcode`}
          as={TextField}
          InputProps={{
            readOnly: props.disabled,
          }}
        />
        <ErrorMessageValidation name={`${props.details}.postcode`} />
        <Field
          label="NIP"
          fullWidth
          name={`${props.details}.nip`}
          as={TextField}
          InputProps={{
            readOnly: props.disabled,
          }}
        />
        <ErrorMessageValidation name={`${props.details}.nip`} />
        <Field
          label="Tel"
          fullWidth
          name={`${props.details}.phone`}
          as={TextField}
          InputProps={{
            readOnly: props.disabled,
          }}
        />
        <ErrorMessageValidation name={`${props.details}.phone`} />
        <Field
          label="E-mail"
          fullWidth
          name={`${props.details}.email`}
          as={TextField}
          InputProps={{
            readOnly: props.disabled,
          }}
        />
        <ErrorMessageValidation name={`${props.details}.email`} />
        <Field
          label="Bank account"
          fullWidth
          name={`${props.details}.bankAccount`}
          as={TextField}
          InputProps={{
            readOnly: props.disabled,
          }}
        />
        <ErrorMessageValidation name={`${props.details}.bankAccount`} />
      </div>
    </>
  );
}

RecipientSenderDetails.propTypes = {
  details: PropTypes.string.isRequired,
  disabled: PropTypes.bool
};

export default RecipientSenderDetails;
