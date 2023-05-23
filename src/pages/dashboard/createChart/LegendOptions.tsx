import React from "react";
import { Divider, TextField, Grid } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { Input } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";

export const LegendOptions = React.memo(() => {
  const [color, setColor] = React.useState("#2E93fA");
  return (
    <React.Fragment>
      <Divider sx={{ my: 3 }}>Legend Options</Divider>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Legend</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Legend"
            >
              <MenuItem value={true}>Show</MenuItem>
              <MenuItem value={false}>Hide</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Legend Position
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Legend Position"
            >
              <MenuItem value="up">Up</MenuItem>
              <MenuItem value="down">Down</MenuItem>
              <MenuItem value="right">Right</MenuItem>
              <MenuItem value="left">Left</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Color"
            value={color}
            onChange={(event) => setColor(event.target.value)}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Input
                    value={color}
                    type="color"
                    sx={{ width: "2vw" }}
                    onChange={(event) => setColor(event.target.value)}
                  />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
});
