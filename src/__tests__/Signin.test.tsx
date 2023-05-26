import { render } from "../utils/test-utils";
import Signin from "../pages/auth/signin/Signin";
import { BrowserRouter } from "react-router-dom";

test("sign in rendered correctly", () => {
  render(
    <BrowserRouter>
      <Signin />
    </BrowserRouter>
  );
});
