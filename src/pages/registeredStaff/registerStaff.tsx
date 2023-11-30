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
          <select className='form-control'>
            <option value="Cadete">Cadete</option>
            <option value="Aspirante">Aspirante</option>
            <option value="Segundo-Tenente">Segundo-Tenente</option>
            <option value="Primeiro-Tenente">Primeiro-Tenente</option>
            <option value="Capitão">Capitão</option>
            <option value="Major">Major</option>
            <option value="Tenente-Coronel">Tenente-Coronel</option>
            <option value="Coronel">Coronel</option>
            <option value="General de Brigada">General de Brigada</option>
            <option value="General de Divisão">General de Divisão</option>
            <option value="General de Exército">General de Exército</option>
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
