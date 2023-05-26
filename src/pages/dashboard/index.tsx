import ResponsiveDrawer from "../../components/responsiveDrawer/ResponsiveDrawer";
import Grid from "@mui/material/Grid";
import { DND } from "../../components/DND/DND";

const Dashboard = () => {
  return (
    <ResponsiveDrawer>
      <Grid container>
        <DND />
      </Grid>
    </ResponsiveDrawer>
  );
};

export default Dashboard;
