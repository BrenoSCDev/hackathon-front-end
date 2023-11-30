import React, {useState, ChangeEvent} from 'react'
import { server } from '../../services'
import { UseAuth } from '../../hooks'

export const RegisterPost = () => {

    const [resp, setResp] = useState('')
    const [name, setName] = useState('')
    const [acceslvl, setAcceslvl] = useState('')

    const {user} = UseAuth()

    const postObject = {
        "nome": name,
        "nivel_acesso": 2,
        "ativo_posto": true,
        "sinc_posto": 1
      }

      async function RegisterPost(){
        try{
            const response = await server.post('/Posto', postObject)
        }catch(e){
            console.error(e)
        }
    }



  return (
    <> 
    <div className="container mt-5 mb-5">
    <h1 className="mb-4">Posto de Serviço Cadastro</h1>
    <div className='col-md-12 row'>
    <form className='row g-3 col-md-12'>
        <div className="col-md-6">
          <label htmlFor="titulo" className="form-label">
            Nome do Posto
          </label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="descricao" className="form-label">
           Nível de Acesso
          </label>
          <input
            className="form-control"
            value={acceslvl}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setAcceslvl(e.target.value)}
          />
        </div>
        </form>

        <button className='btn btn-primary col-md-2 mt-3' onClick={() => RegisterPost()}>
            Enviar dados
          </button>
          <button className='btn btn-secondary col-md-2 mt-3' style={{marginLeft: '5px'}}>
            Limpar
          </button>
    </div>
    </div>
    </>
  )
}