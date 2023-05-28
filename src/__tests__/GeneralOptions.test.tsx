import { GeneralOptions } from "../pages/dashboard/createChart/GeneralOptions";
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
    render(
      <GeneralOptions errors="error" findChart={findChart} register={mock} />
    );

    const titleElement = screen.getByLabelText("Title");
    expect(titleElement).toBeInTheDocument();

    const typeElement = screen.getByTestId("Type");
    expect(typeElement).toBeInTheDocument();
  });
});
