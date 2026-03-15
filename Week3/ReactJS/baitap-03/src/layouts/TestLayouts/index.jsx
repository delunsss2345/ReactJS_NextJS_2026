import { Outlet } from "react-router-dom";

export function TestLayouts() {
    return <div>TestLayouts
        <div>
            <Outlet />
        </div>
    </div>;
}