'use client';

import { useEffect, useRef, useState } from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import * as styles from './Toggle.css';

interface UseToggleIndicatorProps {
  activeValue: 'list' | 'calendar';
}

export const useToggleIndicator = ({ activeValue }: UseToggleIndicatorProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLButtonElement>(null);
  const calendarRef = useRef<HTMLButtonElement>(null);

  const [position, setPosition] = useState({ x: 0, width: 0 });

  useEffect(() => {
    const updatePosition = () => {
      const container = containerRef.current;
      const activeButton = activeValue === 'calendar' ? calendarRef.current : listRef.current;

      if (!container || !activeButton) return;

      const containerRect = container.getBoundingClientRect();
      const buttonRect = activeButton.getBoundingClientRect();

      setPosition({
        x: buttonRect.left - containerRect.left,
        width: buttonRect.width,
      });
    };

    updatePosition();

    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, [activeValue]);

  const indicatorStyle = assignInlineVars({
    [styles.indicatorXVar]: `${position.x}px`,
    [styles.indicatorWVar]: `${position.width}px`,
  });

  return {
    containerRef,
    listRef,
    calendarRef,
    indicatorStyle,
  };
};
