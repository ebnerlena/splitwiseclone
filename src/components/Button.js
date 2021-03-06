import React from 'react';
import styles from './Button.module.scss';

const Button = ({ onClick, disabled, children }) => (
  <button type="button" onClick={onClick} disabled={disabled} className={`${styles.button} ${styles.primary}`}>
    {children}
  </button>
);

export default Button;
