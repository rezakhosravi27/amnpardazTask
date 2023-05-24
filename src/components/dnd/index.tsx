import React, { useState, useRef } from "react";
import { Grid, Paper, Stack, Typography, IconButton } from "@mui/material";
import Resizable from "../resizable/Resizable";
import { useAppSelector, useAppDispatch } from "../../services/redux/hooks";
import { Charts } from "../charts/Charts";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { deleteChartHandler } from "../../services/redux/features/charts";
import { Link } from "react-router-dom";
import { MoveElement } from "../moveElement/MoveElement";
import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveGridLayout = WidthProvider(Responsive);

var layout = [
  { i: "a", x: 0, y: 0, w: 4, h: 1 },
  { i: "b", x: 4, y: 0, w: 4, h: 1 },
  { i: "c", x: 8, y: 0, w: 4, h: 1 },
  { i: "d", x: 0, y: 1, w: 4, h: 1 },
  { i: "e", x: 4, y: 1, w: 4, h: 1 },
  { i: "f", x: 8, y: 1, w: 4, h: 1 },
];
var layout1 = [
  { i: "a", x: 0, y: 0, w: 6, h: 1 },
  { i: "b", x: 6, y: 0, w: 6, h: 1 },
  { i: "c", x: 0, y: 1, w: 6, h: 1 },
  { i: "d", x: 6, y: 1, w: 6, h: 1 },
  { i: "e", x: 0, y: 2, w: 6, h: 1 },
  { i: "f", x: 6, y: 2, w: 6, h: 1 },
];

export const DND = () => {
  const dispatch = useAppDispatch();
  const chartData = useAppSelector((state) => state.charts.chartData);
  const [grid, setGrid] = useState<any>(chartData);
  const elementRef = useRef<HTMLInputElement>(null);

  const handleDragStart = (event: any, id: number) => {
    event.dataTransfer.setData("id", id);
  };

  const handleDragOver = (event: any) => {
    event.preventDefault();
  };

  const handleDrop = (event: any, id: number) => {
    const dragId = event.dataTransfer.getData("id");
    const draggedItem = grid.find((item: any) => item.id == dragId);
    const remainingItems = grid.filter((item: any) => item.id !== dragId);
    const dropIndex = grid.findIndex((item: any) => item.id == id);
    const updatedGrid = [
      ...remainingItems.slice(0, dropIndex),
      draggedItem,
      ...remainingItems.slice(dropIndex),
    ];
    setGrid(updatedGrid);
  };

  const deleteHandler = (id: any) => {
    dispatch(deleteChartHandler(id));
  };

  React.useEffect(() => {
    setGrid(chartData);
  }, [chartData]);

  return (
    <Grid spacing={3} container sx={{ position: "relative" }}>
      <ResponsiveGridLayout
        className="layout"
        layouts={{ lg: layout }}
        breakpoints={{ lg: 1200 }}
        cols={{ lg: 12 }}
        rowHeight={281}
        width={1200}
      >
        <div key="a" style={{ backgroundColor: "yellow" }}>
          <div>card</div>
        </div>
        <div key="b" style={{ backgroundColor: "green" }}>
          <div>card</div>
        </div>
        <div key="c" style={{ backgroundColor: "red" }}>
          <div>card</div>
        </div>
        <div key="d" style={{ backgroundColor: "blue" }}>
          <div>card</div>
        </div>
        <div key="e" style={{ backgroundColor: "violet" }}>
          <div>card</div>
        </div>
        <div key="f" style={{ backgroundColor: "lemonchiffon" }}>
          <div>card</div>
        </div>
      </ResponsiveGridLayout>
      {grid.map((item: any) => (
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
      ))}
    </Grid>
  );
};
