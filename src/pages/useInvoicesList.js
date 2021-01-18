// import React, { Component } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function useInvoicesList() {
  const [invoices, setInvoices] = useState([]);
   useEffect(() => {
    loadInvoices();
  }, []);

  const loadInvoices = () => {
    axios.get(`http://localhost:3001/api/invoices`).then((res) => {
      setInvoices(res.data);
    });
  };

  return (
    invoices
  );
}
export default useInvoicesList;
