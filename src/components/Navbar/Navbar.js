import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [dropdownShow, setDropdownShow] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [navbarShow, setNavbarShow] = useState(false);

  const toggleDropdown = () => {
    setDropdownShow(!dropdownShow);
  };

  const toggleNavbar = () => {
    setNavbarShow(!navbarShow);
  };

  useEffect(() => {
    if (dropdownShow) {
      setTimeout(() => {
        setAnimate(true);
      }, 1);
    } else {
      setAnimate(false);
    }
  }, [dropdownShow]);

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <a href='/' className='navbar-brand'>
        LOGO
      </a>
      <button className='navbar-toggler' onClick={toggleNavbar}>
        <span className='navbar-toggler-icon'></span>
      </button>

      <div
        className={
          navbarShow
            ? 'collapse navbar-collapse show'
            : 'collapse navbar-collapse'
        }
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
          <li
            className={
              dropdownShow ? `nav-item dropdown show` : `nav-item dropdown`
            }
          >
            <a
              href='#'
              className='nav-link dropdown-toggle'
              onClick={toggleDropdown}
            >
              Dropdown
            </a>
            <div
              className={
                dropdownShow
                  ? `dropdown-menu show ${animate && 'animate'}`
                  : 'dropdown-menu'
              }
            >
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
    </nav>
  );
};

export default Navbar;
