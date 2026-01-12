'use client';

import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import { button } from './button.css';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'brand';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

export const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  type = 'button',
  ...rest
}: ButtonProps): React.JSX.Element => {
  return (
    <button
      className={button({ variant, size, disabled })}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...rest}>
      {children}
    </button>
  );
};
