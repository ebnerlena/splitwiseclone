import React from 'react';
import Input from './Input';
// import styles from './TextInput.module.css'

const TextInput = ({
  inputName, labelText, onClick, onChange, value,
}) => (
  <Input type="text" labelText={labelText} name={inputName} onClick={onClick} onChange={(evt) => onChange(evt)} value={value}> </Input>
);

export default TextInput;
