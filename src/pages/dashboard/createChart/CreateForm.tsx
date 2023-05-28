import { Box, Container, Typography, Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { db } from "../../../data/data";
import { chartDataHandler } from "../../../services/redux/features/charts";
import { useAppDispatch, useAppSelector } from "../../../services/redux/hooks";
import { InputsTypes, chartDataTypes, onSubmitTypes } from "./createForm.types";
import { v4 as uuid } from "uuid";
import { OtherOptions } from "./OtherOptions";
import { GeneralOptions } from "./GeneralOptions";
import { useParams } from "react-router-dom";
import {
  editChartHandler,
  layoutHandler,
} from "../../../services/redux/features/charts";
import { toast } from "react-toastify";

const getAxisDataFromKey = (
  db: any,
  keys: { axis: string; series: string }
) => {
  const chartCategory = db.map((items: any) => {
    return items[keys.axis];
  });
  const chartSeries = db.map((items: any) => {
    return items[keys.series];
  });

  return { chartCategory, chartSeries };
};

export const CreateForm = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const chartData = useAppSelector((state) => state.charts.chartData);
  const layout = useAppSelector((state) => state.charts.layout);
  const findChart = chartData.find((chart: any) => chart.id == params.id);
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

    // Initial layout data for each chart
    const layoutData = {
      x: Math.floor(Math.random() * 7) > 1 ? 6 : 0,
      y: 0,
      w: 6,
      h: 1.5,
      i: id,
    };

    // if findChart exists means edit page render and dispatch is edit data
    if (findChart) {
      dispatch(editChartHandler(chartData));
      toast.success("Chart update");
    } else {
      dispatch(chartDataHandler(chartData));
      dispatch(layoutHandler([...layout, layoutData]));
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
