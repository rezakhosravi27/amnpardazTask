import React, { useState } from "react";
import { Grid, Paper, Stack, Typography, IconButton } from "@mui/material";
import Resizable from "../resizable/Resizable";
import { useAppSelector, useAppDispatch } from "../../services/redux/hooks";
import { Charts } from "../charts/Charts";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { deleteChartHandler } from "../../services/redux/features/charts";
import { Link } from "react-router-dom";

export const DND = () => {
  const dispatch = useAppDispatch();
  const chartData = useAppSelector((state) => state.charts.chartData);
  const [grid, setGrid] = useState<any>(chartData);

  console.log("grid data", grid);

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
    <Grid spacing={3} container>
      {grid.map((item: any) => (
        <Grid
          item
          xs={6}
          key={item.id}
          draggable
          onDragStart={(event) => handleDragStart(event, item.id)}
          onDragOver={handleDragOver}
          onDrop={(event) => handleDrop(event, item.id)}
          sx={{ minHeight: "200px", cursor: "pointer" }}
        >
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
        </Grid>
      ))}
    </Grid>
  );
};
