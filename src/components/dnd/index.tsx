import React, { useState, useRef } from "react";
import { Grid, Paper, IconButton, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import { Charts } from "../charts/Charts";
import _ from "lodash";
import { useAppSelector, useAppDispatch } from "../../services/redux/hooks";
import { deleteChartHandler } from "../../services/redux/features/charts";
import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveGridLayout = WidthProvider(Responsive);

export const DND = (props: any) => {
  const dispatch = useAppDispatch();
  const chartData = useAppSelector((state) => state.charts.chartData);
  const [data, setData] = useState({
    EmpData: [
      {
        empId: 11,
        data: [
          {
            firstName: "Steve",
            lastName: "Smith",
          },
          {
            firstName: "Michel",
            lastName: "Muner",
          },
        ],
      },
      {
        empId: 12,
        lay1: { i: "b" },
        data: [
          {
            firstName: "Charles",
            lastName: "Johnsen",
          },
          {
            firstName: "Glen",
            lastName: "Tyson",
          },
        ],
      },
      {
        empId: 13,
        lay1: { i: "c" },
        data: [
          {
            firstName: "Steve",
            lastName: "Smith",
          },
          {
            firstName: "Michel",
            lastName: "Muner",
          },
        ],
      },
      {
        empId: 14,
        lay1: { i: "d" },
        data: [
          {
            firstName: "Steve",
            lastName: "Smith",
          },
          {
            firstName: "Michel",
            lastName: "Muner",
          },
        ],
      },
      {
        empId: 14,
        lay1: { i: "e" },
        data: [
          {
            firstName: "Steve",
            lastName: "Smith",
          },
          {
            firstName: "Michel",
            lastName: "Muner",
          },
        ],
      },
    ],
  });

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
    return chartData.map((item, i) => {
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
      {/* {grid.map((item: any) => (
        <Grid
          item
          xs={6}
          key={item.id}
          sx={{ minHeight: "200px", cursor: "pointer" }}
        >
          <MoveElement>
            <Paper sx={{ height: "100%" }}>
              <Stack direction="row" spacing={1} p={1}>
                <IconButton
                  color="error"
                  onClick={() => deleteHandler(item.id)}
                >
                  <DeleteIcon />
                </IconButton>
                <IconButton color="info">
                  <Link
                    to={`/dashboard/editChart/${item.id}`}
                    style={{ color: "inherit" }}
                  >
                    <EditIcon />
                  </Link>
                </IconButton>
              </Stack>
              <Charts data={item} />
            </Paper>
          </MoveElement>
        </Grid>
      ))} */}
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
