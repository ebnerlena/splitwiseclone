import React from 'react';
import styles from './Button.module.css';

const Button = ({ onClick, children }) => (
  <button type="button" onClick={onClick} className={`${styles.button} ${styles.primary}`}>
    {children}
  </button>
);

export default Button;
