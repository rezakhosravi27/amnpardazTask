import { CreateForm } from "../pages/dashboard/createChart/CreateForm";
import { render } from "../utils/test-utils";
import "@testing-library/jest-dom";

describe("responsive drawer", () => {
  test("rendered correctly", () => {
    render(<CreateForm />);
  });
});
