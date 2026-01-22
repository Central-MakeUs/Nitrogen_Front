'use client';

import React, { useState, useRef, useEffect } from 'react';
import { IcEdit } from 'public/icons';
import { TextInput, TextInputProps } from './TextInput';
import { Text } from '../text';
import { vars } from '../theme.css';
import * as styles from './TextInput.css';
import { useCombinedRefs } from '@/shared/hooks/useCombinedRefs';

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
    const [internalValue, setInternalValue] = useState(value ?? defaultValue ?? '');

    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;
    const currentFieldType = props.fieldType ?? 'number';

    // 빈 값일 때 0 표시
    const displayValue = currentValue === '' || currentValue == null ? '0' : currentValue;

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
      // maxNumber 초과 시 편집 모드 유지 -> 수정이 안되게 함
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

    const handleValueChange = (newValue: string) => {
      if (!isControlled) {
        setInternalValue(newValue);
      }
      onValueChange?.(newValue);
    };

    const combinedRef = useCombinedRefs(inputRef, forwardedRef) as React.Ref<HTMLInputElement>;

    if (!isEditing) {
      return (
        <div className={styles.textInputContainer}>
          <div className={styles.inputFieldVariants[hasValidationError ? 'error' : 'default-edit']}>
            <span
              className={`${styles.inputVariants[currentFieldType]} ${styles.inputDefaultEdit}`}>
              {displayValue}
              {resolvedSuffix}
            </span>
            <button
              type='button'
              className={styles.editButton}
              onClick={handleEditClick}
              disabled={hasValidationError}
              aria-label='수정'>
              <IcEdit />
            </button>
          </div>
          {hasValidationError && errorMessage && (
            <Text variant='h1' color={vars.color.border.error}>
              {errorMessage}
            </Text>
          )}
        </div>
      );
    }

    return (
      <TextInput
        ref={combinedRef}
        fieldType={currentFieldType}
        {...props}
        value={currentValue}
        onValueChange={handleValueChange}
        onBlur={handleBlur}
        errorMessage={errorMessage}
        maxNumber={maxNumber}
        suffix={resolvedSuffix || undefined}
      />
    );
  }
);

EditableTextInput.displayName = 'EditableTextInput';
