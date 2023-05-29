import { ResponsiveBar } from "@nivo/bar";
import { LineChartProps } from "./LineChart.types";
import { generateData } from "./generateData";

// const data = [
//   {
//     country: "AD",
//     "hot dog": 187,
//     "hot dogColor": "hsl(349, 70%, 50%)",
//     burger: 62,
//     burgerColor: "hsl(289, 70%, 50%)",
//     sandwich: 68,
//     sandwichColor: "hsl(23, 70%, 50%)",
//     kebab: 167,
//     kebabColor: "hsl(257, 70%, 50%)",
//     fries: 90,
//     friesColor: "hsl(35, 70%, 50%)",
//     donut: 40,
//     donutColor: "hsl(109, 70%, 50%)",
//   },
//   {
//     country: "AE",
//     "hot dog": 37,
//     "hot dogColor": "hsl(209, 70%, 50%)",
//     burger: 102,
//     burgerColor: "hsl(243, 70%, 50%)",
//     sandwich: 105,
//     sandwichColor: "hsl(110, 70%, 50%)",
//     kebab: 158,
//     kebabColor: "hsl(47, 70%, 50%)",
//     fries: 131,
//     friesColor: "hsl(334, 70%, 50%)",
//     donut: 49,
//     donutColor: "hsl(55, 70%, 50%)",
//   },
//   {
//     country: "AF",
//     "hot dog": 19,
//     "hot dogColor": "hsl(26, 70%, 50%)",
//     burger: 146,
//     burgerColor: "hsl(274, 70%, 50%)",
//     sandwich: 1,
//     sandwichColor: "hsl(276, 70%, 50%)",
//     kebab: 166,
//     kebabColor: "hsl(354, 70%, 50%)",
//     fries: 59,
//     friesColor: "hsl(88, 70%, 50%)",
//     donut: 188,
//     donutColor: "hsl(263, 70%, 50%)",
//   },
//   {
//     country: "AG",
//     "hot dog": 124,
//     "hot dogColor": "hsl(50, 70%, 50%)",
//     burger: 172,
//     burgerColor: "hsl(86, 70%, 50%)",
//     sandwich: 7,
//     sandwichColor: "hsl(330, 70%, 50%)",
//     kebab: 173,
//     kebabColor: "hsl(342, 70%, 50%)",
//     fries: 134,
//     friesColor: "hsl(225, 70%, 50%)",
//     donut: 45,
//     donutColor: "hsl(79, 70%, 50%)",
//   },
//   {
//     country: "AI",
//     "hot dog": 120,
//     "hot dogColor": "hsl(59, 70%, 50%)",
//     burger: 153,
//     burgerColor: "hsl(222, 70%, 50%)",
//     sandwich: 113,
//     sandwichColor: "hsl(78, 70%, 50%)",
//     kebab: 100,
//     kebabColor: "hsl(286, 70%, 50%)",
//     fries: 76,
//     friesColor: "hsl(13, 70%, 50%)",
//     donut: 196,
//     donutColor: "hsl(293, 70%, 50%)",
//   },
//   {
//     country: "AL",
//     "hot dog": 124,
//     "hot dogColor": "hsl(33, 70%, 50%)",
//     burger: 168,
//     burgerColor: "hsl(327, 70%, 50%)",
//     sandwich: 13,
//     sandwichColor: "hsl(243, 70%, 50%)",
//     kebab: 90,
//     kebabColor: "hsl(292, 70%, 50%)",
//     fries: 15,
//     friesColor: "hsl(171, 70%, 50%)",
//     donut: 75,
//     donutColor: "hsl(252, 70%, 50%)",
//   },
//   {
//     country: "AM",
//     "hot dog": 191,
//     "hot dogColor": "hsl(214, 70%, 50%)",
//     burger: 29,
//     burgerColor: "hsl(46, 70%, 50%)",
//     sandwich: 67,
//     sandwichColor: "hsl(94, 70%, 50%)",
//     kebab: 148,
//     kebabColor: "hsl(300, 70%, 50%)",
//     fries: 10,
//     friesColor: "hsl(157, 70%, 50%)",
//     donut: 188,
//     donutColor: "hsl(88, 70%, 50%)",
//   },
// ];

export const LineChart = ({ chartData }: LineChartProps) => {
  const { data, keys, indexBy } = generateData(chartData);
  console.log(data, keys, indexBy);
  return (
    <ResponsiveBar
      data={data}
      theme={{
        text: {
          fontSize: 11,
          fill: "#fff",
          outlineWidth: 0,
          outlineColor: "transparent",
        },
        axis: {
          domain: {
            line: {
              stroke: "#777777",
              strokeWidth: 1,
            },
          },
          legend: {
            text: {
              fontSize: 12,
              fill: "#fff",
              outlineWidth: 0,
              outlineColor: "transparent",
            },
          },
          ticks: {
            line: {
              stroke: "#fff",
              strokeWidth: 1,
            },
            text: {
              fontSize: 11,
              fill: "#fff",
              outlineWidth: 0,
              outlineColor: "transparent",
            },
          },
        },
        grid: {
          line: {
            stroke: "#333",
            strokeWidth: 1,
          },
        },
        legends: {
          title: {
            text: {
              fontSize: 11,
              fill: "#333333",
              outlineWidth: 0,
              outlineColor: "transparent",
            },
          },
          text: {
            fontSize: 11,
            fill: "#333333",
            outlineWidth: 0,
            outlineColor: "transparent",
          },
          ticks: {
            line: {},
            text: {
              fontSize: 10,
              fill: "#333333",
              outlineWidth: 0,
              outlineColor: "transparent",
            },
          },
        },
        annotations: {
          text: {
            fontSize: 13,
            fill: "#333333",
            outlineWidth: 2,
            outlineColor: "#ffffff",
            outlineOpacity: 1,
          },
          link: {
            stroke: "#000000",
            strokeWidth: 1,
            outlineWidth: 2,
            outlineColor: "#ffffff",
            outlineOpacity: 1,
          },
          outline: {
            stroke: "#000000",
            strokeWidth: 2,
            outlineWidth: 2,
            outlineColor: "#ffffff",
            outlineOpacity: 1,
          },
          symbol: {
            fill: "#000000",
            outlineWidth: 2,
            outlineColor: "#ffffff",
            outlineOpacity: 1,
          },
        },
        tooltip: {
          container: {
            background: "#333",
            fontSize: 12,
          },
          basic: {},
          chip: {},
          table: {},
          tableCell: {},
          tableCellValue: {},
        },
      }}
      keys={keys}
      indexBy={indexBy}
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={[chartData.color]}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#4d726f",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: chartData.axis,
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: chartData.series,
        legendPosition: "middle",
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["brighter", 5]],
      }}
      legends={[
        {
          itemTextColor: "#fff",
          dataFrom: "indexes",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      ariaLabel="bar chart"
      barAriaLabel={(e) =>
        e.id + ": " + e.formattedValue + " in country: " + e.indexValue
      }
    />
  );
};
