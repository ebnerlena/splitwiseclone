import React from 'react';
import styles from './Input.module.scss';

const Input = ({
  inputName, id, labelText, type, onClick, onChange, value,
}) => {
  if (labelText) {
    return (
      <div className={`${styles.input__container}`}>
        <label htmlFor={inputName} className={`${styles.label}`}>{labelText}</label>
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
    <input
      onClick={onClick}
      onChange={(evt) => onChange(evt)}
      type={type}
      className={`${styles.input}`}
      value={value}
    />
  );
};

export default Input;
