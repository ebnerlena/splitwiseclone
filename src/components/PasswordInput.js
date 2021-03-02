import React from 'react';
import Input from './Input';
// import styles from './PasswordInput.module.css'

const PasswordInput = ({
  inputName, labelText, onClick, onChange, value,
}) => (
  <Input type="password" labelText={labelText} name={inputName} onClick={onClick} onChange={(evt) => onChange(evt)} value={value}> </Input>
);

export default PasswordInput;
