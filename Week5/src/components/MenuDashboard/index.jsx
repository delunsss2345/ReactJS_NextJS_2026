import { useNavigate } from "react-router";

const MenuDashboard = () => {
    const navigate = useNavigate() ;
    return <>
    <div style={{
        display: 'flex', gap:20
    }}>
        <button onClick={() => navigate("/dashboard/profile")}>Profile</button>
        <button onClick={() => navigate("/dashboard/orders")}>Orders</button>
        <button onClick={() => navigate("/dashboard/settings")}>Settings</button>
    </div>
    </>
}
 
export default MenuDashboard;