import React, { useState, useEffect } from 'react';
import { Container, Table, Form, Button } from 'react-bootstrap';
import { Pagination } from '../../components/pagination';
import { FaEdit, FaTrash, FaUserPlus } from 'react-icons/fa';
import { Loader } from '../../components/loader';

const unidadesData = [
    {
      id: 1,
      nomeUnidade: 'Unidade Central',
      numEfetivos: 120,
      numVeiculos: 25,
      nivelAcesso: 'Alto',
    },
    {
      id: 2,
      nomeUnidade: 'Unidade Norte',
      numEfetivos: 90,
      numVeiculos: 18,
      nivelAcesso: 'Médio',
    },
    {
      id: 3,
      nomeUnidade: 'Unidade Sul',
      numEfetivos: 80,
      numVeiculos: 15,
      nivelAcesso: 'Baixo',
    },
    {
      id: 4,
      nomeUnidade: 'Unidade Leste',
      numEfetivos: 110,
      numVeiculos: 20,
      nivelAcesso: 'Alto',
    },
    {
      id: 5,
      nomeUnidade: 'Unidade Oeste',
      numEfetivos: 100,
      numVeiculos: 22,
      nivelAcesso: 'Médio',
    },
    {
      id: 6,
      nomeUnidade: 'Unidade 6',
      numEfetivos: 95,
      numVeiculos: 17,
      nivelAcesso: 'Baixo',
    },
    {
      id: 7,
      nomeUnidade: 'Unidade 7',
      numEfetivos: 70,
      numVeiculos: 12,
      nivelAcesso: 'Alto',
    },
    {
      id: 8,
      nomeUnidade: 'Unidade 8',
      numEfetivos: 85,
      numVeiculos: 19,
      nivelAcesso: 'Médio',
    },
    {
      id: 9,
      nomeUnidade: 'Unidade 9',
      numEfetivos: 75,
      numVeiculos: 14,
      nivelAcesso: 'Baixo',
    },
    {
      id: 10,
      nomeUnidade: 'Unidade 10',
      numEfetivos: 105,
      numVeiculos: 21,
      nivelAcesso: 'Alto',
    },
    {
      id: 11,
      nomeUnidade: 'Unidade 11',
      numEfetivos: 88,
      numVeiculos: 16,
      nivelAcesso: 'Médio',
    },
    {
      id: 12,
      nomeUnidade: 'Unidade 12',
      numEfetivos: 78,
      numVeiculos: 13,
      nivelAcesso: 'Baixo',
    },
    {
      id: 13,
      nomeUnidade: 'Unidade 13',
      numEfetivos: 115,
      numVeiculos: 23,
      nivelAcesso: 'Alto',
    },
    {
      id: 14,
      nomeUnidade: 'Unidade 14',
      numEfetivos: 92,
      numVeiculos: 18,
      nivelAcesso: 'Médio',
    },
    {
      id: 15,
      nomeUnidade: 'Unidade 15',
      numEfetivos: 82,
      numVeiculos: 15,
      nivelAcesso: 'Baixo',
    },
    {
      id: 16,
      nomeUnidade: 'Unidade 16',
      numEfetivos: 98,
      numVeiculos: 20,
      nivelAcesso: 'Alto',
    },
    {
      id: 17,
      nomeUnidade: 'Unidade 17',
      numEfetivos: 87,
      numVeiculos: 16,
      nivelAcesso: 'Médio',
    },
    {
      id: 18,
      nomeUnidade: 'Unidade 18',
      numEfetivos: 76,
      numVeiculos: 14,
      nivelAcesso: 'Baixo',
    },
    {
      id: 19,
      nomeUnidade: 'Unidade 19',
      numEfetivos: 107,
      numVeiculos: 22,
      nivelAcesso: 'Alto',
    },
    {
      id: 20,
      nomeUnidade: 'Unidade 20',
      numEfetivos: 94,
      numVeiculos: 17,
      nivelAcesso: 'Médio',
    },
  ];
  

export function UnitTablePage() {
  const [loading, setLoading] = useState<boolean>(true)
  const [filteredData, setFilteredData] = useState(unidadesData);
  const [filtroNome, setFiltroNome] = useState('');
  const [filtroEfetivos, setFiltroEfetivos] = useState('');
  const [filtroVeiculos, setFiltroVeiculos] = useState('');
  const [filtroAcesso, setFiltroAcesso] = useState('');

  const aplicarFiltros = () => {
    const filtered = unidadesData.filter((unidade) => {
      return (
        unidade.nomeUnidade.toLowerCase().includes(filtroNome.toLowerCase()) &&
        String(unidade.numEfetivos).includes(filtroEfetivos) &&
        String(unidade.numVeiculos).includes(filtroVeiculos) &&
        unidade.nivelAcesso.toLowerCase().includes(filtroAcesso.toLowerCase())
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
      <h1>Tabela de Unidades</h1>
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
            placeholder="Filtrar por Nome de Unidade"
            value={filtroNome}
            onChange={(e) => setFiltroNome(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Filtrar por Número de Efetivos"
            value={filtroEfetivos}
            onChange={(e) => setFiltroEfetivos(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Filtrar por Número de Veículos"
            value={filtroVeiculos}
            onChange={(e) => setFiltroVeiculos(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Filtrar por Nível de Acesso"
            value={filtroAcesso}
            onChange={(e) => setFiltroAcesso(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={aplicarFiltros}>
          Aplicar Filtros
        </Button>
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome de Unidade</th>
            <th>Número de Efetivos</th>
            <th>Número de Veículos</th>
            <th>Nível de Acesso</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((unidade) => (
            <tr key={unidade.id}>
              <td>{unidade.nomeUnidade}</td>
              <td>{unidade.numEfetivos}</td>
              <td>{unidade.numVeiculos}</td>
              <td>{unidade.nivelAcesso}</td>
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
