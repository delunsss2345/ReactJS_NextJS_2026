import { Outlet } from "react-router";
import MenuDashboard from "../../components/MenuDashboard";

const DashboardLayout = () => {
    return <>
        <MenuDashboard />
        <Outlet />
    </>
}
 
export default DashboardLayout;