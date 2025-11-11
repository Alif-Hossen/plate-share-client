
import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import ErrorPage from "../Pages/ErrorPage";
import Banner from "../Pages/Banner";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import AvailableFoods from "../Pages/AvailableFoods";
import AddFood from "../Pages/AddFood";
import ManageFood from "../Pages/ManageFood";
import MyFood from "../Pages/MyFood";
import PrivateRoute from "../Provider/PrivateRoute";
import FeaturedFoods from "../Pages/FeaturedFoods";
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
            },
            {
                path:'/availableFoods',
                element: <AvailableFoods></AvailableFoods>
            },
            {
                path:'/addFood',
                element: (
                    <PrivateRoute>
                        <AddFood></AddFood>
                    </PrivateRoute>
                )
            },
            {
                path: '/manageFood',
                element: <ManageFood></ManageFood>
            },
            {
                path: '/myFood',
                element: <MyFood></MyFood>
            },
            
            
        ]
    }
])

export default router;



