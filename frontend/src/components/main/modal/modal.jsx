import React, { useEffect } from 'react';

function Modal({ data, onClose }) {
  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [onClose]);

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="close-button">
          ✖
        </button>
        <h2>{data.title}</h2>
        <div className='modal-centre'>
          <img src={data.cover} alt={data.alt} />
          <div className='desc-logo'>
            <p>{data.description}</p>
            <div className="logos">
                {data.logos.map((logo, index) => (
                <img key={index} src={logo} alt={`Logo ${index}`} />
                ))}
            </div>
          </div>
        </div>
        <div className="modal-links">
          {data.urlSite && (
            <a href={data.urlSite} target="_blank" rel="noopener noreferrer">
              Voir le site
            </a>
          )}
          {data.urlGitHub && (
            <a href={data.urlGitHub} target="_blank" rel="noopener noreferrer">
              Voir sur GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;