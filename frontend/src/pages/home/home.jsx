import React from 'react';
import PhotoDeProfil from '../../assets/photo-de-profil.png'
import Header from '../../components/header/header'
import { Link } from 'react-router-dom';

function home() {
  return (
    <main>
      <Header />
      <section className='header-content' id='header-content'>
        <figure>
          <img src={PhotoDeProfil} alt="Photograpgie de Florian Martin" />
        </figure>
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
      <section className='main-content'>
        <div className='left-content'>
          <h2>À propos</h2>
          <span>florian.martin700@gmail.com</span>
          <span>Paris, France</span>
          <span>26 ans</span>
          <span>Permis B</span>

          <h2>Compétences</h2>
          <span>HTML</span>
          <span>CSS</span>
          <span>SASS</span>
          <span>SEO</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Redux</span>

          <h2>Réseaux sociaux</h2>
          <Link to='https://www.linkedin.com/in/florian-martin-477748266/' target="_blank">LinkedIn</Link>
          <Link to='https://github.com/FlorianMartinCode' target="_blank">GitHub</Link>
        </div>
        <div className='right-content'>
          <h2>Formation</h2>
          <div className='info-content'>
            <div className='title'>
              <h3>OpenClassrooms - Intégrateur web</h3>
              <p>Février 2023 - Décembre 2023</p>
            </div>
            <p>L’intégrateur Web est chargé d’intégrer les éléments visuels dans les pages d’un site web pour créer une interface harmonieuse, lisible et facilement navigable.</p>
          </div>
          <h2>Diplôme</h2>
          <div className='info-content'>
            <div className='title'>
              <h3>Diplôme de niveau 5 (bac +2)</h3>
              <p>Obtenue en Décembre 2023</p>
            </div>
          </div>
          <p>« Développeur intégrateur web » enregistrée au Répertoire National des Certifications Professionnelles, de niveau 5 (bac +2) sur les cadres français et européens des certifications (European Qualifications Framework).</p>
        </div>
      </section>
    </main>
  )
}

export default home