import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import NotFound from "../components/NotFound";
import ProductDetail from "../components/ProductDetail";
import ProductPage from "../page/ProductPage";

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
        path: "*",
        element: <NotFound />
    }
]