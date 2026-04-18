import { Outlet } from "react-router";
import MenuDashboard from "../../components/MenuDashboard";
import PrivateRoute from "../../components/PrivateRoute";

const DashboardLayout = () => {
    return <>
       <PrivateRoute>
            <MenuDashboard />
            <Outlet />
       </PrivateRoute>
    </>
}
 
export default DashboardLayout;