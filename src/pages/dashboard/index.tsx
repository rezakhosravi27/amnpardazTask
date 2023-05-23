import React from "react";
import ResponsiveDrawer from "../../components/ResponsiveDrawer";
import { useAppSelector } from "../../services/redux/hooks";
import Grid from "@mui/material/Grid";
import { Charts } from "../../components/charts/Charts";

const Dashboard = () => {
  const chartData = useAppSelector((state) => state.charts.chartData);
  return (
    <ResponsiveDrawer>
      <Grid container>
        {chartData.map((data: any) => {
          return <Charts data={data} />;
        })}
      </Grid>
    </ResponsiveDrawer>
  );
};

export default Dashboard;
