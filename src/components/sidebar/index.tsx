import React, { useState } from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink, Link } from 'react-router-dom';
import { logo } from '../../layout';
import { IoNewspaper } from "react-icons/io5";
import "./styles.css"
import { UseAuth } from '../../hooks';
import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownContent } from './styles';
import { useNavigate } from 'react-router-dom';


const Sidebar = () => {
  const [showName, setShowName] = React.useState(false);
  const userIcon = require('../../assets/user-3.png')
  const warningIcon = require('../../assets/warning.png')
  const reportIcon = require('../../assets/report.png')
  const garageIcon = require('../../assets/garage.png')
  const unitsIcon = require('../../assets/report-2.png')
  const personIcon = require('../../assets/people.png')
  const carIcon = require('../../assets/car.png')
  const configIcon = require('../../assets/config.png')
  const cardIcon = require('../../assets/id-card.png')
  const walkingIcon = require('../../assets/walking.png')
  const signOutIcon = require('../../assets/entrar.png')



  const [dropdownUsersOpen, setDropUsersdownOpen] = useState<boolean>(false)
  const [dropdownReportsOpen, setDropdownReportsOpen] = useState<boolean>(false)

  const navigate = useNavigate()

  const {signOut} = UseAuth()
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial', position: 'fixed' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#174858" className=''  breakpoint={1} toggled={false} minWidth='' maxWidth=''>
        <CDBSidebarHeader prefix=''>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            <img src={logo} style={{height: '80px'}}/>
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
          <div className='menu-icon' onMouseEnter={() => setDropUsersdownOpen(true)} onMouseLeave={() => setDropUsersdownOpen(false)}>
            <img src={userIcon} className='icon-img'/>
            {dropdownUsersOpen && (
              <DropdownContent>
                <p className='dropdown-options' onClick={() => navigate('/Usuarios-Cadastrados')}>Usuários</p>
                <p className='dropdown-options' onClick={() => navigate('/Efetivos-Cadastrados')}>Efetivos</p>
              </DropdownContent>
            )}
          </div>

          <div className='menu-icon' onMouseEnter={() => setDropdownReportsOpen(true)} onMouseLeave={() => setDropdownReportsOpen(false)}>
            <img src={reportIcon} className='icon-img'/>
            {dropdownReportsOpen && (
              <DropdownContent>
                <p className='dropdown-options' onClick={() => navigate('/Entrada-Efetivos')}>Efetivos</p>
                <p className='dropdown-options' onClick={() => navigate('/Entrada-Veiculos')}>Veículos</p>
              </DropdownContent>
            )}
          </div>
            <Link to='/Postos-de-Servico' onMouseEnter={() => setShowName(true)} onMouseLeave={() => setShowName(false)}>
              <div className='menu-icon'>
                <img src={garageIcon} className='icon-img'/>
                <span>{showName && <p className='menu-hover-text'>POSTOS DE SERVIÇO</p>}</span>
              </div>
            </Link>
            <Link to='/Alertas' onMouseEnter={() => setShowName(true)} onMouseLeave={() => setShowName(false)}>
              <div className='menu-icon'>
                <img src={warningIcon} className='icon-img'/>
                <span>{showName && <p className='menu-hover-text'>ALERTAS</p>}</span>
              </div>
            </Link>
            <Link to='/Unidades' onMouseEnter={() => setShowName(true)} onMouseLeave={() => setShowName(false)}>
              <div className='menu-icon'>
                <img src={unitsIcon} className='icon-img'/>
                <span>{showName && <p className='menu-hover-text'>UNIDADES</p>}</span>
              </div>
            </Link>
            <Link to='/Veiculos-Cadastrados' onMouseEnter={() => setShowName(true)} onMouseLeave={() => setShowName(false)}>
              <div className='menu-icon'>
                <img src={carIcon} className='icon-img'/>
                <span>{showName && <p className='menu-hover-text'>VEÍCULOS</p>}</span>
              </div>
            </Link>
            <Link to='/Gerencia' onMouseEnter={() => setShowName(true)} onMouseLeave={() => setShowName(false)}>
              <div className='menu-icon'>
                <img src={configIcon} className='icon-img'/>
                <span>{showName && <p className='menu-hover-text'>ALERTAS</p>}</span>
              </div>
            </Link>
            <Link to='/Crachas-Cadastrados' onMouseEnter={() => setShowName(true)} onMouseLeave={() => setShowName(false)}>
              <div className='menu-icon'>
                <img src={cardIcon} className='icon-img'/>
                <span>{showName && <p className='menu-hover-text'>ALERTAS</p>}</span>
              </div>
            </Link>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter>
          <div
            style={{
              padding: '20px 5px',
            }}
            onClick={signOut}
          >
            <img src={signOutIcon} className='icon-img'/>
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;