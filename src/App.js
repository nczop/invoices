import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import InvoicesList from "./pages/InvoicesList";
import AddInvoice from "./pages/AddInvoice";
import EditInvoice from "./pages/EditInvoice";
import InvoiceDetails from "./pages/InvoiceDetails";

function App() {
  return (
    <>
      <Router >
        <Header />
        <Switch>
          <Route path="/invoices">
            <InvoicesList />
          </Route>
          <Route path="/addinvoice">
            <AddInvoice />
          </Route>
          <Route path="/editInvoice/:id">
            <EditInvoice />
          </Route>
          <Route path="/invoice/:id">
            <InvoiceDetails />
          </Route>          
          <Route path="/">
            <InvoicesList />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
