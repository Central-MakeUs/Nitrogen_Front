import React from 'react';
import { dateCellWrapper, dateBadge } from '@/shared/ui/calendar/styles/DateCell.css';

export interface DateCellProps {
  date: Date;
  isSelected: boolean;
  isToday: boolean;
  isOutsideMonth: boolean;
  onClick?: (date: Date) => void;
}

export const DateCell = ({ date, isSelected, isToday, isOutsideMonth, onClick }: DateCellProps) => {
  const handleClick = () => {
    if (!isOutsideMonth && onClick) {
      onClick(date);
    }
  };

  return (
    <div className={dateCellWrapper} onClick={handleClick}>
      <span
        className={dateBadge({
          selected: isSelected,
          today: isToday,
          isOutsideMonth,
        })}>
        {date.getDate()}
      </span>
    </div>
  );
};
