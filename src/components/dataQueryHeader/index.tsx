import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import './styles.css'


export const DataQueryHeader = () => {
    const navigate = useNavigate()
    const logoImg = require('../../assets/logo.png')
      return (
        <Navbar expand="lg" style={{boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', backgroundColor: '#174858'}}>
        <Container fluid>
          <Navbar.Brand className='m-2 row g-3'>
          <img src={logoImg} className='col-md-1 img-fluid'/>
            <h1 className='navbar-title col-md-5'>SISTEMA DE CONTROLE DE ACESSO</h1>
        </Navbar.Brand>
        </Container>
      </Navbar>
      )
  }