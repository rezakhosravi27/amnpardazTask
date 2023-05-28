import ResponsiveDrawer from "../components/responsiveDrawer/ResponsiveDrawer";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "../utils/test-utils";
import "@testing-library/jest-dom";

describe("responsive drawer", () => {
  test("rendered correctly", () => {
    render(
      <MemoryRouter>
        <ResponsiveDrawer>
          <div>hello</div>
        </ResponsiveDrawer>
      </MemoryRouter>
    );

    const headingElement = screen.getByText(/Amnpardaz/i);
    expect(headingElement).toBeInTheDocument();

    const dashboardElement = screen.getAllByText(
      "Dashboard"
    )[0] as HTMLSpanElement;
    expect(dashboardElement).toBeInTheDocument();

    const createChartElement = screen.getAllByText(
      /create chart/i
    )[0] as HTMLSpanElement;
    expect(createChartElement).toBeInTheDocument();

    const exitElement = screen.getAllByText(/exit/i)[0] as HTMLSpanElement;
    expect(exitElement).toBeInTheDocument();
  });
});
