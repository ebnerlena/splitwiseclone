import React from 'react';

// import styles from './SelectInput.module.css'

const SelectInput = ({
  inputName, id, labelText, type, onClick, onChange, options,
}) => (
  <>
    <label htmlFor={inputName}>
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
    >
      {options.map((option) => (
        <option value={option.id} key={option.id}>{option.name}</option>
      ))}
    </select>
  </>
);

export default SelectInput;
