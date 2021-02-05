import React from 'react';

import { FormContext } from '../../utils/Context'
import './header.scss';
import logo from '../../assets/logo.svg';

function Header({ visibleMobMenu }) {

  const formElem = React.useContext(FormContext);

  const navClick = () => {
    if (formElem.current) {
      formElem.current.scrollIntoView({block: "start", behavior: "smooth"});
    }
  }

  return (
    <header>
      <div className="header__container">
        <button type='button'><img src={logo} alt="Logo"/></button>
        <nav className='header__nav'>
          <ul>
            <li onClick={navClick}>About me</li>
            <li onClick={navClick}>Relationships</li>
            <li onClick={navClick}>Requirements</li>
            <li onClick={navClick}>Users</li>
            <li onClick={navClick}>Sign Up</li>
          </ul>
        </nav>
        <button type='button' className='burger-btn' onClick={visibleMobMenu}></button>
      </div>
    </header>
  )
}

export default Header
