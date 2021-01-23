import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Information from "../formComponents/Information";
import RecipientSenderDetails from "../formComponents/RecipientSenderDetails";
import Item from "../formComponents/Item";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { Formik, Field, Form } from "formik";
import { useState, useEffect } from "react";
import { emptyInvoice } from "../emptyInvoice";

const useStyles = makeStyles(() => ({
  formContainer: {
    display: "flex",
    marginBottom: "50px",
    marginTop: "50px",
  },
  saveButton: {
    marginTop: "20px",
  },
}));

function InvoiceForm(props) {
  const classes = useStyles();
  const [invoice, setInvoice] = useState(emptyInvoice);
  console.log(invoice);
  console.log("to jest przed sejwem " + JSON.stringify(invoice));

  // const saveInvoiceInState = (values) => {
  //   const savedInvoice = {
  //     ...invoice,
  //     no: values.no,
  //     validUntil: values.validUntil,
  //     created: values.created,
  //     recipientData: {
  //       companyName: values.recipentName,
  //       city: values.recipentCity,
  //       street: values.recipentStreet,
  //       postcode: values.recipentPostcode,
  //       nip: values.recipentNip,
  //       phone: values.recipentPhone,
  //       email: values.recipentEmail,
  //       bankAccount: values.recipentBankAccount,
  //     },
  //     senderData: {
  //       companyName: values.senderName,
  //       city: values.senderCity,
  //       street: values.senderStreet,
  //       postcode: values.senderPostcode,
  //       nip: values.senderNip,
  //       phone: values.senderPhone,
  //       email: values.senderEmail,
  //       bankAccount: values.senderBankAccount,
  //     },
  //     items: values.items,
  //   };

  //   setInvoice(savedInvoice);
  // };

  return (
    <Formik
      initialValues={{
        no: invoice.no,
        created: invoice.created,
        validUntil: invoice.validUntil,
        recipientCompanyName: "invoice.recipientData.companyName",
        recipientCity: invoice.recipientData.city,
        recipientStreet: invoice.recipientData.street,
        recipientPosteCode: invoice.recipientData.posteCode,
        recipientNip: invoice.recipientData.nip,
        recipientTel: invoice.recipientData.tel,
        recipientEmail: invoice.recipientData.email,
        recipientBankAccount: invoice.recipientData.bankAccount,
        senderDataCompanyName: invoice.senderData.companyName,
        senderDataCity: invoice.senderData.city,
        senderDataStreet: invoice.senderData.street,
        senderDataPosteCode: invoice.senderData.posteCode,
        senderDataNip: invoice.senderData.nip,
        senderDataTel: invoice.senderData.tel,
        senderDataEmail: invoice.senderData.email,
        senderDataBankAccount: invoice.senderData.bankAccount,
        items: invoice.items,
      }}
      onSubmit={(values) => {
        // saveInvoiceInState(values);
        console.log("to jest po", values);
      }}
    >
      {({ submitForm }) => (
        <Container>
          <Form>
            <Information
              isReadOnly
              invoice={props.invoice}
              submitForm={submitForm}
            />
            <div className={classes.formContainer}>
              <Box m={2}>
                <RecipientSenderDetails header="Recipient" />
              </Box>
              <Box m={2}>
                <RecipientSenderDetails header="Sender" />
              </Box>
            </div>
            <Item />
            <Box m={2}>
              <Button className={classes.saveButton} variant="contained">
                Add Item
              </Button>
            </Box>
          </Form>
        </Container>
      )}
    </Formik>
  );
}
export default InvoiceForm;
