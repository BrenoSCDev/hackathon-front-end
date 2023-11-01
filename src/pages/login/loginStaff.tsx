import React, {useState, ChangeEvent} from 'react'
import "./styles.css"
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import { UseAuth } from '../../hooks';

export const LoginStaff = () => {

  const {signIn} = UseAuth()

  function handleAuth(){
    signIn(username, pwd)
  }

  const [username, setUsername] = useState<string>('')
  const [pwd, setPwd] = useState<string>('')
  const navigate = useNavigate()
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
      <Card.Title>
              <div className='d-flex align-items-center justify-content-center card-title-staff'>
              <h1 className='card-title m-4'>LOGIN CONSULTA DE DADOS EFETIVOS</h1>
              </div>
            </Card.Title>
        <Card.Body>
          <div className='d-flex flex-column'>
          <span className='m-1 card-title'>Usuário</span>
            <input 
            placeholder='SARAM'
            className='form-control'
            value={username}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
            />
            <span className='m-1 mt-4 card-title'>Senha</span>
            <input 
            placeholder='CPF'
            className='form-control'
            type='password'
            value={pwd}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPwd(e.target.value)}
            />

            <button className='m-3 p-2 login-button' onClick={handleAuth}>Entrar</button>
          </div>
        </Card.Body>
      </Card>
    </div>
  </div>
  )
}
