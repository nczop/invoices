import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import FormHeader from "./FormHeader";

function Form(props) {  
  return (
    <>    
      <div>
        <FormHeader header={props.header} />
        <div>      
          {/* <div>{props.invoice.recipientData.companyName}</div> */}
          <TextField label="Company name" fullWidth defaultValue={props.invoice.recipientData["companyName"]}/>
          <TextField label="City" fullWidth />
          <TextField label="Street" fullWidth />
          <TextField label="Post Code" fullWidth />
          <TextField label="NIP" fullWidth />
          <TextField label="Tel" fullWidth />
          <TextField label="E-mail" fullWidth />
          <TextField label="Bank account" fullWidth />
        </div>
      </div>
    </>
  );
}
Form.propTypes = {
  header: PropTypes.string.isRequired,
};
export default Form;
