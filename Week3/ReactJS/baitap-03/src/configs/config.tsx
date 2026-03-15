import {
    createBrowserRouter
} from "react-router-dom";
import { TestLayouts } from "../layouts/TestLayouts";
import { PageTest } from "../pages/PageTest";
import PageTestMain from "../pages/PageTestMain";
import TestDetail from "../pages/TestDetail";



export const router = createBrowserRouter([
    {
        path: "/test",
        element: <TestLayouts />,
        children: [
            {
                path: "",
                element: <PageTestMain />,
            },
            {
                path: "team",
                element: <PageTest />,
            },
            {
                path: ":id",
                element: <TestDetail />
            }
        ],
    },
]);

