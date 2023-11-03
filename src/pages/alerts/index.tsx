import React, {useState} from 'react';
import { Container, Dropdown, ButtonGroup, Table } from 'react-bootstrap';
import { Pagination } from '../../components/pagination';

const alertData = [
    {
      id: 1,
      category: 'Sucesso',
      message: 'Ação bem-sucedida.',
      timestamp: '2023-11-03 09:00',
    },
    {
      id: 2,
      category: 'Erro',
      message: 'Ocorreu um erro inesperado.',
      timestamp: '2023-11-02 15:30',
    },
    {
      id: 3,
      category: 'Informação',
      message: 'Esta é uma mensagem informativa.',
      timestamp: '2023-11-01 18:45',
    },
    {
      id: 4,
      category: 'Sucesso',
      message: 'Tarefa concluída com êxito.',
      timestamp: '2023-10-31 14:20',
    },
    {
      id: 5,
      category: 'Erro',
      message: 'Falha na conexão com o servidor.',
      timestamp: '2023-10-30 08:55',
    },
    {
      id: 6,
      category: 'Sucesso',
      message: 'Novo registro criado com sucesso.',
      timestamp: '2023-10-29 11:10',
    },
    {
      id: 7,
      category: 'Informação',
      message: 'Lembrete: Reunião às 14:00.',
      timestamp: '2023-10-28 16:30',
    },
    {
      id: 8,
      category: 'Erro',
      message: 'Acesso negado. Tente novamente.',
      timestamp: '2023-10-27 22:15',
    },
    {
      id: 9,
      category: 'Sucesso',
      message: 'Atualização realizada com sucesso.',
      timestamp: '2023-10-26 10:05',
    },
    {
      id: 10,
      category: 'Sucesso',
      message: 'Novo usuário cadastrado.',
      timestamp: '2023-10-25 13:40',
    },
    {
      id: 11,
      category: 'Erro',
      message: 'Erro crítico no sistema.',
      timestamp: '2023-10-24 07:20',
    },
    {
      id: 12,
      category: 'Informação',
      message: 'Bem-vindo ao sistema!',
      timestamp: '2023-10-23 19:55',
    },
    {
      id: 13,
      category: 'Sucesso',
      message: 'Pedido enviado com sucesso.',
      timestamp: '2023-10-22 12:30',
    },
    {
      id: 14,
      category: 'Erro',
      message: 'Problema na conexão com a Internet.',
      timestamp: '2023-10-21 08:45',
    },
    {
      id: 15,
      category: 'Informação',
      message: 'Leia as últimas notícias em nosso site.',
      timestamp: '2023-10-20 17:20',
    },
    {
      id: 16,
      category: 'Sucesso',
      message: 'Relatório gerado com êxito.',
      timestamp: '2023-10-19 14:15',
    },
    {
      id: 17,
      category: 'Erro',
      message: 'Servidor temporariamente indisponível.',
      timestamp: '2023-10-18 09:50',
    },
    {
      id: 18,
      category: 'Sucesso',
      message: 'Novo produto adicionado ao catálogo.',
      timestamp: '2023-10-17 10:30',
    },
    {
      id: 19,
      category: 'Informação',
      message: 'Atenção: Feriado na próxima semana.',
      timestamp: '2023-10-16 16:40',
    },
    {
      id: 20,
      category: 'Erro',
      message: 'Falha na sincronização dos dados.',
      timestamp: '2023-10-15 20:15',
    },
  ];
export function Alerts() {
    const [currentPage, setCurrentPage] = useState<number>(0);
    const totalPages = 2
      
  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected);
  };
  return (
    <Container>
      <h1 className='m-3'>Alertas</h1>

      <ButtonGroup className="mb-3">
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="categoria-dropdown" className='m-3'>
            Categoria
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Todos</Dropdown.Item>
            <Dropdown.Item>Sucesso</Dropdown.Item>
            <Dropdown.Item>Erro</Dropdown.Item>
            <Dropdown.Item>Informação</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </ButtonGroup>

      <ButtonGroup className="mb-3">
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="data-horario-dropdown">
            Data/Horário
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Todos</Dropdown.Item>
            <Dropdown.Item>Hoje</Dropdown.Item>
            <Dropdown.Item>Ontem</Dropdown.Item>
            <Dropdown.Item>Esta Semana</Dropdown.Item>
            <Dropdown.Item>Mês Atual</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </ButtonGroup>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Categoria</th>
            <th>Mensagem</th>
            <th>Data/Horário</th>
          </tr>
        </thead>
        <tbody>
          {alertData.map((alert) => (
            <tr key={alert.id}>
              <td>{alert.id}</td>
              <td>{alert.category}</td>
              <td>{alert.message}</td>
              <td>{alert.timestamp}</td>
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
