import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Header from "./Header";

describe("Header", () => {
    beforeEach ( () => {
        render(
            <MemoryRouter initialEntries = {["/", {pathname: "/invoices"}]}>
              <Header />
            </MemoryRouter>
        );
    })
  test("render image", () => {    
    expect(screen.getByTestId("kogucik")).toBeInTheDocument();
  });

  test("contain invoices label", () => {
    expect(screen.getByTestId("invoices")).toBeInTheDocument();
  })

  test("contain Add new invoice label", () => {
    expect(screen.getByText("Add new invoice")).toBeInTheDocument();
  })
  test("check path name", () => {
    const invoiceButton = screen.getByTestId("invoices");
    fireEvent.click(invoiceButton)
    expect(document.location.pathname).toEqual("/invoices")
  })
  test("check path name2", async() => {
    expect(screen.getByTestId("invoices").closest('a')).toHaveAttribute('href', '/invoices')
  })
});
