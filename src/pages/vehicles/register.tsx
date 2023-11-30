import React, {useState, ChangeEvent} from 'react'
import { server } from '../../services'
import { UseAuth } from '../../hooks'
export const RegisterVehicles = () => {

    const [resp, setResp] = useState('')
    const [plate, setPlate] = useState('')
    const [model, setModel] = useState('')
    const [RENAVAM, setRENAVAM] = useState('')
    const [type, setType] = useState('')
    const [color, setColor] = useState('')

    const {user} = UseAuth()

    const vehicleObject = {
        "id_efetivo": null,
        "id_visitante": 1,
        "tipo": type,
        "cor_veiculo": color,
        "placa": plate,
        "modelo": model,
        "renavam": RENAVAM,
        "nivel_acesso": 2,
        "ativo_veiculo": true,
        "sinc_veiculo": 1
      }
    async function RegisterVehicle(){
        try{
            const response = await server.post('/veiculo', vehicleObject)
        }catch(e){
            console.error(e)
        }
    }

    function handleVehicleType(event: ChangeEvent<HTMLSelectElement>) {
        const type = event.target.value;
        setType(type)
      }

  return (
    <div className="container mt-5 mb-5">
    <h1 className="mb-4">Registro de Veículo</h1>
    <form className='row g-3 col-md-12'>
        <div className="col-md-5">
          <label htmlFor="titulo" className="form-label">
            Responsável
          </label>
          <input
            placeholder='Digite o nome do responsável do veículo'
            type="text"
            className="form-control"
            value={resp}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setResp(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="descricao" className="form-label">
           Placa
          </label>
          <input
            placeholder='Digite a placa'
            className="form-control"
            value={plate}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPlate(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="endereco" className="form-label">
            Modelo
          </label>
          <input
            placeholder='Digite o modelo do veículo'
            type="text"
            className="form-control"
            value={model}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setModel(e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="endereco" className="form-label">
            Tipo
          </label>
          <select className="form-select" onChange={handleVehicleType}>
            <option selected>Tipo de veículo</option>
            <option value="Carro">Carro</option>
            <option value="Moto">Moto</option>
        </select>
        </div>
        <div className="col-md-3">
          <label htmlFor="endereco" className="form-label">
            Cor
          </label>
          <input
            placeholder='Digite a cor do veículo'
            type="text"
            className="form-control"
            value={color}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setColor(e.target.value)}
          />
        </div>

          <div className="col-md-7">
        <label htmlFor="endereco" className="form-label">
            RENAVAM
          </label>
          <input
            placeholder='Digite o RENAVAM do veículo'
            type="text"
            className="form-control"
            value={RENAVAM}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setRENAVAM(e.target.value)}
          />
          </div>
        </form>
          <button className='btn btn-primary col-md-2 mt-3' onClick={() => RegisterVehicle()}>
            Enviar dados
          </button>
          <button className='btn btn-secondary col-md-2 mt-3' style={{marginLeft: '5px'}}>
            Limpar
          </button>
    </div>
  )
}
