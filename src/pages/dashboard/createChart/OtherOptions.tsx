import React from "react";
import { Divider, TextField, Grid } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { Input } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";

export const OtherOptions = ({ register, findChart }: any) => {
  const [color, setColor] = React.useState<string>("#2E93fA");
  return (
    <React.Fragment>
      <Divider sx={{ my: 3 }}>Other Options</Divider>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Legend</InputLabel>
            <Select
              defaultValue={findChart?.legend ? findChart?.legend : "show"}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Legend"
              {...register("legend", { required: true })}
            >
              <MenuItem value="show">Show</MenuItem>
              <MenuItem value="hide">Hide</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Legend Position
            </InputLabel>
            <Select
              defaultValue={
                findChart?.legendPosition ? findChart?.legendPosition : "right"
              }
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Legend Position"
              {...register("legendPosition")}
            >
              <MenuItem value="top">Up</MenuItem>
              <MenuItem value="bottom">Down</MenuItem>
              <MenuItem value="right">Right</MenuItem>
              <MenuItem value="left">Left</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Color"
            value={color}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setColor(event.target.value)
            }
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Input
                    {...register("color")}
                    value={color}
                    type="color"
                    sx={{ width: "2vw" }}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      setColor(event.target.value)
                    }
                  />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
