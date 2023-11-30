import React, {useState, ChangeEvent, useEffect} from 'react';
import { Container, Table, Dropdown, ButtonGroup, FormControl } from 'react-bootstrap';
import { FaEdit, FaTrash, FaUserPlus } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai'
import { Pagination } from '../../components/pagination';
import { Loader } from '../../components/loader';
import { useNavigate } from 'react-router-dom';

const usersData = [
    {
      id: 1,
      usuario: 'Alice',
      nivelAcesso: 'Visualizador',
      modulos: ['Efetivo', 'Crachás', 'Alertas'],
    },
    {
      id: 2,
      usuario: 'Bob',
      nivelAcesso: 'Identificador',
      modulos: ['Veículos', 'Postos de Serviço', 'Alertas'],
    },
    {
      id: 3,
      usuario: 'Charlie',
      nivelAcesso: 'Visualizador',
      modulos: ['Alertas', 'Efetivo', 'Visitantes'],
    },
    {
      id: 4,
      usuario: 'David',
      nivelAcesso: 'Identificador',
      modulos: ['Crachás', 'Veículos', 'Postos de Serviço'],
    },
    {
      id: 5,
      usuario: 'Emma',
      nivelAcesso: 'Visualizador',
      modulos: ['Alertas', 'Efetivo', 'Crachás'],
    },
    {
      id: 6,
      usuario: 'Frank',
      nivelAcesso: 'Identificador',
      modulos: ['Postos de Serviço', 'Veículos', 'Alertas'],
    },
    {
      id: 7,
      usuario: 'Grace',
      nivelAcesso: 'Visualizador',
      modulos: ['Crachás', 'Visitantes', 'Alertas'],
    },
    {
      id: 8,
      usuario: 'Henry',
      nivelAcesso: 'Identificador',
      modulos: ['Efetivo', 'Veículos', 'Postos de Serviço'],
    },
    {
      id: 9,
      usuario: 'Ivy',
      nivelAcesso: 'Visualizador',
      modulos: ['Alertas', 'Crachás', 'Visitantes'],
    },
    {
      id: 10,
      usuario: 'Jack',
      nivelAcesso: 'Identificador',
      modulos: ['Veículos', 'Postos de Serviço', 'Alertas'],
    },
    {
      id: 11,
      usuario: 'Katherine',
      nivelAcesso: 'Visualizador',
      modulos: ['Efetivo', 'Crachás', 'Alertas'],
    },
    {
      id: 12,
      usuario: 'Liam',
      nivelAcesso: 'Identificador',
      modulos: ['Veículos', 'Postos de Serviço', 'Alertas'],
    },
    {
      id: 13,
      usuario: 'Mia',
      nivelAcesso: 'Visualizador',
      modulos: ['Alertas', 'Efetivo', 'Crachás'],
    },
    {
      id: 14,
      usuario: 'Noah',
      nivelAcesso: 'Identificador',
      modulos: ['Postos de Serviço', 'Veículos', 'Alertas'],
    },
    {
      id: 15,
      usuario: 'Olivia',
      nivelAcesso: 'Visualizador',
      modulos: ['Crachás', 'Visitantes', 'Alertas'],
    },
    {
      id: 16,
      usuario: 'Peter',
      nivelAcesso: 'Identificador',
      modulos: ['Efetivo', 'Veículos', 'Postos de Serviço'],
    },
    {
      id: 17,
      usuario: 'Quinn',
      nivelAcesso: 'Visualizador',
      modulos: ['Alertas', 'Crachás', 'Visitantes'],
    },
    {
      id: 18,
      usuario: 'Rachel',
      nivelAcesso: 'Identificador',
      modulos: ['Veículos', 'Postos de Serviço', 'Alertas'],
    },
    {
      id: 19,
      usuario: 'Sophia',
      nivelAcesso: 'Visualizador',
      modulos: ['Efetivo', 'Crachás', 'Alertas'],
    },
    {
      id: 20,
      usuario: 'Thomas',
      nivelAcesso: 'Identificador',
      modulos: ['Veículos', 'Postos de Serviço', 'Alertas'],
    },
  ];
  
  const modules = [
    'Efetivo', 'Relatório-Efetivo', 'Relatório-Veículo', 'Crachás', 'Alertas',
    'Postos de Serviço', 'Unidades', 'Dependentes', 'Veículos', 'Gerência Mobile',
    'Usuários', 'Visitantes'
  ]


export function RegisteredUsers() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true)
  const totalPages = 2
  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected);
  };

  const [filteredUsers, setFilteredUser] = useState<any[]>(usersData)
  const [userFilter, setUserFilter] = useState<string>('');
  const [accessFilter, setAccessFilter] = useState<string | null>(null);
  const [modulesFilter, setModulesFilter] = useState<string[]>([]);

  const pageSize = 5; // Number of items per page



  const aplicarFiltros = () => {
    const filtered = usersData.filter((user) => {
        const nomeUsuario = user.usuario.toLowerCase();
        const nomeFiltrado = userFilter.toLowerCase();
        const acessoFiltrado = accessFilter ? user.nivelAcesso === accessFilter : true;
        const modulosFiltrados = modulesFilter.length === 0 ? true : user.modulos.some(modulo => modulesFilter.includes(modulo));
    
        return nomeUsuario.includes(nomeFiltrado) && acessoFiltrado && modulosFiltrados;
    });
    setFilteredUser(filtered);
  };
  useEffect(() => {
    setTimeout(() => {
     setLoading(false)
    }, 2000) 
   })
 
  const navigate = useNavigate()
  return (
<Container>
  <h1>Usuários Cadastrados</h1>
    {
      loading ? 
      <div style={{display: 'flex', justifyContent: 'center', height: '50vh'}}>
      <Loader/>
    </div> :
    <>
  <ButtonGroup className="mb-3 m-2">
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="filtro-ordem-dropdown">
        Usuário
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <FormControl
            type="text"
            value={userFilter}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setUserFilter(e.target.value)}
        />
      </Dropdown.Menu>
    </Dropdown>
  </ButtonGroup>

  <ButtonGroup className="mb-3 m-2">
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="filtro-guerra-dropdown">
        Nível de Acesso
      </Dropdown.Toggle>
      <Dropdown.Menu>
      <Dropdown.Item onClick={() => setAccessFilter(null)}>Todos</Dropdown.Item>
            <Dropdown.Item onClick={() => setAccessFilter('Identificador')}>Identificador</Dropdown.Item>
            <Dropdown.Item onClick={() => setAccessFilter('Visualizador')}>Visualizador</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </ButtonGroup>

  <ButtonGroup className="mb-3 m-2">
  <Dropdown>
          <Dropdown.Toggle variant="secondary" id="filtro-nome-dropdown">
            Módulos
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setModulesFilter([])}>Todos</Dropdown.Item>
            {modules.map((module, index) => (
              <Dropdown.Item key={index} onClick={() => {
                if (modulesFilter.includes(module)) {
                  setModulesFilter(modulesFilter.filter(item => item !== module));
                } else {
                  setModulesFilter([...modulesFilter, module]);
                }
              }}>
                {module}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
  </ButtonGroup>
  <button className='btn btn-primary m-2 mb-3' onClick={aplicarFiltros}>
    <AiOutlineSearch size={20}/>
    Pesquisar
  </button>

  <button className='btn btn-primary m-2 mb-3' onClick={() => navigate('/Cadastrar-Usuario')}>
    <FaUserPlus size={17}/>
     Criar novo usuário
  </button>

  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Usuário</th>
        <th>Nível de Acesso</th>
        <th>Módulos</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      {filteredUsers.map((user) => (
        <tr key={user.id}>
          <td>{user.usuario}</td>
          <td>{user.nivelAcesso}</td>
          {user.modulos.map((modulo: any, index: any) => (
            <li style={{listStyleType: 'none'}} key={index}>{modulo}</li>
          ))}
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