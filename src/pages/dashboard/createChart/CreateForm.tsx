import React from "react";
import { Box, Container, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  type: string; 
  
};

export const CreateForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  return (
    <Container>
      <Typography variant="h4" color="GrayText">
        Create Chart
      </Typography>
      <Box component="form" noValidate>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Type"
          >
            <MenuItem value={10}>Bar</MenuItem>
            <MenuItem value={20}>Line</MenuItem>
            <MenuItem value={30}>Pie</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Container>
  );
};
