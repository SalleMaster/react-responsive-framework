import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const navbarNav = useRef(null);
  const [navClass, setNavClass] = useState('navbar-collapse collapse');
  const [navCollapsing, setCollapsing] = useState(false);
  const [navShow, setNavShow] = useState(false);

  const toggleNavbar = () => {
    setCollapsing(!navCollapsing);

    setTimeout(() => {
      setCollapsing(!navCollapsing);
    }, 300);
  };

  useEffect(() => {
    if (navCollapsing) {
      setNavClass('navbar-collapse collapsing');
    }
  }, [navCollapsing]);

  return (
    <nav className='navbar fixed-top navbar-expand-lg navbar-light bg-light'>
      <div className='container'>
        <a href='/' className='navbar-brand'>
          LOGO
        </a>
        <button className='navbar-toggler' onClick={toggleNavbar}>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div
          className={navClass}
          style={
            navCollapsing
              ? { height: `${navbarNav.current.clientHeight}px` }
              : { height: '' }
          }
        >
          <ul ref={navbarNav} className='navbar-nav ml-auto'>
            <li className='nav-item active'>
              <a href='/' className='nav-link'>
                Home
              </a>
            </li>
            <li className='nav-item '>
              <a href='/' className='nav-link'>
                Home
              </a>
            </li>
            <li className='nav-item '>
              <a href='/' className='nav-link'>
                Home
              </a>
            </li>
            <li className='nav-item '>
              <a href='/' className='nav-link'>
                Home
              </a>
            </li>
            <li className='nav-item '>
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
