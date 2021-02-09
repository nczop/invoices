import { useState, useEffect } from "react";
import httpService from "../HttpService";
import { useParams } from "react-router-dom";

function useInvoiceDetails() {
  const { id } = useParams();

  const [invoice, setInvoice] = useState(null);
  useEffect(() => {
    loadInvoice();
  }, []);

  const loadInvoice = () => {
    httpService.get(`invoices/${id}`).then((res) => {
      setTimeout(() => {
        setInvoice(res.data);
      }, 500);
    });
  };
  return [invoice, setInvoice];
}
export default useInvoiceDetails;
