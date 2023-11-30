import React from 'react'

export const RegisterStaff = () => {
  return (
    <div className="container mt-5 mb-5">
    <h1 className="mb-4">Registrar Efetivo</h1>
    <div className='col-md-12 row'>
    <form className='row g-3 col-md-12'>
        <div className="col-md-6">
          <label htmlFor="titulo" className="form-label">
            Nome completo
          </label>
          <input
            placeholder='Digite o Nome Completo do Usuário'
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
            placeholder='Digite o Nome de Guerra do Efetivo'
            type="text"
            className="form-control"
            // value={surname}
            // onChange={(e: ChangeEvent<HTMLInputElement>) => setSurname(e.target.value)
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="endereco" className="form-label">
            Posto | Graduação
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
            placeholder='Digite o CPF'
            type="text"
            className="form-control"
            // value={street}
            // onChange={(e: ChangeEvent<HTMLInputElement>) => setStreet(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="endereco" className="form-label">
            Senha
          </label>
          <input
            placeholder='Digite a senha'
            type="password"
            className="form-control"
            // value={street}
            // onChange={(e: ChangeEvent<HTMLInputElement>) => setStreet(e.target.value)}
          />
        </div>
        </form>
        <button className='btn btn-primary col-md-2 mt-3'>
            Enviar dados
          </button>
          <button className='btn btn-secondary col-md-2 mt-3' style={{marginLeft: '5px'}}>
            Limpar
          </button>
    </div>
    </div>
  )
}
