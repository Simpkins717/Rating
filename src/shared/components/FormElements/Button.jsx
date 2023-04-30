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
  disabledClasses,
}) => {
  if (href) {
    return (
      <a className={disabled ? disabledClasses : classes} href=''>
        {children}
      </a>
    );
  }
  if (to) {
    return (
      <Link
        className={disabled ? disabledClasses : classes}
        to={to}
        exact={exact}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={disabled ? disabledClasses : classes}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
