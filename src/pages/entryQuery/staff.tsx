import React, {useState, useEffect} from 'react';
import { Container, Table, Form, Button } from 'react-bootstrap';
import Sidebar from '../../components/sidebar';
import { Pagination } from '../../components/pagination';
import { FaEdit, FaTrash, FaUserPlus } from 'react-icons/fa';
import { Loader } from '../../components/loader';

const entradaSaidaData = [
    {
      id: 1,
      nomeGuerra: 'Soldado A',
      dataInicial: '2023-11-01',
      dataFinal: '2023-11-02',
      horaInicial: '08:00',
      horaFinal: '16:00',
    },
    {
      id: 2,
      nomeGuerra: 'Soldado B',
      dataInicial: '2023-11-03',
      dataFinal: '2023-11-03',
      horaInicial: '09:30',
      horaFinal: '12:45',
    },
    {
      id: 3,
      nomeGuerra: 'Soldado C',
      dataInicial: '2023-11-05',
      dataFinal: '2023-11-06',
      horaInicial: '07:15',
      horaFinal: '15:30',
    },
    {
      id: 4,
      nomeGuerra: 'Soldado D',
      dataInicial: '2023-11-07',
      dataFinal: '2023-11-08',
      horaInicial: '10:00',
      horaFinal: '18:30',
    },
    {
      id: 5,
      nomeGuerra: 'Soldado E',
      dataInicial: '2023-11-10',
      dataFinal: '2023-11-10',
      horaInicial: '12:45',
      horaFinal: '16:20',
    },
    {
      id: 6,
      nomeGuerra: 'Soldado F',
      dataInicial: '2023-11-12',
      dataFinal: '2023-11-14',
      horaInicial: '08:30',
      horaFinal: '17:45',
    },
    {
      id: 7,
      nomeGuerra: 'Soldado G',
      dataInicial: '2023-11-15',
      dataFinal: '2023-11-15',
      horaInicial: '09:30',
      horaFinal: '12:00',
    },
    {
      id: 8,
      nomeGuerra: 'Soldado H',
      dataInicial: '2023-11-17',
      dataFinal: '2023-11-18',
      horaInicial: '13:00',
      horaFinal: '19:45',
    },
    {
      id: 9,
      nomeGuerra: 'Soldado I',
      dataInicial: '2023-11-19',
      dataFinal: '2023-11-20',
      horaInicial: '07:30',
      horaFinal: '16:15',
    },
    {
      id: 10,
      nomeGuerra: 'Soldado J',
      dataInicial: '2023-11-21',
      dataFinal: '2023-11-21',
      horaInicial: '10:30',
      horaFinal: '14:00',
    },
    {
      id: 11,
      nomeGuerra: 'Soldado K',
      dataInicial: '2023-11-23',
      dataFinal: '2023-11-23',
      horaInicial: '14:45',
      horaFinal: '16:30',
    },
    {
      id: 12,
      nomeGuerra: 'Soldado L',
      dataInicial: '2023-11-25',
      dataFinal: '2023-11-25',
      horaInicial: '09:15',
      horaFinal: '12:30',
    },
    {
      id: 13,
      nomeGuerra: 'Soldado M',
      dataInicial: '2023-11-27',
      dataFinal: '2023-11-27',
      horaInicial: '11:30',
      horaFinal: '14:45',
    },
    {
      id: 14,
      nomeGuerra: 'Soldado N',
      dataInicial: '2023-11-29',
      dataFinal: '2023-11-29',
      horaInicial: '08:00',
      horaFinal: '17:30',
    },
    {
      id: 15,
      nomeGuerra: 'Soldado O',
      dataInicial: '2023-11-30',
      dataFinal: '2023-12-01',
      horaInicial: '07:45',
      horaFinal: '18:15',
    },
    {
      id: 16,
      nomeGuerra: 'Soldado P',
      dataInicial: '2023-12-02',
      dataFinal: '2023-12-02',
      horaInicial: '08:30',
      horaFinal: '13:00',
    },
    {
      id: 17,
      nomeGuerra: 'Soldado Q',
      dataInicial: '2023-12-04',
      dataFinal: '2023-12-05',
      horaInicial: '10:15',
      horaFinal: '17:45',
    },
    {
      id: 18,
      nomeGuerra: 'Soldado R',
      dataInicial: '2023-12-06',
      dataFinal: '2023-12-06',
      horaInicial: '12:30',
      horaFinal: '15:30',
    },
    {
      id: 19,
      nomeGuerra: 'Soldado S',
      dataInicial: '2023-12-08',
      dataFinal: '2023-12-08',
      horaInicial: '09:00',
      horaFinal: '13:45',
    },
    {
      id: 20,
      nomeGuerra: 'Soldado T',
      dataInicial: '2023-12-10',
      dataFinal: '2023-12-10',
      horaInicial: '11:30',
      horaFinal: '16:00',
    },
  ];
  
export function EntryQueryPage() {
    const [loading, setLoading] = useState<boolean>(true)
    const [filteredData, setFilteredData] = useState(entradaSaidaData);
    const [filtroNome, setFiltroNome] = useState('');
    const [filtroDataFinal, setFiltroDataFinal] = useState('');
    const [filtroHoraInicial, setFiltroHoraInicial] = useState('');
    const [filtroHoraFinal, setFiltroHoraFinal] = useState('');
  
    const aplicarFiltros = () => {
      const filtered = entradaSaidaData.filter((registro) => {
        return (
          registro.nomeGuerra.toLowerCase().includes(filtroNome.toLowerCase()) &&
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
  
    useEffect(() => {
      setTimeout(() => {
       setLoading(false)
      }, 2000) 
     })
   

    return (
      <Container>
        <h1>Registros de Entrada e Saída de Efetivo</h1>
        {
          loading ? 
          <div style={{display: 'flex', justifyContent: 'center', height: '50vh'}}>
          <Loader/>
        </div> :
        <>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Filtrar por Nome de Guerra"
              value={filtroNome}
              onChange={(e) => setFiltroNome(e.target.value)}
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
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((registro) => (
              <tr key={registro.id}>
                <td>{registro.nomeGuerra}</td>
                <td>{registro.dataInicial}</td>
                <td>{registro.dataFinal}</td>
                <td>{registro.horaInicial}</td>
                <td>{registro.horaFinal}</td>
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
        <Pagination 
        totalPages={totalPages}
        handlePageClick={handlePageClick}
        />
        </>
        }
      </Container>
    );
}
