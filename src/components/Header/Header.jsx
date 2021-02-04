import React from 'react';
import './header.scss';
import logo from '../../assets/logo.svg';


function Header() {
  return (
    <header>
      <div className="header__container">
        <img src={logo} alt="Logo"/>
        <nav className='header__nav'>
          <ul>
            <li>About me</li>
            <li>Relationships</li>
            <li>Requirements</li>
            <li>Users</li>
            <li>Sign Up</li>
          </ul>
        </nav>
        <button type='button' className='burger-btn'></button>
      </div>
    </header>
  )
}

export default Header
