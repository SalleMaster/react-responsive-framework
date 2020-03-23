import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const navRef = useRef(null);
  const [navbarShow, setNavbarShow] = useState(false);

  const toggleNavbar = () => {
    setNavbarShow(!navbarShow);
    console.log(navRef.current.clientHeight);
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container'>
        <a href='/' className='navbar-brand'>
          LOGO
        </a>
        <button className='navbar-toggler' onClick={toggleNavbar}>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div
          className={
            navbarShow
              ? 'navbar-collapse collapse show'
              : 'collapse navbar-collapse'
          }
          style={
            navbarShow
              ? { height: `${navRef.current.clientHeight}` }
              : { height: '' }
          }
          ref={navRef}
        >
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item active'>
              <a href='/' className='nav-link'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a href='/' className='nav-link'>
                Link
              </a>
            </li>
            <li className={`nav-item dropdown`}>
              <button className='nav-link dropdown-toggle'>Dropdown</button>
              <div className={'dropdown-menu show'}>
                <a href='/' className='dropdown-item'>
                  Action
                </a>
                <a href='/' className='dropdown-item'>
                  Another Action
                </a>
                <a href='/' className='dropdown-item'>
                  Third Action
                </a>
              </div>
            </li>
            <li className='nav-item'>
              <a href='/' className='nav-link disabled'>
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
