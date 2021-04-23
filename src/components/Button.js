import React from 'react';

const Button = ({
  onClick, disabled, children, id, styles,
}) => (
  <button type="button" id={id} onClick={onClick} disabled={disabled} className={styles}>
    {children}
  </button>
);

export default Button;
