import React from 'react';
import Input from './Input';
import styles from './Input.module.scss';

const RadioInput = ({
  inputName, id, labelText, checked, onChange, value,
}) => (
  <Input
    type="radio"
    id={id}
    labelText={labelText}
    inputName={inputName}
    checked={checked}
    onChange={(evt) => onChange(evt)}
    value={value}
  />
);

export default RadioInput;
