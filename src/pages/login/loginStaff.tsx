import React from 'react'
import "./styles.css"
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

export const LoginStaff = () => {
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
            />
            <span className='m-1 mt-4 card-title'>Senha</span>
            <input 
            placeholder='CPF'
            className='form-control'
            />

            <button className='m-3 p-2 login-button'>Entrar</button>
          </div>
        </Card.Body>
      </Card>
    </div>
  </div>
  )
}
