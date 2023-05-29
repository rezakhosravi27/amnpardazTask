import { GeneralOptions } from "../pages/dashboard/createChart/GeneralOptions";
import { render, screen } from "../utils/test-utils";
import "@testing-library/jest-dom";
import { chartStateObject } from "../services/redux/features/charts.types";
import user from "@testing-library/user-event";

describe("responsive drawer", () => {
  test("rendered correctly", async () => {
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
    user.setup();
    const mock = jest.fn();
    render(
      <GeneralOptions errors="error" findChart={findChart} register={mock} />
    );

    const titleElement = screen.getByLabelText("Title");
    expect(titleElement).toBeInTheDocument();

    const typeElement = screen.getByTestId("Type");
    expect(typeElement).toBeInTheDocument();

    const axisElement = screen.getByTestId("Axis");
    expect(axisElement).toBeInTheDocument();

    const seriesElement = screen.getByTestId("Series");
    expect(seriesElement).toBeInTheDocument();

    const barTextElement = screen.getByText(/bar/i);
    await user.click(barTextElement);

    const directionElement = await screen.findByTestId("Series");
    expect(directionElement).toBeInTheDocument();
  });
});
