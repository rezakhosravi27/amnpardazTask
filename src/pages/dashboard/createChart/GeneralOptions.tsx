import React from "react";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import { db } from "../../../data/data";

export const GeneralOptions = ({ errors, register }: any) => {
  const [type, setType] = React.useState("");
  const axis = [...new Set(db.flatMap((obj: any) => Object.keys(obj)))];

  return (
    <>
      <Divider sx={{ my: 3 }}>General Options</Divider>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel
              id="demo-simple-select-label"
              error={errors["type"] && true}
            >
              Type
            </InputLabel>
            <Select
              error={errors["type"] && true}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Type"
              {...register("type", {
                required: "This field must be required",
              })}
              onChange={(event: SelectChangeEvent) =>
                setType(event.target.value)
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
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Series"
              {...register("series", {
                required: "This field must be required",
              })}
              error={errors["series"] && true}
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
          {type === "bar" && (
            <FormControl fullWidth>
              <InputLabel
                id="demo-simple-select-label"
                error={errors["direction"] && true}
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
