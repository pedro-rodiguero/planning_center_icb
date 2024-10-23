import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><Link to="/worship-teams">Worship Teams</Link></li>
          <li className="nav-item"><Link to="/setlists">Setlists</Link></li>
          <li className="nav-item"><Link to="/schedules">Schedules</Link></li>
          <li className="nav-item"><Link to="/members">Members</Link></li>
        </ul>
        <div className="account-dropdown">
          <button className="account-button">
            <img src="/account-icon.png" alt="Account" />
          </button>
          <div className="dropdown-content">
            <Link to="/signin">Sign In</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;