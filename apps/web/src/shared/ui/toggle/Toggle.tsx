'use client';

import React, { useState } from 'react';
import * as styles from './Toggle.css';
import { useToggleIndicator } from './useToggleIndicator';
import { IcMonth, IcWeek } from '@/assets/icons';

export type ToggleOption = 'list' | 'calendar';

export interface ToggleProps {
  value?: ToggleOption;
  defaultValue?: ToggleOption;
  onChange?: (value: ToggleOption) => void;
  disabled?: boolean;
  ariaLabel?: string;
}

export const Toggle = ({
  value: controlledValue,
  defaultValue = 'list',
  onChange,
  disabled = false,
  ariaLabel = 'view-toggle',
}: ToggleProps) => {
  const [uncontrolledValue, setUncontrolledValue] = useState<ToggleOption>(defaultValue);

  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : uncontrolledValue;

  const { containerRef, listRef, calendarRef, indicatorStyle } = useToggleIndicator({
    activeValue: value,
  });

  const handleChange = (newValue: ToggleOption) => {
    if (disabled || newValue === value) return;

    if (!isControlled) {
      setUncontrolledValue(newValue);
    }
    onChange?.(newValue);
  };

  return (
    <div className={styles.container} role='toggle' aria-label={ariaLabel}>
      <div className={styles.indicator} style={indicatorStyle} aria-hidden />

      <div ref={containerRef} className={styles.itemsRow}>
        <button
          ref={listRef}
          type='button'
          role='radio'
          aria-checked={value === 'list'}
          disabled={disabled}
          className={styles.item}
          onClick={() => handleChange('list')}>
          <div className={styles.icon({ active: value === 'list' })}>
            <IcWeek />
          </div>
        </button>

        <button
          ref={calendarRef}
          type='button'
          role='radio'
          aria-checked={value === 'calendar'}
          disabled={disabled}
          className={styles.item}
          onClick={() => handleChange('calendar')}>
          <div className={styles.icon({ active: value === 'calendar' })}>
            <IcMonth />
          </div>
        </button>
      </div>
    </div>
  );
};
