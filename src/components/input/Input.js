import React from 'react';
import './Input.css';

const Input = ({id,label='', type='text', className=''}) => {

  return (
    <div className="inputWrapper">
      <div className="labelsWrapper">
        {label
          && <label className="inputLabel" htmlFor={id}>{label}</label>
        }
      </div>
      <input
        type={type}
        name={id}
        id={id}
        className={className}
      />
    </div>
  );
};

export default Input;