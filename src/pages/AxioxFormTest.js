import { TextField } from "formik-material-ui";
import React from "react";
import { Formik, Field, Form } from "formik";
import Container from "@material-ui/core/Container";

function AxioxFormTest(props) {
    
    return (
        <Form>
        <Container>
          <Field
            name="companyName"
            label="Company name"
            fullWidth
            component={TextField}
          />
          <Field name="city" label="City" fullWidth component={TextField} />
          <Field
            name="street"
            label="Street"
            fullWidth
            component={TextField}
          />
          <Field
            name="posteCode"
            label="Post Code"
            fullWidth
            component={TextField}
          />
          <Field name="nip" label="NIP" fullWidth component={TextField} />
          <Field name="tel" label="Tel" fullWidth component={TextField} />
          <Field
            name="email"
            label="E-mail"
            fullWidth
            component={TextField}
          />
          <Field
            name="bankAccount"
            label="Bank account"
            fullWidth
            component={TextField}
          />
          <button onClick={props.submitForm}>save</button>
        </Container>
      </Form>
    );
  }
  export default AxioxFormTest;