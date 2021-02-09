import { useState, useEffect } from "react";
import httpService from "../HttpService";

function useInvoicesList() {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    loadInvoices();
  }, []);

  const loadInvoices = () => {
    httpService.get(`invoices`)
    .then((res) => {
      setInvoices(res.data);
    })  
  };

  return [invoices, setInvoices];
}
export default useInvoicesList;
