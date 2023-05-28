import { Box, Container, Typography, Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { db } from "../../../data/data";
import { chartDataHandler } from "../../../services/redux/features/charts";
import { useAppDispatch, useAppSelector } from "../../../services/redux/hooks";
import {
  InputsTypes,
  chartDataTypes,
  onSubmitTypes,
  objectTypes,
} from "./createForm.types";
import { v4 as uuid } from "uuid";
import { OtherOptions } from "./OtherOptions";
import { GeneralOptions } from "./GeneralOptions";
import { useParams } from "react-router-dom";
import { editChartHandler } from "../../../services/redux/features/charts";
import { toast } from "react-toastify";
import { chartStateObject } from "../../../services/redux/features/charts.types";
import { dataTypes } from "../../../data/data.types";

const getAxisDataFromKey = (
  db: dataTypes,
  keys: { axis: string; series: string }
) => {
  const axis: string = keys.axis;
  const series: string = keys.series;
  const chartCategory: (string | number)[] = db.map((items) => {
    return items[axis as keyof objectTypes];
  });
  const chartSeries: (string | number)[] = db.map((items) => {
    return items[series as keyof objectTypes];
  });

  return { chartCategory, chartSeries };
};

export const CreateForm = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const chartData = useAppSelector((state) => state.charts.chartData);
  const findChart = chartData.find(
    (chart: chartStateObject) => chart.id == params.id
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputsTypes>();

  const onSubmit: SubmitHandler<InputsTypes> = (data: onSubmitTypes) => {
    const id = uuid();
    const {
      type,
      series,
      axis,
      direction,
      color,
      legend,
      legendPosition,
      title,
    } = data;

    // Get name series and axis for get this key data from db
    const { chartCategory, chartSeries } = getAxisDataFromKey(db, {
      axis,
      series,
    });

    // Chart data for save to redux
    const chartData: chartDataTypes = {
      id,
      type,
      chartSeries,
      chartCategory,
      direction,
      color,
      legend,
      legendPosition,
      title,
      axis: data.axis,
      series: data.series,
    };

    // if findChart exists means edit page render and dispatch is edit data
    if (findChart) {
      dispatch(editChartHandler(chartData));
      toast.success("Chart update");
    } else {
      dispatch(chartDataHandler(chartData));
      toast.success("Chart create");
      reset();
    }
  };

  return (
    <Container maxWidth="md">
      <Paper sx={{ p: 3, mt: 7 }}>
        <Typography variant="h4" color="GrayText">
          Create Chart
        </Typography>
        <Box
          component="form"
          noValidate
          mt={2}
          onSubmit={handleSubmit(onSubmit)}
        >
          <GeneralOptions
            register={register}
            errors={errors}
            findChart={findChart}
          />
          <OtherOptions register={register} findChart={findChart} />
          <Grid container justifyContent="flex-end" mt={2}>
            <Button variant="contained" type="submit">
              save
            </Button>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};
