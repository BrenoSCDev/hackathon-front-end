import { createBrowserRouter } from "react-router-dom";

import { Login } from "../pages/login/loginType";
import { LoginUser } from "../pages/login/loginUser";
import { LoginStaff } from "../pages/login/loginStaff";
import { UserData } from "../pages/userDataQuery";
import { UseAuth } from "../hooks";

const PrivateRoute: React.FC<{ element: JSX.Element }> = ({ element }) => {
    const {auth} = UseAuth()
      if (auth) {
        return element
      } else {
        return (
            <Login/>
        ) 
      }
    }

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
    },
    {
        path: "/UserData",
        element: 
        <PrivateRoute element={
            <UserData/>
        }/>
    }
])