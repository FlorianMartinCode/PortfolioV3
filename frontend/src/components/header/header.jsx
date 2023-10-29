import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <div className='nav-content'>
        <ul className="no-bullets">
            <li>
                <a href="#header-content" className="round-link round-link-1">
                <i className="fa-solid fa-user"></i>
                </a>
            </li>
            <li>
                <a href="#projets-content" className="round-link round-link-2">
                <i className="fa-solid fa-folder-open"></i>
                </a>
            </li>
            <li>
                <NavLink to='/contact' className="round-link round-link-3">
                <i className="fa-solid fa-address-book"></i>
                </NavLink>
            </li>
        </ul>
      </div> 
    </nav>
  );
}

export default Header;
