import { render } from "../utils/test-utils";
import "@testing-library/jest-dom";
import { ProtectedRoutes } from "../pages/protectedRoutes/ProtectedRoutes";
import { BrowserRouter } from "react-router-dom";

describe("protectedRoutes", () => {
  test("rendered correctly", () => {
    render(
      <BrowserRouter>
        <ProtectedRoutes children={<div>hello</div>} />
      </BrowserRouter>
    );
  });
});
