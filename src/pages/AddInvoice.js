import React from "react";
import InvoiceForm from "../components/InvoiceForm";
import { emptyInvoice } from "../emptyInvoice";
import { useState } from "react";
import httpService from "../HttpService";
import { useHistory } from "react-router-dom";

function AddInvoice() {
  const [invoice, setInvoice] = useState(emptyInvoice);
  const [disabled, setDisabled] = useState(false);
  const history = useHistory();

  const handleSubmit = (values) => {
    httpService
      .post("invoices", values)
    setDisabled(true);
    history.push("/invoice/" + values.id);
  };

  return (
    <InvoiceForm
      invoice={invoice}
      setInvoice={setInvoice}
      handleSubmit={handleSubmit}
      disabled={disabled}
    />
  );
}
export default AddInvoice;
