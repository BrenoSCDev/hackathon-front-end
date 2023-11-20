import React, {useState, useEffect} from 'react';
import { Container, Table, Dropdown, ButtonGroup, FormControl } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai'
import { Pagination } from '../../components/pagination';
import { Loader } from '../../components/loader';

const efetivosData = [
  {
    id: 1,
    numeroOrdem: 101,
    nomeGuerra: 'Soldado A',
    nomeCompleto: 'Fulano da Silva',
    unidade: '1ª Companhia',
  },
  {
    id: 2,
    numeroOrdem: 102,
    nomeGuerra: 'Soldado B',
    nomeCompleto: 'Ciclano Souza',
    unidade: '2ª Companhia',
  },
  {
    id: 3,
    numeroOrdem: 103,
    nomeGuerra: 'Soldado C',
    nomeCompleto: 'Beltrano Mendes',
    unidade: '3ª Companhia',
  },
  {
    id: 4,
    numeroOrdem: 104,
    nomeGuerra: 'Soldado D',
    nomeCompleto: 'Maria Oliveira',
    unidade: '1ª Companhia',
  },
  {
    id: 5,
    numeroOrdem: 105,
    nomeGuerra: 'Soldado E',
    nomeCompleto: 'João Santos',
    unidade: '2ª Companhia',
  },
  {
    id: 6,
    numeroOrdem: 106,
    nomeGuerra: 'Soldado F',
    nomeCompleto: 'Pedro Almeida',
    unidade: '3ª Companhia',
  },
  {
    id: 7,
    numeroOrdem: 107,
    nomeGuerra: 'Soldado G',
    nomeCompleto: 'Lucas Silva',
    unidade: '1ª Companhia',
  },
  {
    id: 8,
    numeroOrdem: 108,
    nomeGuerra: 'Soldado H',
    nomeCompleto: 'Ana Sousa',
    unidade: '2ª Companhia',
  },
  {
    id: 9,
    numeroOrdem: 109,
    nomeGuerra: 'Soldado I',
    nomeCompleto: 'Ricardo Pereira',
    unidade: '3ª Companhia',
  },
  {
    id: 10,
    numeroOrdem: 110,
    nomeGuerra: 'Soldado J',
    nomeCompleto: 'Mariana Santos',
    unidade: '1ª Companhia',
  },
  {
    id: 11,
    numeroOrdem: 111,
    nomeGuerra: 'Soldado K',
    nomeCompleto: 'José Lima',
    unidade: '2ª Companhia',
  },
  {
    id: 12,
    numeroOrdem: 112,
    nomeGuerra: 'Soldado L',
    nomeCompleto: 'Cláudia Souza',
    unidade: '3ª Companhia',
  },
  {
    id: 13,
    numeroOrdem: 113,
    nomeGuerra: 'Soldado M',
    nomeCompleto: 'Eduardo Silva',
    unidade: '1ª Companhia',
  },
  {
    id: 14,
    numeroOrdem: 114,
    nomeGuerra: 'Soldado N',
    nomeCompleto: 'Carla Pereira',
    unidade: '2ª Companhia',
  },
  {
    id: 15,
    numeroOrdem: 115,
    nomeGuerra: 'Soldado O',
    nomeCompleto: 'Rafael Santos',
    unidade: '3ª Companhia',
  },
  {
    id: 16,
    numeroOrdem: 116,
    nomeGuerra: 'Soldado P',
    nomeCompleto: 'Luana Almeida',
    unidade: '1ª Companhia',
  },
  {
    id: 17,
    numeroOrdem: 117,
    nomeGuerra: 'Soldado Q',
    nomeCompleto: 'Roberto Lima',
    unidade: '2ª Companhia',
  },
  {
    id: 18,
    numeroOrdem: 118,
    nomeGuerra: 'Soldado R',
    nomeCompleto: 'Sandra Oliveira',
    unidade: '3ª Companhia',
  },
  {
    id: 19,
    numeroOrdem: 119,
    nomeGuerra: 'Soldado S',
    nomeCompleto: 'Gustavo Sousa',
    unidade: '1ª Companhia',
  },
  {
    id: 20,
    numeroOrdem: 120,
    nomeGuerra: 'Soldado T',
    nomeCompleto: 'Patrícia Mendes',
    unidade: '2ª Companhia',
  },
];


export function RegisteredStaff() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true)
  const totalPages = 2
  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected);
  };
  const [filteredEfetivos, setFilteredEfetivos] = useState(efetivosData);
  const [filtroNumeroOrdem, setFiltroNumeroOrdem] = useState('');
  const [filtroNomeGuerra, setFiltroNomeGuerra] = useState('');
  const [filtroNomeCompleto, setFiltroNomeCompleto] = useState('');

  const aplicarFiltros = () => {
    const filtered = efetivosData.filter((efetivo) => {
      return (
        efetivo.numeroOrdem.toString().includes(filtroNumeroOrdem) &&
        efetivo.nomeGuerra.toLowerCase().includes(filtroNomeGuerra.toLowerCase()) &&
        efetivo.nomeCompleto.toLowerCase().includes(filtroNomeCompleto.toLowerCase())
      );
    });
    setFilteredEfetivos(filtered);
  };

  useEffect(() => {
   setTimeout(() => {
    setLoading(false)
   }, 2000) 
  })

  return (
    <Container>
      <h1>Efetivos Cadastrados</h1>

      {
        loading ? 
        <div style={{display: 'flex', justifyContent: 'center', height: '50vh'}}>
          <Loader/>
        </div>
        
      :
      <>
      <ButtonGroup className="mb-3 m-2">
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="filtro-ordem-dropdown">
            Número de Ordem
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <FormControl
              type="text"
              // placeholder="Filtrar por Número de Ordem"
              value={filtroNumeroOrdem}
              onChange={(e) => setFiltroNumeroOrdem(e.target.value)}
            />
          </Dropdown.Menu>
        </Dropdown>
      </ButtonGroup>

      <ButtonGroup className="mb-3 m-2">
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="filtro-guerra-dropdown">
            Nome de Guerra
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <FormControl
              type="text"
              // placeholder="Filtrar por Nome de Guerra"
              value={filtroNomeGuerra}
              onChange={(e) => setFiltroNomeGuerra(e.target.value)}
            />
          </Dropdown.Menu>
        </Dropdown>
      </ButtonGroup>

      <ButtonGroup className="mb-3 m-2">
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="filtro-nome-dropdown">
            Nome Completo
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <FormControl
              type="text"
              // placeholder="Filtrar por Nome Completo"
              value={filtroNomeCompleto}
              onChange={(e) => setFiltroNomeCompleto(e.target.value)}
            />
          </Dropdown.Menu>
        </Dropdown>
      </ButtonGroup>
      <button onClick={aplicarFiltros} className='btn btn-primary m-2 mb-3'>
        <AiOutlineSearch size={20}/>
        Pesquisar
      </button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Número de Ordem</th>
            <th>Nome de Guerra</th>
            <th>Nome Completo</th>
            <th>Unidade</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {filteredEfetivos.map((efetivo) => (
            <tr key={efetivo.id}>
              <td>{efetivo.numeroOrdem}</td>
              <td>{efetivo.nomeGuerra}</td>
              <td>{efetivo.nomeCompleto}</td>
              <td>{efetivo.unidade}</td>
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