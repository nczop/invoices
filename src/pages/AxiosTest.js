import React from "react";
// import TextField from "@material-ui/core/TextField";
import { Formik, Field, Form } from "formik";
import { TextField } from "formik-material-ui";
import { details } from "../details";
import { useState, useEffect } from "react";
import AxioxFormTest from "./AxioxFormTest"

function AxiosTest(props) {
  const [invoice, setInvoice] = useState(details);
  console.log(invoice);
  console.log("to jest po sejwie " + invoice.companyName);

  const saveInvoiceInState = (values) => {
    const savedInvoice = {
      ...invoice,
      companyName: values.companyName,
      city: values.city,
      street: values.street,
      postcode: values.postcode,
      nip: values.nip,
      phone: values.phone,
      email: values.email,
      bankAccount: values.bankAccount,
    };
    setInvoice(savedInvoice);
  };
  return (
    <>
      <Formik
        initialValues={{
          companyName: invoice.companyName,
          city: invoice.city,
          street: invoice.street,
          posteCode: invoice.posteCode,
          nip: invoice.nip,
          tel: invoice.tel,
          email: invoice.email,
          bankAccount: invoice.bankAccount,
        }}
        onSubmit={(values) => {
          saveInvoiceInState(values);
        }}
      >
        {({ submitForm }) => (
          <AxioxFormTest submitForm={submitForm}/>
        )}
      </Formik>
    </>
  );
}
export default AxiosTest;
