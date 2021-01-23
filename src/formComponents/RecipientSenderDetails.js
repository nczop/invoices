import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import FormHeader from "./FormHeader";
import { Field } from "formik";

function RecipientSenderDetails(props) {  
  return (
    <>    
      <div>
        <FormHeader header={props.header} />
        <div>
          <Field label="Company name" fullWidth name="recipientCompanyName" component={TextField}/>
          <Field label="City" fullWidth component={TextField}/>
          <Field label="Street" fullWidth component={TextField}/>
          <Field label="Post Code" fullWidth component={TextField}/>
          <Field label="NIP" fullWidth component={TextField}/>
          <Field label="Tel" fullWidth component={TextField}/>
          <Field label="E-mail" fullWidth component={TextField}/>
          <Field label="Bank account" fullWidth component={TextField}/>
        </div>
      </div>
    </>
  );
}
RecipientSenderDetails.propTypes = {
  header: PropTypes.string.isRequired,
};
export default RecipientSenderDetails;
