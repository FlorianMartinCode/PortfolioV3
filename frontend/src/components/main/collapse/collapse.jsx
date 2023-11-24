import React, { useState } from 'react';

function Collapse(collapses) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className='collapse-content'>
      <h2 className='first-title' onClick={toggleCollapse}>
        {collapses.title}
        {isCollapsed ? <i className="fa fa-angle-down"></i> : <i className="fa fa-angle-up"></i>}
      </h2>
      {isCollapsed && (
        <div className='info-content'>
            {collapses.content.map((collapse, index) => (
                <div key={index} className='title'>
                  <h3>{collapse.title}</h3>
                  <p>{collapse.date}</p>
                  <div>
                    <p>{collapse.description}</p>
                  </div>
                </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default Collapse;
