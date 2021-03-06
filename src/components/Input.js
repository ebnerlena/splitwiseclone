import React from 'react';
import styles from './Input.module.scss';

const Input = ({
  inputName, id, labelText, type, onClick, onChange, value,
}) => {
  if (labelText) {
    return (
      <div className="input">
        <label htmlFor={inputName}>{labelText}</label>
        <input
          id={id}
          name={inputName}
          onClick={onClick}
          onChange={
            (evt) => onChange(evt)
          }
          type={type}
          value={value}
          className={`${styles.input}`}
        />
      </div>
    );
  }

  return (
    <input onClick={onClick} onChange={(evt) => onChange(evt)} type={type} value={value} />
  );
};

export default Input;
