import React, { useState } from "react";
import { Grid, Paper, Stack, Typography } from "@mui/material";
import Resizable from "../resizable/Resizable";
import { useAppSelector } from "../../services/redux/hooks";
import { Charts } from "../charts/Charts";

const items = [
  {
    id: "item-1",
    content: "Item 1",
  },
  {
    id: "item-2",
    content: "Item 2",
  },
  {
    id: "item-3",
    content: "Item 3",
  },
  {
    id: "item-3",
    content: "Item 3",
  },
  {
    id: "item-3",
    content: "Item 3",
  },
  {
    id: "item-3",
    content: "Item 3",
  },
  {
    id: "item-3",
    content: "Item 3",
  },
  {
    id: "item-3",
    content: "Item 3",
  },
  {
    id: "item-3",
    content: "Item 3",
  },
];

export const DND = () => {
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
            <Charts data={item} />
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};
