import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from '../../../data/data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const Data = data.slice().reverse();
    const Projet = Data[currentIndex];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + 1) % Data.length
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + Data.length) % Data.length
        );
    };

    useEffect(() => {
        const intervalId = setInterval(nextSlide, 10000);
        return () => clearInterval(intervalId);
    });

    return (
        <div className="slider" id='projets-content'>
            <h2>Projets</h2>
            <div className='slider-link'>
                <Link to={Projet.urlSite || Projet.urlGitHub} target="_blank" rel="noopener noreferrer">
                    <img className='cover' src={Projet.cover} alt={Projet.title}/>
                </Link>
            </div>
            <Link className='btn-left' to='#' onClick={prevSlide} aria-label="Flèche precedend">
                <FontAwesomeIcon icon={faChevronLeft} />
            </Link>
            <Link className='btn-right' to='#' onClick={nextSlide} aria-label="Flèche suivant">
                <FontAwesomeIcon icon={faChevronRight} />
            </Link>
            <ul className='bulletpoints'>
                {Data.map((item, index) => (
                    <li
                        key={index}
                        className={index === currentIndex ? 'active' : ''}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </ul>
        </div>
    );
}

export default Slider;