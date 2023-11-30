
import React from 'react';
import './CustomInput.css';

const CustomTextArea = ({ label, name, value, onChange,onKeyUp,onFocus,placeholder, error }) => {
  return (
    <div className="custom-input-container">
      <div>
        <label className="custom-label">{label}</label>
      </div>
      <div className="custom-input-error-container">
        <div>
          <textarea
            name={name}
            value={value}
            onChange={onChange}
            onKeyUp={onKeyUp}
            onFocus={onFocus}
            className="custom-input-textArea"
            placeholder={placeholder}
            rows="2" cols="50"
          />
        </div>
        <div className="error-message">{error}</div>
      </div>
    </div>
  );
};

export default CustomTextArea;
