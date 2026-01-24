'use client';

import React from 'react';
import * as styles from './BottomNav.css';
import { NavToggle, NavToggleOption } from '../navToggle';
import { PlusButton } from '../plusButton';

export interface BottomNavProps {
  activeTab?: NavToggleOption;
  defaultTab?: NavToggleOption;
  onTabChange?: (tab: NavToggleOption) => void;
  onPlusClick?: () => void;
}

export const BottomNav = ({
  activeTab,
  defaultTab = 'home',
  onTabChange,
  onPlusClick,
}: BottomNavProps) => {
  return (
    <nav className={styles.container} aria-label='bottom-navigation'>
      <NavToggle value={activeTab} defaultValue={defaultTab} onChange={onTabChange} />
      <div className={styles.plusButtonWrapper}>
        <PlusButton onClick={onPlusClick} />
      </div>
    </nav>
  );
};
