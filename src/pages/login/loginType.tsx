import React from 'react'
import "./styles.css"
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

export const Login = () => {
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
      <div className='col-4 m-4'>
        <Card>
          <Card.Body>
            <Card.Title>
              <div className='d-flex align-items-center justify-content-center'>
              <h1 className='card-title m-4'>ESCOLHA O TIPO DE CONTA</h1>
              </div>
            </Card.Title>
            <div className='d-flex flex-column'>
              <button className='m-3 p-2 primary-button' onClick={() => navigate('/LoginStaff')}>EFETIVO</button>
              <button className='m-3 p-2 secondary-button' onClick={() => navigate('/LoginUser')}>USUÁRIO</button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}
