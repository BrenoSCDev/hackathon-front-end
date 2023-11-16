import React from 'react';
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
            <Link to='/' onMouseEnter={() => setShowName(true)} onMouseLeave={() => setShowName(false)}>
              <div className='menu-icon'>
                <img src={userIcon} className='icon-img'/>
                <span>{showName && <p className='menu-hover-text'>CONTAS</p>}</span>
              </div>
            </Link>
            <Link to='/' onMouseEnter={() => setShowName(true)} onMouseLeave={() => setShowName(false)}>
              <div className='menu-icon'>
                <img src={reportIcon} className='icon-img'/>
                <span>{showName && <p className='menu-hover-text'>RELATORIOS</p>}</span>
              </div>
            </Link>
            <Link to='/' onMouseEnter={() => setShowName(true)} onMouseLeave={() => setShowName(false)}>
              <div className='menu-icon'>
                <img src={garageIcon} className='icon-img'/>
                <span>{showName && <p className='menu-hover-text'>POSTOS DE SERVIÇO</p>}</span>
              </div>
            </Link>
            <Link to='/' onMouseEnter={() => setShowName(true)} onMouseLeave={() => setShowName(false)}>
              <div className='menu-icon'>
                <img src={warningIcon} className='icon-img'/>
                <span>{showName && <p className='menu-hover-text'>ALERTAS</p>}</span>
              </div>
            </Link>
            <Link to='/' onMouseEnter={() => setShowName(true)} onMouseLeave={() => setShowName(false)}>
              <div className='menu-icon'>
                <img src={unitsIcon} className='icon-img'/>
                <span>{showName && <p className='menu-hover-text'>UNIDADES</p>}</span>
              </div>
            </Link>
            <Link to='/' onMouseEnter={() => setShowName(true)} onMouseLeave={() => setShowName(false)}>
              <div className='menu-icon'>
                <img src={personIcon} className='icon-img'/>
                <span>{showName && <p className='menu-hover-text'>ALERTAS</p>}</span>
              </div>
            </Link>
            <Link to='/' onMouseEnter={() => setShowName(true)} onMouseLeave={() => setShowName(false)}>
              <div className='menu-icon'>
                <img src={carIcon} className='icon-img'/>
                <span>{showName && <p className='menu-hover-text'>VEÍCULOS</p>}</span>
              </div>
            </Link>
            <Link to='/' onMouseEnter={() => setShowName(true)} onMouseLeave={() => setShowName(false)}>
              <div className='menu-icon'>
                <img src={configIcon} className='icon-img'/>
                <span>{showName && <p className='menu-hover-text'>ALERTAS</p>}</span>
              </div>
            </Link>
            <Link to='/' onMouseEnter={() => setShowName(true)} onMouseLeave={() => setShowName(false)}>
              <div className='menu-icon'>
                <img src={cardIcon} className='icon-img'/>
                <span>{showName && <p className='menu-hover-text'>ALERTAS</p>}</span>
              </div>
            </Link>
            <Link to='/' onMouseEnter={() => setShowName(true)} onMouseLeave={() => setShowName(false)}>
              <div className='menu-icon'>
                <img src={warningIcon} className='icon-img'/>
                <span>{showName && <p className='menu-hover-text'>ALERTAS</p>}</span>
              </div>
            </Link>
            <Link to='/' onMouseEnter={() => setShowName(true)} onMouseLeave={() => setShowName(false)}>
              <div className='menu-icon'>
                <img src={walkingIcon} className='icon-img'/>
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