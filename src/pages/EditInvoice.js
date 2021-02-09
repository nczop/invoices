import React from "react";
import InvoiceForm from "../components/InvoiceForm";
import useInvoiceDetails from "../hooks/useInvoiceDetails";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Container } from "@material-ui/core";
import httpService from "../HttpService";
import { useState } from "react";

function EditInvoice() {
  const [invoice, setInvoice] = useInvoiceDetails();
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = (values) => {
    httpService.put("invoices/" + values.id, values);

    setDisabled(true);
  };

  if (invoice) {
    return (
      <InvoiceForm
        isReadOnly
        invoice={invoice}
        setInvoice={setInvoice}
        disabled={disabled}
        handleSubmit={handleSubmit}
      />
    );
  }
  return (
    <Container>
      <LinearProgress />
    </Container>
  );
}
export default EditInvoice;
