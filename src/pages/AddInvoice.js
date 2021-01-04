import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Information from "../components/Information";
import Form from "../components/Form";
import Item from "../components/Item";
import Box from "@material-ui/core/Box";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  formContainer: {
    display: "flex",
    marginBottom: "50px",
    marginTop: "50px"
  },
  saveButton: {
    marginTop: "20px"
  }
}));

function AddInvoice() {
  const classes = useStyles();
  return (
    <Container>
      <Information />
      <div className={classes.formContainer}>
        <Box m={2}>
          <Form header="Recipient" />
        </Box>
        <Box m={2}>
          <Form header="Sender" />
        </Box>
      </div>
      <Item />
      <Box m={2}>
      <Button className={classes.saveButton} variant="contained">Add Item</Button>
      </Box>      
    </Container>
  );
}
export default AddInvoice;
