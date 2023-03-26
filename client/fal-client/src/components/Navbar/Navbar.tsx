import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { manager } from '../../utils/atoms'
import './Navbar.css'

const Navbar = () => {

  const navigate = useNavigate()

  const [menuOpen, setMenuOpen] = useState(false)

  const [currentManager, setCurrentManager] = useRecoilState(manager)

  const toggleHamburgerMenu = () => {
    setMenuOpen(!menuOpen)
  }

  console.log(currentManager.id)

  return (
    <div className='navbar'>
      <div className='navbar-content'>
        <div className='navbar-row' style={{ justifyContent: 'left' }}>
          <h1 className='pointer' onClick={() => currentManager.id == undefined ? navigate("/") : navigate("/overview")}>FAL helper</h1>
        </div>
        {currentManager.id == undefined ?
          <div className='navbar-row' style={{ width: '40%' }}>
            <h3 className='nav-text pointer underline'>Nyheter</h3>
            <h3 className='nav-text pointer underline'>Dokumentation</h3>
            <h3 className='nav-text pointer underline'>API-docs</h3>
          </div>
          :
          <div className='navbar-row' style={{ width: '40%' }}>
            <h3 className='nav-text pointer underline'>Översikt</h3>
            <h3 className='nav-text pointer underline' onClick={() => navigate("/schedule")}>Schema</h3>
            <h3 className='nav-text pointer underline'>H2H</h3>
            <h3 className='nav-text pointer underline'>Planera lag</h3>
          </div>
        }
        {currentManager.id == undefined ?
          <div className='navbar-row' style={{ justifyContent: 'right' }}>
            <button className='nav-button purple pointer underline' style={{ marginRight: '2vw' }} onClick={() => console.log("HEJ")}>Kontakt</button>
            <button className='nav-button green pointer underline' onClick={() => navigate("/login")}>Logga in</button>
          </div>
          :
          <div className='navbar-row' style={{ justifyContent: 'right' }}>
            <button className='nav-button green pointer underline'>Logga ut</button>
          </div>
        }
      </div>
      <div className='small-navbar-content'>
        <div className='hamburger-bar-row' style={{ justifyContent: 'left' }}>
          <h1 className='pointer' onClick={() => navigate("/")}>FAL helper</h1>
        </div>
        <div className='hamburger-bar-row' style={{ justifyContent: 'right' }}>
          <button id='hamburger-menu' onClick={toggleHamburgerMenu}>
            <div className='hamburger-row'></div>
            <div className='hamburger-row'></div>
            <div className='hamburger-row'></div>
          </button>
        </div>
      </div>
      <div className={`hamburger-menu-items ${menuOpen ? 'open' : ''}`}>
        {currentManager.id == undefined ?
          <ul>
            <li className='hamburger-menu-item pointer underline'>Nyheter</li>
            <li className='hamburger-menu-item pointer underline'>Dokumentation</li>
            <li className='hamburger-menu-item pointer underline'>API-Docs</li>
            <li className='hamburger-menu-item'>
              <button className='nav-button green pointer underline' onClick={() => toLogin()}>Logga in</button>
            </li>
          </ul>
          : 
          <ul>
            <li className='hamburger-menu-item pointer underline'>Översikt</li>
            <li className='hamburger-menu-item pointer underline' onClick={() => navigate("/schedule")}>Schema</li>
            <li className='hamburger-menu-item pointer underline'>H2H</li>
            <li className='hamburger-menu-item pointer underline'>Planera lag</li>
            <li className='hamburger-menu-item'>
              <button className='nav-button green pointer underline'>Logga ut</button>
            </li>
          </ul>
          }
      </div>
    </div>
  )

  function toLogin() {
    navigate("/login")
  }
}

export default Navbar
