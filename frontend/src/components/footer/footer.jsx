import React from 'react'
import { Link } from 'react-router-dom'
import LinkedIn from '../../assets/reseau/linkedin.png'
import GitHub from '../../assets/reseau/github.png'

function footer() {

  return (
    <footer className='footer-content'>
      <Link to="mailto:florian.martin700@gmail.com" className='btn-about'><span>Contact</span></Link>
      <div className='footer-link'>
        <Link to="https://www.linkedin.com/in/florian-martin-477748266/" target="_blank" rel="noreferrer">
          <img src={LinkedIn} alt="logo linkedin" />
        </Link>
        <Link to="https://github.com/FlorianMartinCode" target="_blank" rel="noreferrer">
          <img src={GitHub} alt="logo github" />
        </Link>
      </div>
      <p className='copyright'>© 2023 Florian MARTIN. Tous droits réservés.</p>
    </footer>
  )
}

export default footer