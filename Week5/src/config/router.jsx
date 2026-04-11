import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import NotFound from "../components/NotFound";
import ProductDetail from "../components/ProductDetail";
import DashboardLayout from "../layout/DashboardLayout";
import Checkout from "../page/Checkout";
import Dashboard from "../page/Dashboard";
import Order from "../page/Order";
import ProductPage from "../page/ProductPage";
import Profile from "../page/Profile";
import Settings from "../page/Setting";

export const router = [
    {
        index: true,
        path : "/",
        element : <Home />
    } , 
    {
        path : "/about",
        element : <About />
    } , 
    {
        path : "/contact",
        element : <Contact />
    } , 
    {
        path : "/products",
        element : <ProductPage />
    }, 
    {
       path: "/products/:id" , 
       element: <ProductDetail />
    },
    {
        path : "/checkout" , 
        element : <Checkout />
    } ,
    {
        path: "/dashboard" ,
        element: <DashboardLayout />,
        children : [
            {
                index:true , 
                element : <Dashboard />
            },
            { 
                path: "profile",
                element: <Profile />,
            },
            {
                path: "orders",
                element: <Order />,
            },
            {
                path: "settings",
                element: <Settings />,
            },
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
]