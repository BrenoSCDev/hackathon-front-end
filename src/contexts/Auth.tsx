import { AuthContext } from ".";
import { IParent } from "../interfaces";
import React, {useState, useEffect} from 'react'
import { server } from "../services";

export const AuthProvider: React.FC<IParent> = ({children}) => {
    const [user, setUser] = useState<any>({})
    const [error, setError] = useState<string>('')
    const [auth, setAuth] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean | null>(null)
    useEffect(() => {
        const verifyData = async () => {
        const userData = localStorage.getItem("user")
        const tokenData = localStorage.getItem("user_token")
    
        if(userData && tokenData) {
            setUser(JSON.parse(userData))
            setAuth(true)
            server.defaults.headers['Authorization'] = `Bearer ${tokenData}`
        }
    }
        verifyData()
    },[])

    async function signIn(usuario: string, senha: string) {
            setLoading(true)
            try {
                const response = await server.post("/usuarioLogin", { usuario, senha })
                    if (response.status === 200) {
                        const tokenResponse = response.data.jwtToken
                        const userResponse = response.data.entity
                        setUser(userResponse)
                        setAuth(true)
                        localStorage.setItem("user", JSON.stringify(userResponse))
                        localStorage.setItem("user_token", tokenResponse)
                    }
            }catch (error: any) {
                if(error.response){
                    const errorRes = JSON.stringify(error.response.data.mensagem)
                    setError(errorRes.replace(/"/g, ""))
                }
            }
            setLoading(false)
    }

    function signOut(){
        setUser({})
        setAuth(false)
        localStorage.removeItem("user")
        localStorage.removeItem("user_token")
    }
  return (
    <AuthContext.Provider value={{ user, auth, error, loading, signIn, signOut }}>
        {children}
    </AuthContext.Provider>
  )
}
