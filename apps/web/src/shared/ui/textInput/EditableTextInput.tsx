'use client';

import React, { useState, useRef, useEffect } from 'react';
import { TextInput, TextInputProps } from './TextInput';
import { ReadonlyDisplay } from './ReadonlyDisplay';
import { useCombinedRefs } from '@/shared/hooks/useCombinedRefs';
import { useControlledValue } from '@/shared/hooks/useControlledValue';

export interface EditableTextInputProps extends Omit<TextInputProps, 'state'> {
  /** 비편집 모드에서 값 뒤에 표시할 suffix (기본값: number 타입일 때 '원') */
  displaySuffix?: string;
  onEditStart?: () => void;
}

export const EditableTextInput = React.forwardRef<HTMLInputElement, EditableTextInputProps>(
  (
    {
      onEditStart,
      onBlur,
      value,
      defaultValue,
      onValueChange,
      displaySuffix,
      errorMessage,
      maxNumber,
      ...props
    },
    forwardedRef
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isEditing, setIsEditing] = useState(false);
    const currentFieldType = props.fieldType ?? 'number';

    const [currentValue, setCurrentValue] = useControlledValue(
      value as string | undefined,
      (defaultValue as string) ?? '',
      onValueChange
    );

    // suffix 결정: prop으로 받거나 number 타입이면 기본 '원'
    const resolvedSuffix = displaySuffix ?? (currentFieldType === 'number' ? '원' : '');

    // 에러 상태 계산
    const hasValidationError =
      currentFieldType === 'number' &&
      maxNumber !== undefined &&
      currentValue !== '' &&
      !isNaN(+currentValue) &&
      +currentValue > maxNumber;

    // 편집 모드 전환 시 autoFocus
    useEffect(() => {
      if (isEditing && inputRef.current) {
        inputRef.current.focus();
      }
    }, [isEditing]);

    const handleEditClick = () => {
      setIsEditing(true);
      onEditStart?.();
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      // maxNumber 초과 시 편집 모드 유지
      const blurValue = e.target.value;
      const isOverMax =
        currentFieldType === 'number' &&
        maxNumber !== undefined &&
        blurValue !== '' &&
        !isNaN(+blurValue) &&
        +blurValue > maxNumber;

      if (isOverMax) {
        inputRef.current?.focus();
        return;
      }

      setIsEditing(false);
      onBlur?.(e);
    };

    const combinedRef = useCombinedRefs(inputRef, forwardedRef) as React.Ref<HTMLInputElement>;

    if (!isEditing) {
      return (
        <ReadonlyDisplay
          value={currentValue}
          fieldType={currentFieldType}
          suffix={resolvedSuffix}
          hasError={hasValidationError}
          errorMessage={errorMessage}
          onEditClick={handleEditClick}
        />
      );
    }

    return (
      <TextInput
        ref={combinedRef}
        fieldType={currentFieldType}
        {...props}
        value={currentValue}
        onValueChange={setCurrentValue}
        onBlur={handleBlur}
        errorMessage={errorMessage}
        maxNumber={maxNumber}
        suffix={resolvedSuffix || undefined}
      />
    );
  }
);

EditableTextInput.displayName = 'EditableTextInput';
