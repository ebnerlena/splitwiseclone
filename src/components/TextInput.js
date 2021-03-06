import React from 'react';
import Input from './Input';
// import styles from './TextInput.module.css'

const TextInput = ({
  inputName, id, labelText, onClick, onChange, value,
}) => (
  <Input type="text" id={id} labelText={labelText} name={inputName} onClick={onClick} onChange={(evt) => onChange(evt)} value={value}> </Input>
);

export default TextInput;
