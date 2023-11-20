import React, { useState, useEffect } from 'react';
import { Container, Table, Form, Button, Row, Col } from 'react-bootstrap';
import { Pagination } from '../../components/pagination';
import { FaEdit, FaTrash, FaCarSide } from 'react-icons/fa';
import { Loader } from '../../components/loader';

const veiculosData = [
    {
      id: 1,
      donoVeiculo: 'Maria',
      cor: 'Preto',
      placa: 'XYZ5678',
      marca: 'Toyota',
      modelo: 'Corolla',
      renavam: '987654321',
      selo: '2024',
    },
    {
      id: 2,
      donoVeiculo: 'Pedro',
      cor: 'Branco',
      placa: 'DEF4321',
      marca: 'Honda',
      modelo: 'Civic',
      renavam: '123987456',
      selo: '2023',
    },
    {
      id: 3,
      donoVeiculo: 'Ana',
      cor: 'Vermelho',
      placa: 'MNO1234',
      marca: 'Ford',
      modelo: 'Fiesta',
      renavam: '456123789',
      selo: '2023',
    },
    {
      id: 4,
      donoVeiculo: 'Lucas',
      cor: 'Prata',
      placa: 'GHI7890',
      marca: 'Chevrolet',
      modelo: 'Cruze',
      renavam: '789456123',
      selo: '2024',
    },
    {
      id: 5,
      donoVeiculo: 'Carolina',
      cor: 'Azul',
      placa: 'JKL6543',
      marca: 'Volkswagen',
      modelo: 'Gol',
      renavam: '654789123',
      selo: '2023',
    },
    {
      id: 6,
      donoVeiculo: 'Rafael',
      cor: 'Verde',
      placa: 'PQR7890',
      marca: 'Fiat',
      modelo: 'Palio',
      renavam: '321654987',
      selo: '2024',
    },
    {
      id: 7,
      donoVeiculo: 'Julia',
      cor: 'Amarelo',
      placa: 'UVW2345',
      marca: 'Hyundai',
      modelo: 'HB20',
      renavam: '987321654',
      selo: '2023',
    },
    {
      id: 8,
      donoVeiculo: 'Gustavo',
      cor: 'Cinza',
      placa: 'STU5678',
      marca: 'Renault',
      modelo: 'Duster',
      renavam: '456789321',
      selo: '2024',
    },
    {
      id: 9,
      donoVeiculo: 'Laura',
      cor: 'Roxo',
      placa: 'OPQ4567',
      marca: 'Nissan',
      modelo: 'Versa',
      renavam: '321987654',
      selo: '2023',
    },
    {
      id: 10,
      donoVeiculo: 'Rodrigo',
      cor: 'Laranja',
      placa: 'IJK8901',
      marca: 'BMW',
      modelo: '320i',
      renavam: '789321654',
      selo: '2024',
    },
    {
      id: 11,
      donoVeiculo: 'Beatriz',
      cor: 'Bordô',
      placa: 'CDE6789',
      marca: 'Audi',
      modelo: 'A3',
      renavam: '654321987',
      selo: '2023',
    },
    {
      id: 12,
      donoVeiculo: 'Carlos',
      cor: 'Marrom',
      placa: 'LMN0123',
      marca: 'Mercedes-Benz',
      modelo: 'Classe A',
      renavam: '123456789',
      selo: '2024',
    },
    {
      id: 13,
      donoVeiculo: 'Patrícia',
      cor: 'Bege',
      placa: 'RST7890',
      marca: 'Peugeot',
      modelo: '208',
      renavam: '987654321',
      selo: '2023',
    },
    {
      id: 14,
      donoVeiculo: 'Felipe',
      cor: 'Dourado',
      placa: 'EFG5678',
      marca: 'Kia',
      modelo: 'Sportage',
      renavam: '456789123',
      selo: '2024',
    },
    {
      id: 15,
      donoVeiculo: 'Mariana',
      cor: 'Prata',
      placa: 'HIJ2345',
      marca: 'Mitsubishi',
      modelo: 'ASX',
      renavam: '321987654',
      selo: '2023',
    },
    {
      id: 16,
      donoVeiculo: 'Renato',
      cor: 'Vinho',
      placa: 'VWX3456',
      marca: 'Jeep',
      modelo: 'Compass',
      renavam: '654321987',
      selo: '2024',
    },
    {
      id: 17,
      donoVeiculo: 'Carla',
      cor: 'Verde Água',
      placa: 'YZA4567',
      marca: 'Land Rover',
      modelo: 'Evoque',
      renavam: '789654321',
      selo: '2023',
    },
    {
      id: 18,
      donoVeiculo: 'Diego',
      cor: 'Turquesa',
      placa: 'BCD5678',
      marca: 'Subaru',
      modelo: 'Impreza',
      renavam: '456123789',
      selo: '2024',
    },
    {
      id: 19,
      donoVeiculo: 'Fernanda',
      cor: 'Rosa',
      placa: 'EAB6789',
      marca: 'Volvo',
      modelo: 'XC40',
      renavam: '123789456',
      selo: '2023',
    },
    {
      id: 20,
      donoVeiculo: 'Aline',
      cor: 'Caramelo',
      placa: 'FGH7890',
      marca: 'Chery',
      modelo: 'Tiggo',
      renavam: '987456123',
      selo: '2024',
    },
  ];
  

export function VehiclePage() {
  const [loading, setLoading] = useState<boolean>(true)
  const [filteredData, setFilteredData] = useState(veiculosData);
  const [filtroDono, setFiltroDono] = useState('');
  const [filtroCor, setFiltroCor] = useState('');
  const [filtroPlaca, setFiltroPlaca] = useState('');
  const [filtroMarca, setFiltroMarca] = useState('');
  const [filtroModelo, setFiltroModelo] = useState('');
  const [filtroRenavam, setFiltroRenavam] = useState('');
  const [filtroSelo, setFiltroSelo] = useState('');

  const aplicarFiltros = () => {
    const filtered = veiculosData.filter((veiculo) => {
      return (
        veiculo.donoVeiculo.toLowerCase().includes(filtroDono.toLowerCase()) &&
        veiculo.cor.toLowerCase().includes(filtroCor.toLowerCase()) &&
        veiculo.placa.toLowerCase().includes(filtroPlaca.toLowerCase()) &&
        veiculo.marca.toLowerCase().includes(filtroMarca.toLowerCase()) &&
        veiculo.modelo.toLowerCase().includes(filtroModelo.toLowerCase()) &&
        veiculo.renavam.toLowerCase().includes(filtroRenavam.toLowerCase()) &&
        veiculo.selo.toLowerCase().includes(filtroSelo.toLowerCase())
      );
    });
    setFilteredData(filtered);
  };

  const totalPages = 3;
  const [currentPage, setCurrentPage] = useState<number>(0);
  function handlePageClick(data: { selected: number }) {
    setCurrentPage(data.selected);
  }
  useEffect(() => {
    setTimeout(() => {
     setLoading(false)
    }, 2000) 
   })
 

  return (
    <Container>
      <h1>Veículos Cadastrados</h1>
    {
      loading ? 
      <div style={{display: 'flex', justifyContent: 'center', height: '50vh'}}>
      <Loader/>
    </div> :
    <>
      <Row>
        <Col>
          <Form>
            <Row>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Filtrar por Dono do Veículo"
                  value={filtroDono}
                  onChange={(e) => setFiltroDono(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Filtrar por Cor"
                  value={filtroCor}
                  onChange={(e) => setFiltroCor(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Filtrar por Placa"
                  value={filtroPlaca}
                  onChange={(e) => setFiltroPlaca(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Filtrar por Marca"
                  value={filtroMarca}
                  onChange={(e) => setFiltroMarca(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Filtrar por Modelo"
                  value={filtroModelo}
                  onChange={(e) => setFiltroModelo(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Filtrar por Renavam"
                  value={filtroRenavam}
                  onChange={(e) => setFiltroRenavam(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Filtrar por Selo"
                  value={filtroSelo}
                  onChange={(e) => setFiltroSelo(e.target.value)}
                />
              </Col>
            </Row>
            <Button variant="primary" onClick={aplicarFiltros} className='mb-3 mt-3'>
              Aplicar Filtros
            </Button>
            <button className='btn btn-primary m-3' onClick={aplicarFiltros}>
            <FaCarSide size={17}/>
            Cadastrar Veículo
            </button>
          </Form>
        </Col>
      </Row>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Dono do Veículo</th>
            <th>Cor</th>
            <th>Placa</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Renavam</th>
            <th>Selo</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((veiculo) => (
            <tr key={veiculo.id}>
              <td>{veiculo.donoVeiculo}</td>
              <td>{veiculo.cor}</td>
              <td>{veiculo.placa}</td>
              <td>{veiculo.marca}</td>
              <td>{veiculo.modelo}</td>
              <td>{veiculo.renavam}</td>
              <td>{veiculo.selo}</td>
              <td>
                <button style={{background: 'none', border: 'none'}}>
                  <FaEdit color='#1E90FF' size={25}/>
                </button>
                <button style={{background: 'none', border: 'none'}}>
                  <FaTrash color='#1E90FF' size={22}/>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination totalPages={totalPages} handlePageClick={handlePageClick} />
    </>
    }
    </Container>
  );
}
