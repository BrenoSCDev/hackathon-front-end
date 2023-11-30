import React, {useState, ChangeEvent} from 'react'
import "./styles.css"
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import { UseAuth } from '../../hooks';
import { Loader } from '../../components/loader';

export const LoginUser = () => {
  const [username, setUsername] = useState<string>('4444')
  const [pwd, setPwd] = useState<string>('pamonha')
  const {signIn, error, loading, auth} = UseAuth()

  const navigate = useNavigate()

  function handleLogin(){
    signIn(username, pwd)
    setTimeout(() => {
      if(auth){
        navigate('/Entrada-Efetivos')
      }
    }, 500)
  }
  return (
    <div className='background d-flex align-items-center justify-content-center'>
    <div className='col-4 m-4'>
      <div className='d-flex flex-column align-items-center justify-content-center'>
        <div className='logo-img' />
        <h1 className='title'>SISTEMA DE CONTROLE</h1>
        <h1 className='title'>DE ACESSO</h1>
      </div>
    </div>
    <div className='col-3 m-4'>
      <Card>
        <Card.Body>
          <div className='d-flex flex-column'>
          <span className='m-1 card-title'>Usuário</span>
            <input 
            placeholder='Login'
            className='form-control'
            value={username}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
            />

            <span className='m-1 mt-4 card-title'>Senha</span>
            <input 
            placeholder='Senha'
            className='form-control'
            value={pwd}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPwd(e.target.value)}
            />

          {loading ? (
            <Loader/>
          ) : 
            <button className='m-3 p-2 login-button' onClick={handleLogin}>Entrar</button>
          }
          </div>
          {error}
        </Card.Body>
      </Card>
    </div>
  </div>
  )
}
