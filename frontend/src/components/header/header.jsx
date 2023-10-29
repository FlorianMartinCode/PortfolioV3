import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <div className='nav-content'>
        <ul className="no-bullets">
            <li>
                <a href="#header-content" className="round-link round-link-1" aria-label="Aller à la section d'en-tête">
                <i className="fa-solid fa-user"></i>
                </a>
            </li>
            <li>
                <a href="#projets-content" className="round-link round-link-2" aria-label="Aller à la section projet">
                <i className="fa-solid fa-folder-open"></i>
                </a>
            </li>
            <li>
                <NavLink to="mailto:florian.martin700@gmail.com" className=" round-link-3" aria-label="Contacter moi">
                <i className="fa-solid fa-address-book"></i>
                </NavLink>
            </li>
        </ul>
      </div> 
    </nav>
  );
}

export default Header;
