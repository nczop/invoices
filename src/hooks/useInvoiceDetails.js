import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function useInvoiceDetails() {
  const { id } = useParams();

  const [invoice, setInvoice] = useState(null);
  useEffect(() => {
    loadInvoice();
  }, []);

  const loadInvoice = () => {
    axios.get(`http://localhost:3001/api/invoices/${id}`).then((res) => {
      setTimeout(() => {
        setInvoice(res.data);
      }, 500);
    });
  };
  return [invoice, setInvoice];
}
export default useInvoiceDetails;
