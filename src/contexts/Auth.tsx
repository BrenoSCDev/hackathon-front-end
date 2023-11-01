import { AuthContext } from ".";
import { IParent } from "../interfaces";
import React, {useState, useEffect} from 'react'
import { server } from "../services";

export const AuthProvider: React.FC<IParent> = ({children}) => {
    const [user, setUser] = useState<any>({})
    const [error, setError] = useState<string>('')

    async function signIn(usuario: string, senha: string) {
            try {
                const response = await server.post("/usuarioLogin", { usuario, senha })
                    if (response.status === 200) {
                        const tokenResponse = response.data.jwtToken
                        const userResponse = response.data.user
                        setUser(userResponse)
                        localStorage.setItem("user", JSON.stringify(userResponse))
                        localStorage.setItem("user_token", tokenResponse)
                    }
            }catch (error: any) {
                // if (error.response && error.response.status === 401) {
                //     setError('Usuário com confirmação pendente.')
                // }
                // if (error.response && error.response.status === 404) {
                //     setError("Ops! Algo deu errado, verifique e tente novamente.")
                // }
                // if (error.response && error.response.status === 500){
                //     setError("Credenciais inválidos, verifique e tente novamente.")
                // }
            }
    }
  return (
    <AuthContext.Provider value={{user, auth: !user, error, signIn }}>
        {children}
    </AuthContext.Provider>
  )
}
