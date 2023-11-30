import React from 'react'

export const RegisterUser = () => {
  return (
    <div className="container mt-5 mb-5">
    <h1 className="mb-4">Registrar Usuário</h1>
    <div className='col-md-12 row'>
    <form className='row g-3 col-md-12'>
        <div className="col-md-6">
          <label htmlFor="titulo" className="form-label">
            Nome completo
          </label>
          <input
            placeholder='Digite o nome completo do usuário'
            type="text"
            className="form-control"
            // value={surname}
            // onChange={(e: ChangeEvent<HTMLInputElement>) => setSurname(e.target.value)
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="descricao" className="form-label">
           Nível de acesso
          </label>
          <select className="form-select">
            <option selected>Escolha o nível de acesso</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
        </select>
        </div>
        <div className="col-md-3">
          <label htmlFor="endereco" className="form-label">
            Módulos
          </label>
          <select className="form-select">
            <option selected>Escolha o nível de acesso</option>
            <option value="Usuários">Usuários</option>
            <option value="Efetivos">Efetivos</option>
            <option value="Visitantes">Visitantes</option>
            <option value="Postos de Servico">Postos de Serviço</option>
            <option value="Alertas">Alertas</option>
            <option value="Unidades">Unidades</option>
            <option value="Veiculos">Veículos</option>
            <option value="Gerencia">Gerencia</option>
            <option value="Crachas">Crachás</option>
        </select>
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
    </div>
    </div>
  )
}
