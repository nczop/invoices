import React from "react";
import {useParams} from "react-router-dom";
import InvoiceForm from "../components/InvoiceForm";

function EditInvoice() {
  // const { id } = useParams()
  // console.log(id)
  
  return (
    <InvoiceForm/>
  );
}
export default EditInvoice;
