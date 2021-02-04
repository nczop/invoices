import InvoiceForm from "../components/InvoiceForm";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Container } from "@material-ui/core";
import useInvoiceDetails from "../hooks/useInvoiceDetails";

function InvoiceDetails() {
  const [invoice] = useInvoiceDetails();
  if (invoice) {
    return <InvoiceForm isReadOnly invoice={invoice} disabled={true} />;
  }
  return (
    <Container>
      <LinearProgress />
    </Container>
  );
}
export default InvoiceDetails;
