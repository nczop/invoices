import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Information from "../formComponents/Information";
import RecipientSenderDetails from "../formComponents/RecipientSenderDetails";
import Item from "../formComponents/Item";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { Formik, Form, FieldArray } from "formik";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import InvoiceSchema from '../InvoiceValidation'
import PropTypes from "prop-types";

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
  const { invoice, setInvoice, handleSubmit, disabled } = props;
  const classes = useStyles();

  const handleButtonAddItem = (arrayHelpers, values) => {
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
      id: values.items.length + 1,
    });
  };

  return (
    <Formik
      initialValues={{
        id: invoice.id,
        created: invoice.created || new Date (),
        validUntil: invoice.validUntil || new Date (),
        recipientData: invoice.recipientData,
        senderData: invoice.senderData,
        items: invoice.items,
      }}
      validationSchema={InvoiceSchema}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
    >
      {({values, submitForm}) => (
        <Container>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Form>
              <Information
                isReadOnly
                submitForm={submitForm}
                disabled={disabled}
              />
              <div className={classes.formContainer}>
                <Box m={2}>
                  <RecipientSenderDetails
                    header="Recipient"
                    details="recipientData"
                    disabled={disabled}
                  />
                </Box>
                <Box m={2}>
                  <RecipientSenderDetails
                    header="Sender"
                    details="senderData"
                    disabled={disabled}
                  />
                </Box>
              </div>
              <FieldArray
                name="items"
                render={(arrayHelpers) => {
                  const removeItem = (itemId) => {
                    const newItemsList = values.items.filter(
                      (item) => item.id !== itemId
                    );
                    values.items = newItemsList;
                    setInvoice({ ...invoice });
                  };
                  return (
                    <>
                      {values.items.map((item, index) => (
                        <Item
                          index={index}
                          id={item.id}
                          removeItem={removeItem}
                          disabled={disabled}
                          isRemovable={values.items.length > 1}
                        />
                      ))}
                      <Box m={2}>
                        <Button
                          className={classes.saveButton}
                          variant="contained"
                          onClick={() => handleButtonAddItem (arrayHelpers, values)} 
                          disabled={disabled}
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
InvoiceForm.propTypes = {
  invoice: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    created: PropTypes.instanceOf(Date),
    validUntil: PropTypes.instanceOf(Date),
    recipientData: PropTypes.shape({
      companyName: PropTypes.string,
      city: PropTypes.string,
      street: PropTypes.string,
      postcode: PropTypes.string,
      nip: PropTypes.string,
      phone: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      email: PropTypes.string,
      bankAccount: PropTypes.string,
    }),
    senderData: PropTypes.shape({
      companyName: PropTypes.string,
      city: PropTypes.string,
      street: PropTypes.string,
      postcode: PropTypes.string,
      nip: PropTypes.string,
      phone: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      email: PropTypes.string,
      bankAccount: PropTypes.string,
    }),
    items: PropTypes.array,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  setInvoice: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

InvoiceForm.defaultProps = {
  disabled: false
}

export default InvoiceForm;
