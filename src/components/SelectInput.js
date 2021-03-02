import React from 'react';
// import styles from './SelectInput.module.css'

const SelectInput = ({
  inputName, labelText, type, onClick, onChange, options,
}) => (
  <>
    <label htmlFor={inputName}>
      {' '}
      {labelText}
      {' '}
    </label>
    <select name={inputName} onClick={onClick} onChange={(evt) => onChange(evt)} type={type}>

      {options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  </>
);

export default SelectInput;
