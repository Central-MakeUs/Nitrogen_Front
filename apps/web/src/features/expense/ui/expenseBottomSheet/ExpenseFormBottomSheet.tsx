import { InputField } from '../../../../shared/ui/inputField';
import { EditableTextInput, TextInput } from '../../../../shared/ui/textInput';
import BaseBottomSheetTemplate from '../../../../shared/ui/bottomSheet/templates/BaseBottomSheetTemplate';
import React from 'react';
import * as styles from './ExpenseFormBottomSheet.css';
import { Text, CategoryButton, Button } from '@/shared/ui';
import { vars } from '../../../../shared/ui/theme.css';
import { CategoryIconType } from '../../../../shared/ui/categoryButton/categoryIcons';
import { IcPlusCircle, IcRightChevron, IcTrash } from 'public/icons';
import { InfoSection } from './infoSection';

export interface Category {
  id: string;
  icon: CategoryIconType;
  label: string;
}

export interface ExpenseFormBottomSheetProps {
  /** 소비 금액 */
  amount?: number;
  /** 소비 금액 변경 콜백 */
  onAmountChange?: (value: string) => void;
  /** 사용처 */
  usage?: string;
  /** 사용처 변경 콜백 */
  onUsageChange?: (value: string) => void;
  /** 선택된 날짜 */
  selectedDate?: Date;
  /** 날짜 선택 클릭 콜백 */
  onDateClick?: () => void;
  /** 카테고리 목록 */
  categories?: Category[];
  /** 선택된 카테고리 ID */
  selectedCategoryId?: string | null;
  /** 카테고리 선택 시 콜백 */
  onCategorySelect?: (category: Category) => void;
  /** 더보기 버튼 클릭 시 콜백 */
  onMoreCategoryClick?: () => void;
  /** 만족도 라벨 */
  satisfactionLabel?: string;
  /** 만족도 이모지 */
  satisfactionEmoji?: string;
  /** 삭제 버튼 클릭 시 콜백 */
  onDelete?: () => void;
  /** 선택 버튼 클릭 시 콜백 */
  onConfirm?: () => void;
  /** X 버튼 클릭 시 콜백 */
  onClose?: () => void;
}

const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}년 ${month}월 ${day}일`;
};

const MAX_VISIBLE_CATEGORIES = 7;

export const ExpenseFormBottomSheet = ({
  amount,
  onAmountChange,
  usage,
  onUsageChange,
  selectedDate = new Date(),
  onDateClick,
  categories = [],
  selectedCategoryId,
  onCategorySelect,
  onMoreCategoryClick,
  onDelete,
  onConfirm,
  onClose,
}: ExpenseFormBottomSheetProps) => {
  const visibleCategories = categories.slice(0, MAX_VISIBLE_CATEGORIES);
  const hasMoreCategories = categories.length > MAX_VISIBLE_CATEGORIES;

  return (
    <BaseBottomSheetTemplate>
      <BaseBottomSheetTemplate.Header type='close' onClose={onClose} />

      {/* 소비금액 */}
      <InputField label='소비금액'>
        <EditableTextInput
          value={amount?.toString()}
          onValueChange={onAmountChange}
          fieldType='number'
        />
      </InputField>

      {/* 사용처 */}
      <div className={styles.inputWrapper}>
        <InputField label='사용처'>
          <TextInput
            placeholder='사용처를 입력해주세요'
            value={usage}
            onValueChange={onUsageChange}
          />
        </InputField>
      </div>

      {/* 소비일 - TODO: List Header 컴포넌트로 바꾸기*/}
      <div className={styles.dateSection}>
        <Text variant='h3' color={vars.color.text.secondary}>
          소비일
        </Text>
        <button className={styles.dateButton} onClick={onDateClick}>
          <Text variant='b3' color={vars.color.text.primary}>
            {formatDate(selectedDate)}
          </Text>
          <IcRightChevron className={styles.dateChevron} color={vars.color.icon.subtle} />
        </button>
      </div>

      {/* 카테고리 */}
      <div className={styles.categorySection}>
        <Text variant='h3' color={vars.color.text.primary}>
          카테고리
        </Text>
        <div className={styles.categoryGrid}>
          {visibleCategories.map((category) => (
            <CategoryButton
              key={category.id}
              icon={category.icon}
              label={category.label}
              mode={selectedCategoryId === category.id ? 'active' : 'default'}
              onClick={() => onCategorySelect?.(category)}
            />
          ))}
          {(hasMoreCategories || categories.length > 0) && (
            <CategoryButton
              icon='plus'
              label='더보기'
              mode='default'
              onClick={onMoreCategoryClick}
            />
          )}
        </div>
      </div>

      {/* 훌린듯이 소비 */}
      <InfoSection
        badges={[
          { id: '1', label: '홀린듯이' },
          { id: '2', label: '별로였어요', icon: <span>😐</span>, isActive: true },
        ]}
      />

      {/* 하단 버튼 */}
      <div className={styles.buttonSection}>
        <button className={styles.deleteButton} onClick={onDelete}>
          <IcTrash />
        </button>
        <Button variant='brand' onClick={onConfirm}>
          <IcPlusCircle />
          Button
          <IcPlusCircle />
        </Button>
      </div>
    </BaseBottomSheetTemplate>
  );
};
