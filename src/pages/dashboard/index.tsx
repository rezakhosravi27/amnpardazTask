import React from "react";
import ResponsiveDrawer from "../../components/ResponsiveDrawer";
import { useAppSelector } from "../../services/redux/hooks";
import Grid from "@mui/material/Grid";
import { Charts } from "../../components/charts/Charts";
import { DND } from "../../components/dnd";

const Dashboard = () => {
  const chartData = useAppSelector((state) => state.charts.chartData);
  return (
    <ResponsiveDrawer>
      <Grid container>
        <DND />
      </Grid>
    </ResponsiveDrawer>
  );
};

export default Dashboard;
