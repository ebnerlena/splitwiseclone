import React from 'react';
import styles from './Button.module.scss';

const Button = ({
  onClick, disabled, children, id
}) => (
  <button type="button" id={id} onClick={onClick} disabled={disabled} className={[styles.button, styles.primary].join(' ')}>
    {children}
  </button>
);

export default Button;
