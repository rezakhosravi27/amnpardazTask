import { OtherOptions } from "../pages/dashboard/createChart/OtherOptions";
import { render, screen } from "../utils/test-utils";
import "@testing-library/jest-dom";
import { chartStateObject } from "../services/redux/features/charts.types";

describe("responsive drawer", () => {
  test("rendered correctly", () => {
    const findChart: chartStateObject = {
      id: "kdfjdkjf",
      axis: "dfkjk",
      chartCategory: ["label", "date"],
      chartSeries: [1, 2, 3, 4, 5],
      color: "red",
      direction: "right",
      legend: "show",
      legendPosition: "up",
      series: "date",
      title: "example",
      type: "bar",
    };

    const mock = jest.fn();
    render(<OtherOptions findChart={findChart} register={mock} />);

    const colorElement = screen.getByTestId("Color");
    expect(colorElement).toBeInTheDocument();
    expect(colorElement).toHaveValue("#2E93fA");

    const legendElement = screen.getByTestId("Legend");
    expect(legendElement).toBeInTheDocument();
    expect(legendElement).toHaveValue("show");

    const legendPositionElement = screen.getByTestId("Legend Position");
    expect(legendPositionElement).toBeInTheDocument();
    expect(legendPositionElement).toHaveValue("up");
  });
});
