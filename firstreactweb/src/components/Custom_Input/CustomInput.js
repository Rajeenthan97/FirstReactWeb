import React from 'react';
import './CustomInput.css';

const CustomInput = ({ label, name, value, onChange,onKeyUp,onFocus,placeholder, error,type,inputProps,disable
}) => {
  return (
    <div className="custom-input-container">
      <div>
        <label className="custom-label">{label}</label>
      </div>
      <div className="custom-input-error-container">
        <div>
          <input
          
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            onKeyUp={onKeyUp}
            onFocus={onFocus}
            className="custom-input"
            placeholder= {placeholder}
            {...inputProps} 
            disabled={disable}
            />
        </div>
        <div className="error-message">{error}</div>
      </div>
    </div>
  );
};

export default CustomInput;
