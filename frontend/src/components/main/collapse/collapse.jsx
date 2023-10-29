import React, { useState } from 'react';

function Collapse(props) {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className='right-content'>
            <h2 className='first-title' onClick={toggleCollapse}>
                {props.title}
                {isCollapsed ? (
                    <i className="fa fa-angle-down"></i>
                ) : (
                    <i className="fa fa-angle-up"></i>
                )}
            </h2>
            {isCollapsed && (
                <div className='info-content'>
                    <div className='title'>
                        {props.title === "Formation" ? (
                            <div className='info-content'>
                                <div className='title'>
                                    <h3>OpenClassrooms - Intégrateur web</h3>
                                    <p>Février 2023 - Décembre 2023</p>
                                </div>
                                <p>
                                    L’intégrateur Web est chargé d’intégrer les éléments visuels dans les pages d’un site web pour créer une interface harmonieuse, lisible et facilement navigable.
                                </p>
                            </div>
                        ) : props.title === "Diplôme" ? (
                            <div className='info-content'>
                                <div className='title'>
                                    <h3>Diplôme de niveau 5 (bac +2)</h3>
                                    <p>Obtenu en Décembre 2023</p>
                                </div>
                                <p>
                                    « Développeur intégrateur web » enregistré au Répertoire National des Certifications Professionnelles, de niveau 5 (bac +2) sur les cadres français et européens des certifications (European Qualifications Framework).
                                </p>
                            </div>
                        ) : null}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Collapse;