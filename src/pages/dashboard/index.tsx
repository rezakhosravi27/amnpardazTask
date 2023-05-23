import React from "react";
import ResponsiveDrawer from "../../components/ResponsiveDrawer";
import { useAppSelector } from "../../services/redux/hooks";
import Grid from "@mui/material/Grid";
import { Charts } from "../../components/charts/Charts";

const Dashboard = () => {
  const charts = useAppSelector((state) => state.charts.chartData);
  return (
    <ResponsiveDrawer>
      <Grid container>
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
      </Grid>
    </ResponsiveDrawer>
  );
};

export default Dashboard;
