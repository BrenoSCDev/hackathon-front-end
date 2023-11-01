import { createContext } from "react";
import { IAuth } from "./interfaces";

export const AuthContext = createContext<IAuth>({} as IAuth)