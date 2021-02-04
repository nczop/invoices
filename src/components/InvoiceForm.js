import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Information from "../formComponents/Information";
import RecipientSenderDetails from "../formComponents/RecipientSenderDetails";
import Item from "../formComponents/Item";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { Formik, Field, Form, FieldArray } from "formik";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import InvoiceSchema from '../InvoiceValidation'

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
  const { invoice, setInvoice, handleSubmit } = props;
  const classes = useStyles();
  
  return (
    <Formik
      initialValues={{
        id: invoice.id,
        created: invoice.created,
        validUntil: invoice.validUntil,
        recipientData: invoice.recipientData,
        senderData: invoice.senderData,
        items: invoice.items,
      }}
      validationSchema={InvoiceSchema}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
    >
      {(values) => (
        <Container>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Form>
              <Information
                isReadOnly
                submitForm={values.submitForm}
                disabled={values.disabled}
              />
              <div className={classes.formContainer}>
                <Box m={2}>
                  <RecipientSenderDetails
                    header="Recipient"
                    details="recipientData"
                    disabled={props.disabled}
                  />
                </Box>
                <Box m={2}>
                  <RecipientSenderDetails
                    header="Sender"
                    details="senderData"
                    disabled={props.disabled}
                  />
                </Box>
              </div>
              <FieldArray
                name="items"
                render={(arrayHelpers) => {
                  const handleButtonAddItem = () => {
                    const newItem = {
                      id: "",
                      name: "",
                      amount: 1,
                      unit: "",
                      tax: 0,
                      price: 0,
                    };
                    arrayHelpers.push({
                      ...newItem,
                      id: values.values.items.length + 1,
                    });
                  };
                  const removeItem = (itemId) => {
                    const newItemsList = values.values.items.filter(
                      (item) => item.id !== itemId
                    );
                    values.values.items = newItemsList;
                    setInvoice({ ...invoice });
                  };
                  return (
                    <>
                      {values.values.items.map((item, index) => (
                        <Item
                          index={index}
                          id={item.id}
                          removeItem={removeItem}
                          disabled={props.disabled}
                          isRemovable={values.values.items.length > 1}
                        />
                      ))}
                      <Box m={2}>
                        <Button
                          className={classes.saveButton}
                          variant="contained"
                          onClick={handleButtonAddItem} 
                          disabled={props.disabled}
                        >
                          Add Item
                        </Button>
                      </Box>
                    </>
                  );
                }}
              />
            </Form>
          </MuiPickersUtilsProvider>
        </Container>
      )}
    </Formik>
  );
}
export default InvoiceForm;
