import React from 'react';
import { Link } from 'react-router-dom';
const Button = ({
  href,
  children,
  classes,
  to,
  exact,
  disabled,
  onClick,
  type,
}) => {
  if (href) {
    return (
      <a className={classes} href=''>
        {children}
      </a>
    );
  }
  if (to) {
    return (
      <Link className={classes} to={to} exact={exact}>
        {children}
      </Link>
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
