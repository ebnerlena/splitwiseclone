import React from 'react';
import styles from './Input.module.scss';

const SelectInput = ({
  inputName, id, labelText, type, onClick, onChange, options,
}) => (
  <div className={styles.input__container}>
    <label htmlFor={inputName} className={styles.label}>
      {' '}
      {labelText}
      {' '}
    </label>
    <select
      id={id}
      name={inputName}
      onClick={onClick}
      onChange={(evt) => onChange(evt)}
      type={type}
      className={styles.select}
    >
      {options?.map((option) => (
        <option value={option.id} key={option.id}>{option.name}</option>
      ))}
    </select>
  </div>
);

export default SelectInput;
