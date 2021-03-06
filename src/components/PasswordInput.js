import React from 'react';
import Input from './Input';
// import styles from './PasswordInput.module.css'

const PasswordInput = ({
  inputName, id, labelText, onClick, onChange, value,
}) => (
  <Input type="password" id={id} labelText={labelText} name={inputName} onClick={onClick} onChange={(evt) => onChange(evt)} value={value}> </Input>
);

export default PasswordInput;
