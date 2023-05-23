import React from "react";
import { Box, Container, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useForm, SubmitHandler } from "react-hook-form";
import { db } from "../../../data/data";
import { chartDataHandler } from "../../../services/redux/features/charts";
import { useAppDispatch, useAppSelector } from "../../../services/redux/hooks";
import { InputsTypes, chartDataTypes } from "./createForm.types";
import { Charts } from "../../../components/charts/Charts";

export const CreateForm = () => {
  const [type, setType] = React.useState("");
  const dispatch = useAppDispatch();
  const charts = useAppSelector((state) => state.charts.chartData);
  console.log(charts);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<InputsTypes>();
  const axis = [...new Set(db.flatMap((obj: any) => Object.keys(obj)))];

  const onSubmit: SubmitHandler<InputsTypes> = (data) => {
    const { type, series, axis, direction } = data;
    const chartCategory = db.map((items: any, index: number) => {
      return items[axis];
    });
    const chartSeries = db.map((items: any, index: number) => {
      return items[series];
    });
    const chartData: chartDataTypes = {
      type,
      series: chartSeries,
      category: chartCategory,
      direction,
    };
    dispatch(chartDataHandler(chartData));
  };

  return (
    <Container>
      <Typography variant="h4" color="GrayText">
        Create Chart
      </Typography>
      <Box component="form" noValidate mt={2} onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth margin="normal">
          <InputLabel id="demo-simple-select-label" error={errors["type"]}>
            Type
          </InputLabel>
          <Select
            error={errors["type"]}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Type"
            {...register("type", { required: "This field must be required" })}
            onChange={(event: SelectChangeEvent) => setType(event.target.value)}
          >
            <MenuItem value="bar">Bar</MenuItem>
            <MenuItem value="line">Line</MenuItem>
            <MenuItem value="pie">Pie</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel id="demo-simple-select-label" error={errors["axis"]}>
            Axis
          </InputLabel>
          <Select
            error={errors["axis"]}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Axis"
            {...register("axis", { required: "This field must be required" })}
          >
            {axis.map((keys: any) =>
              keys == "id" ? null : (
                <MenuItem key={keys} value={keys}>
                  {keys}
                </MenuItem>
              )
            )}
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel id="demo-simple-select-label" error={errors["series"]}>
            Series
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Series"
            {...register("series", { required: "This field must be required" })}
            error={errors["series"]}
          >
            {axis.map((keys: any) =>
              keys == "id" ? null : (
                <MenuItem key={keys} value={keys}>
                  {keys}
                </MenuItem>
              )
            )}
          </Select>
        </FormControl>
        {type === "bar" && (
          <FormControl fullWidth margin="normal">
            <InputLabel
              id="demo-simple-select-label"
              error={errors["direction"]}
            >
              Direction
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Direction"
              {...register("direction", {
                required: "This field must be required",
              })}
              error={errors["direction"]}
            >
              <MenuItem value="horizontal">Horizontal</MenuItem>
              <MenuItem value="vertical">Vertical</MenuItem>
            </Select>
          </FormControl>
        )}

        <Grid container justifyContent="flex-end" mt={2}>
          <Button variant="contained" type="submit">
            save
          </Button>
        </Grid>
      </Box>
      {charts.map((chart: any) => {
        return (
          <Charts
            type={chart.type}
            series={chart.series}
            category={chart.category}
            direction={chart.direction}
          />
        );
      })}
    </Container>
  );
};
