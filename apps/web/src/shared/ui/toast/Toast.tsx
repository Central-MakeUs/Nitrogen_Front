import React from 'react';
import IcCheck from 'public/icons/ic-check.svg';
import IcAttention from 'public/icons/ic-attention.svg';
import { toast, toastIcon, toastIconSvg, toastText } from './Toast.css';

export interface ToastProps {
  variant?: 'success' | 'attention';
  message: string;
}

export const Toast = ({ variant = 'success', message }: ToastProps): React.JSX.Element => {
  const Icon = variant === 'success' ? IcCheck : IcAttention;

  return (
    <div className={toast}>
      <div className={toastIcon({ variant })}>
        <Icon className={toastIconSvg} />
      </div>
      <span className={toastText}>{message}</span>
    </div>
  );
};
