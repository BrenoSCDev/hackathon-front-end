import React from 'react'
import "./styles.css"
import { DataQueryHeader } from '../../components/dataQueryHeader'

export const UserData = () => {
  return (
    <>
    <DataQueryHeader/>    
    <div className="container mt-5 mb-5">
    <h1 className="mb-4">Consulta de Dados</h1>
    <div className='col-md-12 row'>
    <form className='row g-3 col-md-8'>
        <div className="col-md-6">
          <label htmlFor="titulo" className="form-label">
            Nome completo
          </label>
          <input
            type="text"
            className="form-control"
            // value={surname}
            // onChange={(e: ChangeEvent<HTMLInputElement>) => setSurname(e.target.value)
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="descricao" className="form-label">
           Nome de Guerra
          </label>
          <input
            className="form-control"
            // value={description}
            // onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="endereco" className="form-label">
            Posto | Graduação
          </label>
          <input
            type="text"
            className="form-control"
            // value={neighborhood}
            // onChange={(e: ChangeEvent<HTMLInputElement>) => setNeighborhood(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="endereco" className="form-label">
            Unidade
          </label>
          <input
            type="text"
            className="form-control"
            // value={street}
            // onChange={(e: ChangeEvent<HTMLInputElement>) => setStreet(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="endereco" className="form-label">
            SARAM
          </label>
          <input
            type="text"
            className="form-control"
            // value={street}
            // onChange={(e: ChangeEvent<HTMLInputElement>) => setStreet(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="endereco" className="form-label">
            CPF
          </label>
          <input
            type="text"
            className="form-control"
            // value={street}
            // onChange={(e: ChangeEvent<HTMLInputElement>) => setStreet(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="endereco" className="form-label">
            Veículos Cadastros
          </label>
          <input
            type="text"
            className="form-control"
            // value={street}
            // onChange={(e: ChangeEvent<HTMLInputElement>) => setStreet(e.target.value)}
          />
        </div>
        </form>
        <div className='col-md-2'>
            <label htmlFor="endereco" className="form-label">
                Foto
            </label>
            <img src='https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png' className='img-fluid'/>
        </div>
        <div className='col-md-2'>
            <label htmlFor="endereco" className="form-label">
               QR Code
            </label>
            <img src='https://miro.medium.com/v2/resize:fit:640/0*zPG9dqz508rmRR70.' className='img-fluid'/>
        </div>
    </div>
    </div>
    </>
  )
}