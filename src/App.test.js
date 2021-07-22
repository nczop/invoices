import { render, screen } from '@testing-library/react';
import App from './App';

test('renders invoices link', () => {
  render(<App />);
  const linkElement = screen.getByText(/invoices/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders addinvoice link', () => {
  render(<App />);
  const linkElement = screen.getByText(/add new invoice/i);
  expect(linkElement).toBeInTheDocument();
});