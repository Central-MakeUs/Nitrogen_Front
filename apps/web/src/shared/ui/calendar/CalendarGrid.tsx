'use client';

import React from 'react';
import { grid, weekdayCell } from '@/shared/ui/calendar/styles/Calendar.css';
import { DateCell } from '@/shared/ui/calendar/DateCell';
import { WEEKDAYS } from '@/shared/ui/calendar/model/constants';
import { isSameDate, isToday } from '@/shared/ui/calendar/lib/calendarUtils';

interface CalendarGridProps {
  dates: Array<{ date: Date; isCurrentMonth: boolean }>;
  selectedDate: Date | null;
  onDateSelect: (date: Date) => void;
}

export const CalendarGrid = ({ dates, selectedDate, onDateSelect }: CalendarGridProps) => {
  return (
    <div className={grid}>
      {WEEKDAYS.map((day) => (
        <div key={day} className={weekdayCell}>
          {day}
        </div>
      ))}
      {dates.map(({ date, isCurrentMonth }, index) => (
        <DateCell
          key={index}
          date={date}
          isSelected={selectedDate ? isSameDate(date, selectedDate) : false}
          isToday={isToday(date)}
          isOutsideMonth={!isCurrentMonth}
          onClick={onDateSelect}
        />
      ))}
    </div>
  );
};
