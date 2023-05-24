import React, { useState } from "react";
import { Grid, Paper } from "@mui/material";
import Resizable from "../resizable/Resizable";

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
  const [grid, setGrid] = useState<any>([
    { id: 1, value: "A" },
    { id: 2, value: "B" },
    { id: 3, value: "C" },
    { id: 4, value: "D" },
    { id: 5, value: "E" },
  ]);

  const handleDragStart = (event: any, id: number) => {
    event.dataTransfer.setData("id", id);
  };

  const handleDragOver = (event: any) => {
    event.preventDefault();
  };

  const handleDrop = (event: any, id: number) => {
    const dragId = event.dataTransfer.getData("id");
    const draggedItem = grid.find((item: any) => item.id === Number(dragId));
    const remainingItems = grid.filter(
      (item: any) => item.id !== Number(dragId)
    );
    const dropIndex = grid.findIndex((item: any) => item.id === Number(id));
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
          <Resizable>
            <Paper sx={{ height: "100%" }}>{item.value}</Paper>
          </Resizable>
        </Grid>
      ))}
    </Grid>
  );
};
