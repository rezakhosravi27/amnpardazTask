/* eslint-disable react-refresh/only-export-components */
import { Grid, Paper, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../services/redux/hooks";
import { deleteChartHandler } from "../../services/redux/features/charts";
import { Responsive, WidthProvider } from "react-grid-layout";
import { LayoutTypes } from "./DND.types";
const ResponsiveGridLayout = WidthProvider(Responsive);
import { BarChart } from "../nivoCharts/barChart/BarChart";
import { LineChart } from "../nivoCharts/lineChart/LineChart";
import { PieChart } from "../nivoCharts/pieChart/PieChart";
import Typography from "@mui/material/Typography";

const DND = (props: {
  isDraggable?: boolean;
  isResizable?: boolean;
  items?: number;
  rowHeight?: number;
  onLayoutChange?: (layout: LayoutTypes) => void;
  cols?: number;
}) => {
  const dispatch = useAppDispatch();
  const chartData = useAppSelector((state) => state.charts.chartData);

  const deleteHandler = (id: string) => {
    dispatch(deleteChartHandler(id));
  };

  const generateDOM = () => {
    // Generate items with properties from the layout, rather than pass the layout directly
    const layout = generateLayout();
    return layout.map(
      (l: { x: number; y: number; w: number; h: number; i: string }) => {
        return (
          <div key={l.i} data-grid={l}>
            {chartData.map((chart) => {
              return (
                chart.id == l.i && (
                  <Paper sx={{ height: "100%", p: 1 }}>
                    <div style={{ height: "80%", width: "100%" }}>
                      <Typography variant="h6">{chart.title}</Typography>
                      {chart.type == "bar" && <BarChart chartData={chart} />}
                      {chart.type == "line" && <LineChart chartData={chart} />}
                      {chart.type == "pie" && <PieChart chartData={chart} />}
                    </div>
                    <Stack
                      spacing={2}
                      mt={2}
                      alignItems="center"
                      direction="row"
                      sx={{ height: "20%" }}
                    >
                      <DeleteIcon
                        fontSize="small"
                        onClick={() => deleteHandler(chart.id)}
                        color="error"
                        style={{ cursor: "pointer" }}
                      />
                      <Link
                        to={`/dashboard/editChart/${chart.id}`}
                        style={{ color: "inherit" }}
                      >
                        <EditIcon color="info" />
                      </Link>
                    </Stack>
                  </Paper>
                )
              );
            })}
          </div>
        );
      }
    );
  };

  const generateLayout = () => {
    const p = chartData || []; //props;
    return p.map((item, i) => {
      return {
        x: i + (1 % 1) == 0 ? 0 : 6,
        y: 0,
        w: 6,
        h: 1.5,
        i: item.id,
      };
    });
  };

  const onLayoutChange = (layout: LayoutTypes) => {
    console.log(layout);
    props.onLayoutChange?.(layout);
  };

  return (
    <Grid spacing={3} container sx={{ position: "relative" }}>
      <ResponsiveGridLayout
        onLayoutChange={onLayoutChange}
        className="layout"
        autoSize
        layouts={{ lg: generateLayout() }}
        rowHeight={300}
        breakpoints={{ lg: 1356, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 12, sm: 6, xs: 1, xxs: 1 }}
        isDraggable={true}
        isResizable={true}
      >
        {generateDOM()}
      </ResponsiveGridLayout>
    </Grid>
  );
};

export default DND;
