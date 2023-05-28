import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import { db } from "../../../data/data";
import { generateData } from "./generateData";

export const GeneralOptions = ({ errors, register, findChart }: any) => {
  const [chartType, setChartType] = useState<string | undefined>(" ");
  const { axis, series } = generateData(db);

  return (
    <>
      <Divider sx={{ my: 3 }}>General Options</Divider>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            defaultValue={findChart?.title}
            error={errors["title"] && true}
            fullWidth
            type="text"
            label="Title"
            {...register("title", { required: true })}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel
              id="demo-simple-select-label"
              error={errors["type"] && true}
            >
              Type
            </InputLabel>
            <Select
              defaultValue={findChart?.type}
              error={errors["type"] && true}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Type"
              {...register("type", {
                required: "This field must be required",
              })}
              onChange={(event: SelectChangeEvent) =>
                setChartType(event.target.value)
              }
            >
              <MenuItem value="bar">Bar</MenuItem>
              <MenuItem value="line">Line</MenuItem>
              <MenuItem value="pie">Pie</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel
              id="demo-simple-select-label"
              error={errors["axis"] && true}
            >
              Axis
            </InputLabel>
            <Select
              defaultValue={findChart?.axis}
              error={errors["axis"] && true}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Axis"
              {...register("axis", {
                required: "This field must be required",
              })}
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
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel
              id="demo-simple-select-label"
              error={errors["series"] && true}
            >
              Series
            </InputLabel>
            <Select
              defaultValue={findChart?.series}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Series"
              {...register("series", {
                required: "This field must be required",
              })}
              error={errors["series"] && true}
            >
              {series.map((keys: any) =>
                keys == "id" ? null : (
                  <MenuItem key={keys} value={keys}>
                    {keys}
                  </MenuItem>
                )
              )}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          {chartType === "bar" && (
            <FormControl fullWidth>
              <InputLabel
                id="demo-simple-select-label"
                error={errors["direction"] && true}
              >
                Direction
              </InputLabel>
              <Select
                defaultValue={findChart?.direction}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Direction"
                {...register("direction", {
                  required: "This field must be required",
                })}
                error={errors["direction"] && true}
              >
                <MenuItem value="horizontal">Horizontal</MenuItem>
                <MenuItem value="vertical">Vertical</MenuItem>
              </Select>
            </FormControl>
          )}
        </Grid>
      </Grid>
    </>
  );
};
