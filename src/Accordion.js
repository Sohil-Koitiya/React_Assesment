import React, { useState } from 'react';
import './Accordion.css';

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = index => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <button 
            className="accordion-header" 
            onClick={() => handleClick(index)}
          >
            {item.title}
          </button>
          {openIndex === index && (
            <div className="accordion-body">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
