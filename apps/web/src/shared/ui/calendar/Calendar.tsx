'use client';

import React from 'react';
import { container } from '@/shared/ui/calendar/styles/Calendar.css';
import { CalendarHeader } from '@/shared/ui/calendar/CalendarHeader';
import { CalendarGrid } from '@/shared/ui/calendar/CalendarGrid';
import { useCalendar } from '@/shared/ui/calendar/model/useCalendar';

export interface CalendarProps {
  currentDate?: Date;
  selectedDate?: Date | null;
  onDateSelect?: (date: Date) => void;
}

export const Calendar = ({
  currentDate = new Date(),
  selectedDate,
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

  return (
    <div className={container}>
      <CalendarHeader
        formattedMonth={formattedMonth}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
      />
      <CalendarGrid
        dates={dates}
        selectedDate={effectiveSelectedDate}
        onDateSelect={handleDateSelect}
      />
    </div>
  );
};
