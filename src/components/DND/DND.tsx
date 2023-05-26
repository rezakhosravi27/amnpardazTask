import { Grid, Paper, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import { Charts } from "../charts/Charts";
import { useAppSelector, useAppDispatch } from "../../services/redux/hooks";
import { deleteChartHandler } from "../../services/redux/features/charts";
import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveGridLayout = WidthProvider(Responsive);

export const DND = (props: any) => {
  const dispatch = useAppDispatch();
  const chartData = useAppSelector((state) => state.charts.chartData);

  const deleteHandler = (id: any) => {
    dispatch(deleteChartHandler(id));
  };

  const generateDOM = () => {
    // Generate items with properties from the layout, rather than pass the layout directly
    const layout = generateLayout();
    return layout.map((l) => {
      return (
        <div key={l.i} data-grid={l}>
          {chartData.map((chart) => {
            return (
              chart.id == l.i && (
                <Paper sx={{ height: "100%", p: 1 }}>
                  <div style={{ height: "90%", width: "100%" }}>
                    <Charts data={chart} />
                  </div>
                  <Stack
                    spacing={2}
                    alignItems="center"
                    direction="row"
                    sx={{ height: "10%" }}
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
    });
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

  const onLayoutChange = (layout: any) => {
    props.onLayoutChange(layout);
  };

  return (
    <Grid spacing={3} container sx={{ position: "relative" }}>
      <ResponsiveGridLayout
        onLayoutChange={onLayoutChange}
        className="layout"
        autoSize
        rowHeight={281}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 12, sm: 2, xs: 1, xxs: 1 }}
        isDraggable={true}
        isResizable={true}
      >
        {generateDOM()}
      </ResponsiveGridLayout>
    </Grid>
  );
};

DND.defaultProps = {
  isDraggable: true,
  isResizable: true,
  items: 20,
  rowHeight: 30,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onLayoutChange: function () {},
  cols: 12,
};
