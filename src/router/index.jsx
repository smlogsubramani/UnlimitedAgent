import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "../Pages/Home";
import Signup from "../Pages/Signup";
import About from "../Pages/About"
import Usecase from "../Pages/Usecase"


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/signup",
        element: <Signup/>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/usecase",
        element: <Usecase/>
    }
]);

const Router = () => (
    <div>
        <RouterProvider router={router} />
    </div>
);

export default Router;