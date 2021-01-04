import React from 'react';
import {
  BrowserRouter as Router, Link, Route, Switch,
} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import InvoicesList from './pages/InvoicesList';
import AddInvoice from './pages/AddInvoice';

function App() {
  return (
    <>
      <Router>
        <Link to="/invoices" />
        <Link to="/addinvoice" />
        <Link to="/" />
        <Header />
        <Switch>
          <Route path="/invoices">
            <InvoicesList />
          </Route>          
          <Route path="/addinvoice">
            <AddInvoice />
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
