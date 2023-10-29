import React from 'react';
import PhotoDeProfil from '../../assets/photo-de-profil.png'
import Header from '../../components/header/header'

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
        <div>

        </div>
        <div>

        </div>
      </section>
    </main>
  )
}

export default home