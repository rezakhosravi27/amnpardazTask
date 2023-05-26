import ResponsiveDrawer from "../../../components/responsiveDrawer/ResponsiveDrawer";
import { Outlet } from "react-router-dom";
import { CreateForm } from "./CreateForm";

const CreateChart = () => {
  return (
    <ResponsiveDrawer>
      <CreateForm />
    </ResponsiveDrawer>
  );
};

export default CreateChart;
