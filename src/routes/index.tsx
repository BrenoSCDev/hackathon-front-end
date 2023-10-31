import { createBrowserRouter } from "react-router-dom";

import { Login } from "../pages/login/loginType";
import { LoginUser } from "../pages/login/loginUser";
import { LoginStaff } from "../pages/login/loginStaff";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "/LoginUser",
        element: <LoginUser/>
    },
    {
        path: "/LoginStaff",
        element: <LoginStaff/>
    }

])