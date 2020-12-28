import React from 'react';
import {
  BrowserRouter as Router, Link, Route, Switch,
} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import InvoicesList from './components/InvoicesList';
import AddNewInvoice from './pages/AddNewInvoice';

function App() {
  return (
    <>
      <Router>
        <Link to="/invoices" />
        <Link to="/addinvoice" />
        <Header />
        <Switch>
          <Route path="/invoices">
            <InvoicesList />
          </Route>
          <Route path="/addinvoice">
            <AddNewInvoice />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
