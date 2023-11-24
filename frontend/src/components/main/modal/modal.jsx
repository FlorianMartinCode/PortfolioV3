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
        <div className='modal-centre'>
          <img src={data.cover} alt={data.alt} />
          <div className='desc-compétences'>
            <div>
              <h2>Client</h2>
              <p>{data.title}</p>
            </div>
            <div>
              <h2>Description</h2>
              <p>{data.description}</p>
            </div>
            <div className="compétences">
              {data.compétences.map((compétence) => (
                <img key={compétence.id} src={compétence.logo} alt={`compétences ${compétence.id}`} />
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