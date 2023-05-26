import { render, screen } from "../utils/test-utils";
import Signin from "../pages/auth/signin/Signin";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("signin", () => {
  test("rendered correctly", () => {
    render(
      <BrowserRouter>
        <Signin />
      </BrowserRouter>
    );

    const UsernameElement = screen.getByRole("textbox", {
      name: "username",
    });
    expect(UsernameElement).toBeInTheDocument();
    expect(UsernameElement).toHaveValue("");

    const passwordElement = screen.getByTestId("password");
    expect(passwordElement).toBeInTheDocument();
    expect(passwordElement).toHaveValue("");

    const buttonElement = screen.getByRole("button", {
      name: "Sign In",
    });
    expect(buttonElement).toBeInTheDocument();
  });
});
