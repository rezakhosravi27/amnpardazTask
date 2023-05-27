import { render, screen } from "../utils/test-utils";
import { BrowserRouter} from "react-router-dom";
import "@testing-library/jest-dom";
import Signup from "../pages/auth/signup/Signup";

describe("Signup", () => {
  test("rendered correctly", () => {
    render(
      <BrowserRouter>
        <Signup />
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
      name: "Sign Up",
    });
    expect(buttonElement).toBeInTheDocument();
  });
});
