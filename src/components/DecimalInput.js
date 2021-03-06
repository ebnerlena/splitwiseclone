import React from 'react';
import Input from './Input';
// import styles from './DecimalInput.module.css'

const DecimalInput = ({
  inputName, id, labelText, onClick, onChange, value,
}) => (
  <Input type="number" id={id} labelText={labelText} name={inputName} onClick={onClick} onChange={(evt) => onChange(evt)} value={value}> </Input>
);

export default DecimalInput;
