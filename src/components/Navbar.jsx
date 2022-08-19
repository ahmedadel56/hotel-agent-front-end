import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineMenu, AiFillCloseCircle } from 'react-icons/ai';
import React, { useState } from 'react';
import Social from './Social';
import { logout } from '../redux/User/User';

const Navbar = () => {
  const { status } = useSelector((state) => state.User);
  console.log(status);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const displayMenu = () => {
    if (window.innerWidth < 769) {
      document.body.classList.toggle('hidden');
      setShowMenu(!showMenu);
    }
  };

  const handleClick = () => {
    if (window.innerWidth < 769 && showMenu === true) {
      setShowMenu(!showMenu);
      document.body.classList.toggle('hidden');
    }
  };

  const handleClickLogOut = () => {
    // eslint-disable-next-line no-unused-expressions
    dispatch(logout());
    navigate('/log-in');
    window.location.reload();

    if (window.innerWidth < 769 && showMenu === true) {
      setShowMenu(!showMenu);
      document.body.classList.toggle('hidden');
    }
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0',
    color: '$text',
  };

    return (
      <nav className="nav-style">
      <div id="logo" style={logoStyle}>
        <span id="logo-img" />
        <h1 id="logo-text">Hotel Agent</h1>
      </div>
      <div className="menu-mobile">
        <button
          className="hamburguer"
          type="button"
          label="menu"
          onClick={displayMenu}
        >
          {showMenu ? <AiFillCloseCircle /> : <AiOutlineMenu />}
        </button>
      </div>
      <ul className={showMenu ? 'menu-link mobile' : 'menu-link'}>
        <li className="menu-item" key={1}>
          <NavLink
            className="nav-link-style"
            onClick={handleClick}
            style={({ isActive }) => ({
              display: 'block',
              textDecoration: 'none',
              color: isActive ? 'white' : '#27363f',
              backgroundColor: isActive ? '#97bf0d' : 'white',
            })}
            to="/"
          >
            FEATURED HOTELS
          </NavLink>
        </li>
        <li className="menu-item" key={2}>
          <NavLink
            className="nav-link-style"
            onClick={handleClick}
            style={({ isActive }) => ({
              display: 'block',
              textDecoration: 'none',
              color: isActive ? 'white' : '#27363f',
              backgroundColor: isActive ? '#97bf0d' : 'white',
            })}
            to="/hotel"
          >
            HOTELS
          </NavLink>
        </li>
        <li className="menu-item" key={3}>
          <NavLink
            className="nav-link-style"
            onClick={handleClick}
            style={({ isActive }) => ({
              display: 'block',
              textDecoration: 'none',
              color: isActive ? 'white' : '#27363f',
              backgroundColor: isActive ? '#97bf0d' : 'white',
            })}
            to="/reserve"
          >
            RESERVE
          </NavLink>
        </li>
        <li className="menu-item" key={4}>
          <NavLink
            className="nav-link-style"
            onClick={handleClick}
            style={({ isActive }) => ({
              display: 'block',
              textDecoration: 'none',
              color: isActive ? 'white' : '#27363f',
              backgroundColor: isActive ? '#97bf0d' : 'white',
            })}
            to="/reservations"
          >
            RESERVATIONS
          </NavLink>
        </li>
        <li className="menu-item" key={7}>
          <Link to="/">
            <button
              type="button"
              className="nav-link-style log-out-btn"
              label="Reserve"
              onClick={handleClickLogOut}
            >
              LOG OUT
            </button>
          </Link>
        </li>
      </ul>
      <div className="social-menu">
        <Social />
      </div>
      <div className="footer-menu">
        <p>&copy; 2022 All rights reserved</p>
      </div>
    </nav>
    );
};

export default Navbar;
