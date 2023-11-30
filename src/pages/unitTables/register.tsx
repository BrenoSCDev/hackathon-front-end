import React, {useState, ChangeEvent} from 'react'
import { server } from '../../services'
import { UseAuth } from '../../hooks'

export const RegisterUnit = () => {

    // const [resp, setResp] = useState('')
    // const [name, setName] = useState('')
    // const [acceslvl, setAcceslvl] = useState('')

    // const {user} = UseAuth()

    // const postObject = {
    //     "nome": "any",
    //     "ativo_unidade": "any",
    //     "sinc": "any"
    //   }

    //   async function RegisterUnit(){
    //     try{
    //         const response = await server.post('/unidade', postObject)
    //     }catch(e){
    //         console.error(e)
    //     }
    // }



  return (
    <> 
    <div className="container mt-5 mb-5">
    <h1 className="mb-4">Unidades Cadastro</h1>
    <div className='col-md-12 row'>
    <form className='row g-3 col-md-12'>
        <div className="col-md-8">
          <label htmlFor="titulo" className="form-label">
            Nome da Unidade
          </label>
          <input
            type="text"
            className="form-control"
            // value={}
            // onChange={(e: ChangeEvent<HTMLInputElement>) => (e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="descricao" className="form-label">
           Nível de Acesso
          </label>
          <input
            className="form-control"
            // value={}
            // onChange={(e: ChangeEvent<HTMLInputElement>) => (e.target.value)}
          />
        </div>
        <div className="col-md-8">
          <label htmlFor="descricao" className="form-label">
           Número Máximo de Efetivos
          </label>
          <input
            className="form-control"
            // value={}
            // onChange={(e: ChangeEvent<HTMLInputElement>) => (e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="descricao" className="form-label">
           Número Máximo de Veículos
          </label>
          <input
            className="form-control"
            // value={}
            // onChange={(e: ChangeEvent<HTMLInputElement>) => (e.target.value)}
          />
        </div>
        </form>

        <button className='btn btn-primary col-md-2 mt-3' onClick={() => RegisterUnit()}>
            Enviar dados
          </button>
          <button className='btn btn-secondary col-md-1 mt-3' style={{marginLeft: '5px'}}>
            Limpar
          </button>
    </div>
    </div>
    </>
  )
}