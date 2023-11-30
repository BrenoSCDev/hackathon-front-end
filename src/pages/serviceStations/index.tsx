import React, {useState, ChangeEvent, useEffect} from 'react';
import { Container, Table, Dropdown, ButtonGroup, FormControl } from 'react-bootstrap';
import { FaEdit, FaTrash, FaUserPlus,FaWarehouse} from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai'
import { Pagination } from '../../components/pagination';
import { Loader } from '../../components/loader';
import { useNavigate } from 'react-router-dom';

const postosData = [
    {
        id: 1,
        nomePosto: 'Hangar 1',
        nivelAcesso: 'administrativo',
    },
    {
        id: 2,
        nomePosto: 'Torre de Controle',
        nivelAcesso: 'aviões',
    },
    {
        id: 3,
        nomePosto: 'Hangar 2',
        nivelAcesso: 'administrativo',
    },
    {
        id: 4,
        nomePosto: 'Pista 1',
        nivelAcesso: 'aviões',
    },
    {
        id: 5,
        nomePosto: 'Hangar 3',
        nivelAcesso: 'administrativo',
    },
    {
        id: 6,
        nomePosto: 'Pátio de Manutenção',
        nivelAcesso: 'aviões',
    },
    {
        id: 7,
        nomePosto: 'Hangar 4',
        nivelAcesso: 'administrativo',
    },
    {
        id: 8,
        nomePosto: 'Pista 2',
        nivelAcesso: 'aviões',
    },
    {
        id: 9,
        nomePosto: 'Hangar 5',
        nivelAcesso: 'administrativo',
    },
    {
        id: 10,
        nomePosto: 'Torre de Comunicação',
        nivelAcesso: 'aviões',
    },
    {
        id: 11,
        nomePosto: 'Hangar 6',
        nivelAcesso: 'administrativo',
    },
    {
        id: 12,
        nomePosto: 'Pista 3',
        nivelAcesso: 'aviões',
    },
    {
        id: 13,
        nomePosto: 'Hangar 7',
        nivelAcesso: 'administrativo',
    },
    {
        id: 14,
        nomePosto: 'Pátio de Abastecimento',
        nivelAcesso: 'aviões',
    },
    {
        id: 15,
        nomePosto: 'Hangar 8',
        nivelAcesso: 'administrativo',
    },
    {
        id: 16,
        nomePosto: 'Pista 4',
        nivelAcesso: 'aviões',
    },
    {
        id: 17,
        nomePosto: 'Hangar 9',
        nivelAcesso: 'administrativo',
    },
    {
        id: 18,
        nomePosto: 'Torre de Segurança',
        nivelAcesso: 'aviões',
    },
    {
        id: 19,
        nomePosto: 'Hangar 10',
        nivelAcesso: 'administrativo',
    },
    {
        id: 20,
        nomePosto: 'Pista 5',
        nivelAcesso: 'aviões',
    },
];

  
  const modules = [
    'Efetivo', 'Relatório-Efetivo', 'Relatório-Veículo', 'Crachás', 'Alertas',
    'Postos de Serviço', 'Unidades', 'Dependentes', 'Veículos', 'Gerência Mobile',
    'Usuários', 'Visitantes'
  ]


export function ServiceStations() {
  const [loading, setLoading] = useState<boolean>(true)
  const [currentPage, setCurrentPage] = useState<number>(0);
  const totalPages = 2
  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected);
  };

  const [filteredPosts, setFilteredPosts] = useState<any[]>(postosData)
  const [userFilter, setUserFilter] = useState<string>('');
  const [accessFilter, setAccessFilter] = useState<string | null>(null);
  const [modulesFilter, setModulesFilter] = useState<string[]>([]);

  const pageSize = 5; // Number of items per page



  const aplicarFiltros = () => {
    const filtered = postosData.filter((postos) => {
        const postosFiltrados = postos.nomePosto.toLowerCase();
        const acessoFiltrado = accessFilter ? postos.nivelAcesso === accessFilter : true;
    
        return postosFiltrados && acessoFiltrado
    });
    setFilteredPosts(filtered);
  };
  useEffect(() => {
    setTimeout(() => {
     setLoading(false)
    }, 2000) 
   })
 
   const navigate = useNavigate()

  return (
<Container>
  <h1>Postos de Serviço</h1>
  
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

  <button className='btn btn-primary m-2 mb-3' onClick={() => navigate('/Cadastrar-Posto')}>
    <FaWarehouse size={17}/>
     Cadastrar novo Posto
  </button>

  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Nome do Posto</th>
        <th>Nível de Acesso</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      {filteredPosts.map((posto) => (
        <tr key={posto.id}>
          <td>{posto.nomePosto}</td>
          <td>{posto.nivelAcesso}</td>
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