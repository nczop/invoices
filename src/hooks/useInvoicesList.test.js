import { renderHook } from "@testing-library/react-hooks";
import useInvoicesList from "./useInvoicesList";

jest.mock("../HttpService", () => {
  return {
    get: () => Promise.resolve({ data: [35, 7, 2] }),
  };
});
test("should increment counter", async () => {
  const { result, waitForNextUpdate } = renderHook(() => useInvoicesList());
  await waitForNextUpdate();
  expect(result.current[0]).toEqual([35, 7, 2]);
});
test("setInvoices", () => {
    const { result } = renderHook(() => useInvoicesList());
    result.current[1]([2, 5, 7])
    expect(result.current[0]).toEqual([2, 5, 7]);    
});
test("check array lenght", async () => {
  const { result, waitForNextUpdate } = renderHook(() => useInvoicesList());
  await waitForNextUpdate();
  expect(result.current[0]).toHaveLength(3)
});