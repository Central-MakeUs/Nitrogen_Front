'use client';

import { useMemo, useState } from 'react';
import {
  generateCalendarDates,
  addMonths,
  subMonths,
  formatYearMonth,
} from '@/shared/ui/calendar/lib/calendarUtils';

interface UseCalendarProps {
  currentDate?: Date;
  selectedDate?: Date | null;
  onDateSelect?: (date: Date) => void;
}

export const useCalendar = ({
  currentDate = new Date(),
  selectedDate,
  onDateSelect,
}: UseCalendarProps) => {
  const [internalCurrentDate, setInternalCurrentDate] = useState<Date>(currentDate);
  const [internalSelectedDate, setInternalSelectedDate] = useState<Date | null>(null);

  const effectiveSelectedDate = selectedDate !== undefined ? selectedDate : internalSelectedDate;

  const dates = useMemo(() => generateCalendarDates(internalCurrentDate), [internalCurrentDate]);

  const handleDateSelect = (date: Date) => {
    setInternalSelectedDate(date);
    onDateSelect?.(date);
  };

  const handlePrevMonth = () => {
    setInternalCurrentDate((prev) => subMonths(prev, 1));
  };

  const handleNextMonth = () => {
    setInternalCurrentDate((prev) => addMonths(prev, 1));
  };

  const formattedMonth = formatYearMonth(internalCurrentDate);

  return {
    currentDate: internalCurrentDate,
    effectiveSelectedDate,
    dates,
    formattedMonth,
    handleDateSelect,
    handlePrevMonth,
    handleNextMonth,
  };
};
