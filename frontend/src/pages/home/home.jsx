import React from 'react';
import PhotoDeProfil from '../../assets/photo-de-profil.png'
import Header from '../../components/header/header'
import { Link } from 'react-router-dom';
import Collapse from '../../components/main/collapse/collapse';
import 'font-awesome/css/font-awesome.min.css';
import IconRedux from '../../assets/icon-redux.png';
import Slider from '../../components/main/slider/slider';
import Data from '../../data/data.json'

function home() {
  return (
    <main>
      <Header />
      <section className='header-content' id='header-content'>
        <img src={PhotoDeProfil} alt="Photograpgie de Florian Martin" />
        <div className='description'>
          <h1>Florian MARTIN</h1>
          <p>
            <span className="colored-letter">C</span>réatif, j'apprécie la conception d'interfaces web élégantes et modernes pour offrir une expérience utilisateur de qualité.<br />
            <span className="colored-letter">O</span>ptimiste, je suis constamment à la recherche de nouvelles opportunités pour développer mes compétences.<br />
            <span className="colored-letter">D</span>évoué, j'accorde une grande importance à l'accessibilité web, veillant à ce que chaque utilisateur puisse profiter pleinement de nos sites.<br />
            <span className="colored-letter">E</span>sprit collaboratif, j'apprécie travailler en équipe pour créer des solutions innovantes et atteindre des standards de qualité élevés.
          </p>
        </div>
      </section>
      <section className='main-content-info'>
        <div className='left-content'>
          <h2>À propos</h2>
          <span><i className="fa-solid fa-envelope"></i> florian.martin700@gmail.com</span>
          <span><i className="fa-solid fa-location-dot"></i> Paris, France</span>
          <span><i className="fa-solid fa-cake-candles"></i> 26 ans</span>
          <span><i className="fa-solid fa-car"></i> Permis B</span>

          <h2>Compétences</h2>
          <span><i className="fa-brands fa-html5"></i> HTML</span>
          <span><i className="fa-brands fa-css3-alt"></i> CSS</span>
          <span><i className="fa-brands fa-sass"></i> SASS</span>
          <span><i className="fa-solid fa-bullseye"></i> SEO</span>
          <span><i className="fa-brands fa-js"></i> JavaScript</span>
          <span><i className="fa-brands fa-react"></i> React</span>
          <span><img src={IconRedux} alt="Icone redux" className='icon-redux'/>Redux</span>

          <h2>Réseaux sociaux</h2>
          <Link to='https://www.linkedin.com/in/florian-martin-477748266/' target="_blank"><i className="fa-brands fa-linkedin"></i> LinkedIn</Link>
          <Link to='https://github.com/FlorianMartinCode' target="_blank"><i className="fa-brands fa-github"></i> GitHub</Link>
        </div>
        <div className='right-content'>
          <Collapse title="Formation" />
          <Collapse title="Diplôme" />
        </div>
      </section>
      <section className='main-content-projects'>
        <Slider data={Data} />
      </section>
     
    </main>
  )
}

export default home