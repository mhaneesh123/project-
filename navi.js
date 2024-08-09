import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation(); // Get the current URL path

  return (
    <div className="sidebar bg-light" style={{ height: '100vh', width: '250px', position: 'fixed', top: 0, left: 0, padding: '1rem' }}>
      <h4>Navigation</h4>
      <ul className="nav flex-column">
        <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
          <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
        </li>
        <li className={`nav-item ${location.pathname === '/switch' ? 'active' : ''}`}>
          <Link className={`nav-link ${location.pathname === '/switch' ? 'active' : ''}`} to="/switch">switch</Link>
        </li>
        <li className={`nav-item ${location.pathname === '/door' ? 'active' : ''}`}>
          <Link className={`nav-link ${location.pathname === '/door' ? 'active' : ''}`} to="/door">door</Link>
        </li>
        <li className={`nav-item ${location.pathname === '/basintap' ? 'active' : ''}`}>
          <Link className={`nav-link ${location.pathname === '/basintap' ? 'active' : ''}`} to="/basintap">basintap</Link>
        </li>
        <li className={`nav-item ${location.pathname === '/bathroomtap' ? 'active' : ''}`}>
          <Link className={`nav-link ${location.pathname === '/bathroomtap' ? 'active' : ''}`} to="/bathroomtap">bathroomtap</Link>
        </li>
        <li className={`nav-item ${location.pathname === '/flush' ? 'active' : ''}`}>
          <Link className={`nav-link ${location.pathname === '/flush' ? 'active' : ''}`} to="/flush">flush</Link>
        </li>
        <li className={`nav-item ${location.pathname === '/walker' ? 'active' : ''}`}>
          <Link className={`nav-link ${location.pathname === '/walker' ? 'active' : ''}`} to="/walker">walker</Link>
        </li>
      
      </ul>
    </div>
  );
}

export default Sidebar;
