import { useRoutes } from "react-router";
import { router } from "../../config/router";

const AppRouter = () => {
    const routers = useRoutes(router)
    return routers
}
export default AppRouter