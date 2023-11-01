import { AuthContext } from "../contexts";
import { useContext } from "react";

export function UseAuth() {
    const context = useContext(AuthContext)

    return context
}