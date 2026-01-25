'use client';

import React, { forwardRef, useId, ChangeEvent, InputHTMLAttributes } from 'react';
import * as styles from './ToggleSwitch.css';

export interface ToggleSwitchProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'onChange'
> {
  onChange?: (checked: boolean) => void;
}

export const ToggleSwitch = forwardRef<HTMLInputElement, ToggleSwitchProps>(
  ({ disabled = false, onChange, id: propId, ...props }, ref) => {
    const generatedId = useId();
    const id = propId ?? generatedId;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.checked);
    };

    return (
      <span className={styles.wrapper}>
        <input
          ref={ref}
          id={id}
          type='checkbox'
          role='switch'
          className={styles.input}
          disabled={disabled}
          onChange={handleChange}
          {...props}
        />
        <label htmlFor={id} className={styles.track}>
          <span className={styles.knob} />
        </label>
      </span>
    );
  }
);

ToggleSwitch.displayName = 'ToggleSwitch';
