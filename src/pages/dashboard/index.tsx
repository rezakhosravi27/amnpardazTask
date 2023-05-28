import ResponsiveDrawer from "../../components/responsiveDrawer/ResponsiveDrawer";
import Grid from "@mui/material/Grid";
import DND from "../../components/DND/DND";
import { useAppSelector } from "../../services/redux/hooks";
import Typography from "@mui/material/Typography";

const Dashboard = () => {
  const chartData = useAppSelector((state) => state.charts.chartData);
  return (
    <ResponsiveDrawer>
      <Grid container>
        {chartData.length == 0 && (
          <Grid
            container
            sx={{ minHeight: "75vh" }}
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h3" color="GrayText">
              Please create chart
            </Typography>
          </Grid>
        )}
        <DND />
      </Grid>
    </ResponsiveDrawer>
  );
};

export default Dashboard;
