import React from 'react';
import './CustomButton.css'

const CustomButton = ({ label, onClick, type,disabled }) => {
    const buttonClassName = `button ${type}`;
  
    return (
      <button className={buttonClassName} onClick={onClick}
      disabled={disabled}>
        {label}
      </button>
    );
  };

export default CustomButton;
