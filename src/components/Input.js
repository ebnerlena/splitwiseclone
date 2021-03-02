import React from 'react';
// import styles from './Input.module.css'

const Input = ({
  inputName, labelText, type, onClick, onChange, value,
}) => {
  if (labelText) {
    return (
      <>
        <label htmlFor={inputName}>{labelText}</label>
        <input
          name={inputName}
          onClick={onClick}
          onChange={
            (evt) => onChange(evt)
}
          type={type}
          value={value}
        />
      </>
    );
  }

  return (
    <input onClick={onClick} onChange={(evt) => onChange(evt)} type={type} value={value} />
  );
};

export default Input;
