import { createBrowserRouter } from "react-router-dom";

import { Login } from "../pages/login/loginType";
import { LoginUser } from "../pages/login/loginUser";
import { LoginStaff } from "../pages/login/loginStaff";
import { UserData } from "../pages/userDataQuery";
import { UseAuth } from "../hooks";
import { RegisteredStaff } from "../pages/registeredStaff/staff";
import { Alerts } from "../pages/alerts";
import { EntryQueryPage } from "../pages/entryQuery/staff";
import { RegisteredUsers } from "../pages/registeredStaff/users";
import { EntryVehiclePage } from "../pages/entryQuery/vehicles";
import { ServiceStations } from "../pages/serviceStations";
import { UnitTablePage } from "../pages/unitTables";
import { VehiclePage } from "../pages/vehicles";
import { BadgePage } from "../pages/badges";
import { GerenciaGeralPage } from "../pages/management";

import { Dashboard } from "../layout";

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
        path: "/Login-Usuario",
        element: <LoginUser/>
    },
    {
        path: "/Login-Efetivos",
        element: <LoginStaff/>
    },
    {
        path: "/Dados-Usuario",
        element: 
        <PrivateRoute element={
            <UserData/>
        }/>
    },
    {
        path: "/Efetivos-Cadastrados",
        element: 
        <PrivateRoute element={
            <Dashboard>
                <RegisteredStaff/>
            </Dashboard>
        }/>    
    },
    {
        path: "/Usuarios-Cadastrados",
        element: 
        <PrivateRoute element={
            <Dashboard>
                <RegisteredUsers/>
            </Dashboard>
        }/>    
    },
    {
        path: "/Alertas",
        element: 
        <PrivateRoute element={
            <Dashboard>
                <Alerts/>
            </Dashboard>
        }/>  
    },
    {
        path: "/Entrada-Efetivos",
        element: 
        <PrivateRoute element={
            <Dashboard>
                <EntryQueryPage/>
            </Dashboard>
        }/>
    },
    {
        path: "/Entrada-Veiculos",
        element: 
        <PrivateRoute element={
            <Dashboard>
                <EntryVehiclePage/>
            </Dashboard>
        }/>
    },
    {
        path: "/Postos-de-Servico",
        element: 
        <PrivateRoute element={
            <Dashboard>
                <ServiceStations/>
            </Dashboard>
        }/>
    },
    {
        path: "/Unidades",
        element: 
        <PrivateRoute element={
            <Dashboard>
                <UnitTablePage/>
            </Dashboard>
        }/>
    },
    {
        path: "/Veiculos-Cadastrados",
        element: 
        <PrivateRoute element={
            <Dashboard>
                <VehiclePage/>
            </Dashboard>
        }/>
    },
    {
        path: "/Crachas-Cadastrados",
        element: 
        <PrivateRoute element={
            <Dashboard>
                <BadgePage/>
            </Dashboard>
        }/>
    },
    {
        path: "/Gerencia",
        element: 
        <PrivateRoute element={
            <Dashboard>
                <GerenciaGeralPage/>
            </Dashboard>
        }/>
    },

])