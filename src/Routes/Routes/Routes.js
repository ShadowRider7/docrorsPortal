import { createBrowserRouter } from "react-router-dom"

import Home from "../../Pages/Home/Home/Home"
import Login from "../../Pages/Login/Login"
import Main from "../../layout/Main"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])