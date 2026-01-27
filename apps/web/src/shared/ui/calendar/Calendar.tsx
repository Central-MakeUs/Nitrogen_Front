'use client';

import React from 'react';
import { container } from '@/shared/ui/calendar/styles/Calendar.css';
import { CalendarHeader } from '@/shared/ui/calendar/CalendarHeader';
import { CalendarGrid } from '@/shared/ui/calendar/CalendarGrid';
import { useCalendar } from '@/shared/ui/calendar/model/useCalendar';

export interface CalendarProps {
  currentDate?: Date;
  selectedDate?: Date | null;
  variant?: 'modal' | 'home';
  showText?: boolean;
  renderDateText?: (date: Date) => string | undefined;
  onDateSelect?: (date: Date) => void;
}

export const Calendar = ({
  currentDate = new Date(),
  selectedDate,
  variant = 'home',
  showText = false,
  renderDateText,
  onDateSelect,
}: CalendarProps) => {
  const {
    formattedMonth,
    dates,
    effectiveSelectedDate,
    handlePrevMonth,
    handleNextMonth,
    handleDateSelect,
  } = useCalendar({
    currentDate,
    selectedDate,
    onDateSelect,
  });

  const size = variant === 'home' ? 'lg' : 'md';
  const shouldShowText = variant === 'home' && showText;

  return (
    <div className={container}>
      {variant === 'modal' && (
        <CalendarHeader
          formattedMonth={formattedMonth}
          onPrevMonth={handlePrevMonth}
          onNextMonth={handleNextMonth}
        />
      )}
      <CalendarGrid
        dates={dates}
        selectedDate={effectiveSelectedDate}
        size={size}
        showText={shouldShowText}
        renderDateText={renderDateText}
        onDateSelect={handleDateSelect}
      />
    </div>
  );
};
