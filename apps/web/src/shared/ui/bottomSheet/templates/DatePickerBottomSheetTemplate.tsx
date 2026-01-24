import BaseBottomSheetTemplate from './BaseBottomSheetTemplate';
import React from 'react';

export interface DatePickerBottomSheetTemplateProps {
  /** 선택된 날짜 */
  selectedDate?: Date;
  /** 날짜 선택 시 콜백 */
  onSelectDate?: (date: Date) => void;
  /** 선택 버튼 클릭 시 콜백 */
  onConfirm?: () => void;
  /** X 버튼 클릭 시 콜백 */
  onClose?: () => void;
}

export const DatePickerBottomSheetTemplate = ({
  onConfirm,
  onClose,
}: DatePickerBottomSheetTemplateProps) => {
  return (
    <BaseBottomSheetTemplate>
      <BaseBottomSheetTemplate.Header type='close' text='월 선택' onClose={onClose} />
      <div>{/* TODO: 달력 컴포넌트 */}</div>
      <BaseBottomSheetTemplate.Button label='선택' onClick={onConfirm} />
    </BaseBottomSheetTemplate>
  );
};
