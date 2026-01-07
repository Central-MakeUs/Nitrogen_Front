'use client';

import { ReactNode } from 'react';
import { button } from './button.css';

export interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export const Button = ({ children, onClick, variant = 'primary' }: ButtonProps) => {
  return (
    <button className={button({ variant })} onClick={onClick}>
      {children}
    </button>
  );
};
