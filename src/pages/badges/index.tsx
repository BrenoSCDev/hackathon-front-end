import React, { useState } from 'react';
import { Container, Table, Form, Button } from 'react-bootstrap';
import { Pagination } from '../../components/pagination';
import { FaEdit, FaTrash, FaUserPlus } from 'react-icons/fa';
const crachasData = [
    {
      id: 1,
      nomeCompleto: 'Maria da Silva',
      cpf: '111.222.333-44',
      telefone: '(11) 98765-4321',
      tipo: 'Visitante',
      dataInicioAcesso: '2023-11-01',
      dataFinalAcesso: '2023-11-05',
      nivelAcesso: 'Baixo',
    },
    {
      id: 2,
      nomeCompleto: 'João Pereira',
      cpf: '555.666.777-88',
      telefone: '(21) 98765-1234',
      tipo: 'Dependente',
      dataInicioAcesso: '2023-11-02',
      dataFinalAcesso: '2023-11-10',
      nivelAcesso: 'Médio',
    },
    {
      id: 3,
      nomeCompleto: 'Ana Souza',
      cpf: '999.888.777-66',
      telefone: '(31) 98765-5678',
      tipo: 'Militar',
      dataInicioAcesso: '2023-11-03',
      dataFinalAcesso: '2023-11-15',
      nivelAcesso: 'Alto',
    },
    {
      id: 4,
      nomeCompleto: 'Pedro Oliveira',
      cpf: '222.333.444-55',
      telefone: '(41) 98765-8765',
      tipo: 'Visitante',
      dataInicioAcesso: '2023-11-04',
      dataFinalAcesso: '2023-11-20',
      nivelAcesso: 'Baixo',
    },
    {
      id: 5,
      nomeCompleto: 'Carolina Almeida',
      cpf: '777.888.999-00',
      telefone: '(51) 98765-4321',
      tipo: 'Dependente',
      dataInicioAcesso: '2023-11-05',
      dataFinalAcesso: '2023-11-25',
      nivelAcesso: 'Médio',
    },
    {
      id: 6,
      nomeCompleto: 'Rafael Santos',
      cpf: '333.444.555-66',
      telefone: '(61) 98765-1234',
      tipo: 'Militar',
      dataInicioAcesso: '2023-11-06',
      dataFinalAcesso: '2023-11-30',
      nivelAcesso: 'Alto',
    },
    {
      id: 7,
      nomeCompleto: 'Julia Lima',
      cpf: '555.444.333-22',
      telefone: '(71) 98765-5678',
      tipo: 'Visitante',
      dataInicioAcesso: '2023-11-07',
      dataFinalAcesso: '2023-12-01',
      nivelAcesso: 'Baixo',
    },
    {
      id: 8,
      nomeCompleto: 'Gustavo Martins',
      cpf: '888.777.666-55',
      telefone: '(81) 98765-8765',
      tipo: 'Dependente',
      dataInicioAcesso: '2023-11-08',
      dataFinalAcesso: '2023-12-05',
      nivelAcesso: 'Médio',
    },
    {
      id: 9,
      nomeCompleto: 'Laura Pereira',
      cpf: '666.777.888-99',
      telefone: '(91) 98765-4321',
      tipo: 'Militar',
      dataInicioAcesso: '2023-11-09',
      dataFinalAcesso: '2023-12-10',
      nivelAcesso: 'Alto',
    },
    {
      id: 10,
      nomeCompleto: 'Rodrigo Oliveira',
      cpf: '999.888.777-66',
      telefone: '(101) 98765-1234',
      tipo: 'Visitante',
      dataInicioAcesso: '2023-11-10',
      dataFinalAcesso: '2023-12-15',
      nivelAcesso: 'Baixo',
    },
    {
      id: 11,
      nomeCompleto: 'Beatriz Silva',
      cpf: '777.666.555-44',
      telefone: '(111) 98765-5678',
      tipo: 'Dependente',
      dataInicioAcesso: '2023-11-11',
      dataFinalAcesso: '2023-12-20',
      nivelAcesso: 'Médio',
    },
    {
      id: 12,
      nomeCompleto: 'Carlos Rodrigues',
      cpf: '444.555.666-77',
      telefone: '(121) 98765-8765',
      tipo: 'Militar',
      dataInicioAcesso: '2023-11-12',
      dataFinalAcesso: '2023-12-25',
      nivelAcesso: 'Alto',
    },
    {
      id: 13,
      nomeCompleto: 'Patrícia Costa',
      cpf: '888.999.000-11',
      telefone: '(131) 98765-4321',
      tipo: 'Visitante',
      dataInicioAcesso: '2023-11-13',
      dataFinalAcesso: '2023-12-30',
      nivelAcesso: 'Baixo',
    },
    {
      id: 14,
      nomeCompleto: 'Felipe Oliveira',
      cpf: '777.888.999-00',
      telefone: '(141) 98765-1234',
      tipo: 'Dependente',
      dataInicioAcesso: '2023-11-14',
      dataFinalAcesso: '2023-12-31',
      nivelAcesso: 'Médio',
    },
    {
      id: 15,
      nomeCompleto: 'Mariana Souza',
      cpf: '333.444.555-66',
      telefone: '(151) 98765-5678',
      tipo: 'Militar',
      dataInicioAcesso: '2023-11-15',
      dataFinalAcesso: '2023-12-31',
      nivelAcesso: 'Alto',
    },
    {
      id: 16,
      nomeCompleto: 'Renato Lima',
      cpf: '111.222.333-44',
      telefone: '(161) 98765-8765',
      tipo: 'Visitante',
      dataInicioAcesso: '2023-11-16',
      dataFinalAcesso: '2023-12-31',
      nivelAcesso: 'Baixo',
    },
    {
      id: 17,
      nomeCompleto: 'Carla Santos',
      cpf: '555.666.777-88',
      telefone: '(171) 98765-4321',
      tipo: 'Dependente',
      dataInicioAcesso: '2023-11-17',
      dataFinalAcesso: '2023-12-31',
      nivelAcesso: 'Médio',
    },
    {
      id: 18,
      nomeCompleto: 'Diego Oliveira',
      cpf: '999.888.777-66',
      telefone: '(181) 98765-1234',
      tipo: 'Militar',
      dataInicioAcesso: '2023-11-18',
      dataFinalAcesso: '2023-12-31',
      nivelAcesso: 'Alto',
    },
    {
      id: 19,
      nomeCompleto: 'Fernanda Silva',
      cpf: '222.333.444-55',
      telefone: '(191) 98765-5678',
      tipo: 'Visitante',
      dataInicioAcesso: '2023-11-19',
      dataFinalAcesso: '2023-12-31',
      nivelAcesso: 'Baixo',
    },
    {
      id: 20,
      nomeCompleto: 'Aline Souza',
      cpf: '777.888.999-00',
      telefone: '(201) 98765-8765',
      tipo: 'Dependente',
      dataInicioAcesso: '2023-11-20',
      dataFinalAcesso: '2023-12-31',
      nivelAcesso: 'Médio',
    },
  ];
  

  export function BadgePage() {
    const [filteredData, setFilteredData] = useState(crachasData);
    const [filtroNome, setFiltroNome] = useState('');
    const [filtroCPF, setFiltroCPF] = useState('');
    const [filtroTelefone, setFiltroTelefone] = useState('');
    const [filtroTipo, setFiltroTipo] = useState('');
    const [filtroDataInicio, setFiltroDataInicio] = useState('');
    const [filtroDataFinal, setFiltroDataFinal] = useState('');
    const [filtroNivelAcesso, setFiltroNivelAcesso] = useState('');
  
    const tiposDeCracha = ['Visitante', 'Dependente', 'Militar'];
  
    const aplicarFiltros = () => {
      const filtered = crachasData.filter((cracha) => {
        return (
          cracha.nomeCompleto.toLowerCase().includes(filtroNome.toLowerCase()) &&
          cracha.cpf.includes(filtroCPF) &&
          cracha.telefone.includes(filtroTelefone) &&
          cracha.tipo.toLowerCase().includes(filtroTipo.toLowerCase()) &&
          cracha.dataInicioAcesso.includes(filtroDataInicio) &&
          cracha.dataFinalAcesso.includes(filtroDataFinal) &&
          cracha.nivelAcesso.toLowerCase().includes(filtroNivelAcesso.toLowerCase())
        );
      });
      setFilteredData(filtered);
    };

  const totalPages = 3;
  const [currentPage, setCurrentPage] = useState<number>(0);
  function handlePageClick(data: { selected: number }) {
    setCurrentPage(data.selected);
  }

  return (
    <Container>
      <h1>Crachás Cadastrados</h1>

      <Form>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Filtrar por Nome Completo"
            value={filtroNome}
            onChange={(e) => setFiltroNome(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Filtrar por CPF"
            value={filtroCPF}
            onChange={(e) => setFiltroCPF(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Filtrar por Telefone"
            value={filtroTelefone}
            onChange={(e) => setFiltroTelefone(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Select
          aria-label="Filtrar por Tipo"
          value={filtroTipo}
          onChange={(e) => setFiltroTipo(e.target.value)}
        >
          <option value="">Filtrar por Tipo</option>
          {tiposDeCracha.map((tipo) => (
            <option key={tipo} value={tipo}>
              {tipo}
            </option>
          ))}
        </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="date"
            placeholder="Filtrar por Data de Início de Acesso"
            value={filtroDataInicio}
            onChange={(e) => setFiltroDataInicio(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="date"
            placeholder="Filtrar por Data de Final de Acesso"
            value={filtroDataFinal}
            onChange={(e) => setFiltroDataFinal(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Filtrar por Nível de Acesso"
            value={filtroNivelAcesso}
            onChange={(e) => setFiltroNivelAcesso(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={aplicarFiltros}>
          Aplicar Filtros
        </Button>
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome Completo</th>
            <th>CPF</th>
            <th>Telefone</th>
            <th>Tipo</th>
            <th>Data Início Acesso</th>
            <th>Data Final Acesso</th>
            <th>Nível de Acesso</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((cracha) => (
            <tr key={cracha.id}>
              <td>{cracha.nomeCompleto}</td>
              <td>{cracha.cpf}</td>
              <td>{cracha.telefone}</td>
              <td>{cracha.tipo}</td>
              <td>{cracha.dataInicioAcesso}</td>
              <td>{cracha.dataFinalAcesso}</td>
              <td>{cracha.nivelAcesso}</td>
              <td>
                <button>
                <FaEdit /> Atualizar
                </button>
                <button>
                <FaTrash /> Excluir
                </button>
            </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination totalPages={totalPages} handlePageClick={handlePageClick} />
    </Container>
  );
}
