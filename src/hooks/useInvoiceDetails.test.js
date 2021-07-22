import useInvoiceDetails from "./useInvoiceDetails";
import { renderHook } from "@testing-library/react-hooks";
import { MemoryRouter, useParams, ReactRouter, Route } from "react-router";
import { render, screen } from "@testing-library/react";
import RandomComponent from "../formComponents/RandomComponent";

describe("useInvoiceDetails", () => {
    beforeEach ( () => {
        render(
            <MemoryRouter initialEntries = {['invoice/01']}>
                <Route component={RandomComponent} path='invoice/:id'>
                </Route>
            </MemoryRouter>
        );
    })
    test("check array lenght", async () => {
        const { id } =  renderHook(() => useParams());
        const { waitForNextUpdate } = renderHook(() => useInvoiceDetails());
        await waitForNextUpdate({timeout:5000});
        console.log(id)
        expect(id).toEqual("01");
    });
});