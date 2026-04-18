import { useEffect } from "react";
import {Navigate} from 'react-router'
const PrivateRoute = ({children}) => {
    const user = localStorage.getItem("auth") ; 

    if(!user) {
        return <Navigate to={"/login"} />
    }
    return <>
    {children}
    </>
}
 
export default PrivateRoute;