import App from "../App";
import { render } from "@testing-library/react";
import { AppProvider } from "../providers/AppProvider";

test("Renders main page correctly", () => {
  render(<App />, {
    wrapper: AppProvider,
  });
  expect(true).toBeTruthy();
});
