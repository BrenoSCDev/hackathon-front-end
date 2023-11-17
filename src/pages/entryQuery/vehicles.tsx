import React, {useState} from 'react';
import { Container, Table, Form, Button } from 'react-bootstrap';
import Sidebar from '../../components/sidebar';
import { Pagination } from '../../components/pagination';
const entradaSaidaData = [
    {
      id: 1,
      nomeVeiculo: 'Chevrolet Onix',
      dataInicial: '2023-11-01',
      dataFinal: '2023-11-02',
      horaInicial: '08:00',
      horaFinal: '16:00',
      responsavel: 'Carlos',
    },
    {
      id: 2,
      nomeVeiculo: 'Fiat Argo',
      dataInicial: '2023-11-03',
      dataFinal: '2023-11-03',
      horaInicial: '09:30',
      horaFinal: '12:45',
      responsavel: 'Ana',
    },
    {
      id: 3,
      nomeVeiculo: 'Volkswagen Gol',
      dataInicial: '2023-11-05',
      dataFinal: '2023-11-06',
      horaInicial: '07:15',
      horaFinal: '15:30',
      responsavel: 'Pedro',
    },
    {
      id: 4,
      nomeVeiculo: 'Ford Ka',
      dataInicial: '2023-11-07',
      dataFinal: '2023-11-08',
      horaInicial: '10:00',
      horaFinal: '18:30',
      responsavel: 'Laura',
    },
    {
      id: 5,
      nomeVeiculo: 'Renault Kwid',
      dataInicial: '2023-11-10',
      dataFinal: '2023-11-10',
      horaInicial: '12:45',
      horaFinal: '16:20',
      responsavel: 'Rafael',
    },
    {
      id: 6,
      nomeVeiculo: 'Chevrolet Prisma',
      dataInicial: '2023-11-12',
      dataFinal: '2023-11-14',
      horaInicial: '08:30',
      horaFinal: '17:45',
      responsavel: 'Mariana',
    },
    {
      id: 7,
      nomeVeiculo: 'Fiat Mobi',
      dataInicial: '2023-11-15',
      dataFinal: '2023-11-15',
      horaInicial: '09:30',
      horaFinal: '12:00',
      responsavel: 'Diego',
    },
    {
      id: 8,
      nomeVeiculo: 'Volkswagen Fox',
      dataInicial: '2023-11-17',
      dataFinal: '2023-11-18',
      horaInicial: '13:00',
      horaFinal: '19:45',
      responsavel: 'Julia',
    },
    {
      id: 9,
      nomeVeiculo: 'Toyota Etios',
      dataInicial: '2023-11-19',
      dataFinal: '2023-11-20',
      horaInicial: '07:30',
      horaFinal: '16:15',
      responsavel: 'Renato',
    },
    {
      id: 10,
      nomeVeiculo: 'Nissan March',
      dataInicial: '2023-11-21',
      dataFinal: '2023-11-21',
      horaInicial: '10:30',
      horaFinal: '14:00',
      responsavel: 'Carla',
    },
    {
      id: 11,
      nomeVeiculo: 'Hyundai HB20',
      dataInicial: '2023-11-23',
      dataFinal: '2023-11-23',
      horaInicial: '14:45',
      horaFinal: '16:30',
      responsavel: 'Gustavo',
    },
    {
      id: 12,
      nomeVeiculo: 'Fiat Uno',
      dataInicial: '2023-11-25',
      dataFinal: '2023-11-25',
      horaInicial: '09:15',
      horaFinal: '12:30',
      responsavel: 'Patrícia',
    },
    {
      id: 13,
      nomeVeiculo: 'Renault Sandero',
      dataInicial: '2023-11-27',
      dataFinal: '2023-11-27',
      horaInicial: '11:30',
      horaFinal: '14:45',
      responsavel: 'Felipe',
    },
    {
      id: 14,
      nomeVeiculo: 'Volkswagen Up!',
      dataInicial: '2023-11-29',
      dataFinal: '2023-11-29',
      horaInicial: '08:00',
      horaFinal: '17:30',
      responsavel: 'Beatriz',
    },
    {
      id: 15,
      nomeVeiculo: 'Chevrolet Spin',
      dataInicial: '2023-11-30',
      dataFinal: '2023-12-01',
      horaInicial: '07:45',
      horaFinal: '18:15',
      responsavel: 'Rodrigo',
    },
    {
      id: 16,
      nomeVeiculo: 'Fiat Cronos',
      dataInicial: '2023-12-02',
      dataFinal: '2023-12-02',
      horaInicial: '08:30',
      horaFinal: '13:00',
      responsavel: 'Caroline',
    },
    {
      id: 17,
      nomeVeiculo: 'Ford Ka Sedan',
      dataInicial: '2023-12-04',
      dataFinal: '2023-12-05',
      horaInicial: '10:15',
      horaFinal: '17:45',
      responsavel: 'Eduardo',
    },
    {
      id: 18,
      nomeVeiculo: 'Renault Logan',
      dataInicial: '2023-12-06',
      dataFinal: '2023-12-06',
      horaInicial: '12:30',
      horaFinal: '15:30',
      responsavel: 'Aline',
    },
    {
      id: 19,
      nomeVeiculo: 'Fiat Toro',
      dataInicial: '2023-12-08',
      dataFinal: '2023-12-08',
      horaInicial: '09:00',
      horaFinal: '13:45',
      responsavel: 'Leonardo',
    },
    {
      id: 20,
      nomeVeiculo: 'Chevrolet Tracker',
      dataInicial: '2023-12-10',
      dataFinal: '2023-12-10',
      horaInicial: '11:30',
      horaFinal: '16:00',
      responsavel: 'Fernanda',
    },
  ];
  
  
  
export function EntryVehiclePage() {
    const [filteredData, setFilteredData] = useState(entradaSaidaData);
    const [filtroNome, setFiltroNome] = useState('');
    const [filtroResp, setFiltroResp] = useState('');
    const [filtroDataFinal, setFiltroDataFinal] = useState('');
    const [filtroHoraInicial, setFiltroHoraInicial] = useState('');
    const [filtroHoraFinal, setFiltroHoraFinal] = useState('');
  
    const aplicarFiltros = () => {
      const filtered = entradaSaidaData.filter((registro) => {
        return (
            registro.responsavel.toLowerCase().includes(filtroNome.toLowerCase()) &&
            registro.nomeVeiculo.toLowerCase().includes(filtroResp.toLowerCase()) &&
            registro.dataFinal.includes(filtroDataFinal) &&
            registro.horaInicial.includes(filtroHoraInicial) &&
            registro.horaFinal.includes(filtroHoraFinal)
        );
      });
      setFilteredData(filtered);
    };
    const totalPages = 3
    const [currentPage, setCurrentPage] = useState<number>(0);
    function handlePageClick(data: { selected: number }){
      setCurrentPage(data.selected);
    };
  
    return (
      <Container>
        <h1>Registros de Entrada e Saída de Veículo</h1>
        
        <Form>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Filtrar por Responsável"
              value={filtroNome}
              onChange={(e) => setFiltroNome(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Filtrar por Nome do Veículo"
              value={filtroResp}
              onChange={(e) => setFiltroResp(e.target.value)}
            />
          </Form.Group>
  
          <Form.Group className="mb-3">
            <Form.Control
              type="date"
              placeholder="Filtrar por Data Final"
              value={filtroDataFinal}
              onChange={(e) => setFiltroDataFinal(e.target.value)}
            />
          </Form.Group>
  
          <Form.Group className="mb-3">
            <Form.Control
              type="time"
              placeholder="Filtrar por Hora Inicial"
              value={filtroHoraInicial}
              onChange={(e) => setFiltroHoraInicial(e.target.value)}
            />
          </Form.Group>
  
          <Form.Group className="mb-3">
            <Form.Control
              type="time"
              placeholder="Filtrar por Hora Final"
              value={filtroHoraFinal}
              onChange={(e) => setFiltroHoraFinal(e.target.value)}
            />
          </Form.Group>
  
          <Button variant="primary" onClick={aplicarFiltros}>
            Aplicar Filtros
          </Button>
        </Form>
  
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nome de Guerra</th>
              <th>Data Inicial</th>
              <th>Data Final</th>
              <th>Hora Inicial</th>
              <th>Hora Final</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((registro) => (
              <tr key={registro.id}>
                <td>{registro.responsavel}</td>
                <td>{registro.nomeVeiculo}</td>
                <td>{registro.dataInicial}</td>
                <td>{registro.dataFinal}</td>
                <td>{registro.horaInicial}</td>
                <td>{registro.horaFinal}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Pagination 
        totalPages={totalPages}
        handlePageClick={handlePageClick}
        />
      </Container>
    );
}
