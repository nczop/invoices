import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InvoiceForm from "../components/InvoiceForm";
import axios from "axios";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Container } from "@material-ui/core";

function InvoiceDetails() {
  const { id } = useParams();

  const [invoice, setInvoice] = useState(null);
  useEffect(() => {
    getInvoiceDetails();
  }, []);

  const getInvoiceDetails = () => {
    axios.get(`http://localhost:3001/api/invoices/${id}`).then((res) => {
      setTimeout(() => {
        setInvoice(res.data);
      }, 1000);
    });
  };
  if (invoice) {
    return <InvoiceForm isReadOnly invoice={invoice} />;
  }
  return (
    <Container>
      <LinearProgress />
    </Container>
  );
}
export default InvoiceDetails;
