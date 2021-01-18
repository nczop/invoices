import React, { Component } from "react";
import useInvoicesList from "./useInvoicesList"

function AxiosTest() {
  const invoices = useInvoicesList();

  const invoiceId = invoices.map((invoice) => invoice.id)

  return (
    <>
    {invoiceId}
      
    </>
  );
}
export default AxiosTest;
