import React from "react";
import {useParams} from "react-router-dom";
import InvoiceForm from "../components/InvoiceForm";

function AddInvoice() {
  const { id } = useParams()
  console.log(id)
  
  return (
    <InvoiceForm/>
  );
}
export default AddInvoice;
