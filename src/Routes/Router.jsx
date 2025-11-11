
import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import ErrorPage from "../Pages/ErrorPage";
import Banner from "../Pages/Banner";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
// import { createBrowserRouter } from "react-router";
const router = createBrowserRouter ( [
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path: "/",
                element: <Banner></Banner>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
            
        ]
    }
])

export default router;



