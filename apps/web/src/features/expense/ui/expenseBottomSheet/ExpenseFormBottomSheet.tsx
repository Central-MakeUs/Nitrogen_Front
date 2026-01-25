import React from 'react';
import * as styles from './ExpenseFormBottomSheet.css';
import {
  Text,
  Button,
  BaseBottomSheetTemplate,
  vars,
  EditableTextInput,
  InputField,
  TextInput,
  CategoryIconType,
} from '@/shared/ui';

import { IcPlusCircle, IcRightChevron, IcTrash } from 'public/icons';
import { InfoSection } from './infoSection';
import { CategoryGrid } from '@/widgets';
import { formatDate } from '@/shared/utils';
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
  satisfactionLabel?: string; //TODO: 임시
  /** 만족도 이모지 */
  satisfactionEmoji?: string; //TODO: 임시
  /** 삭제 버튼 클릭 시 콜백 */
  onDelete?: () => void;
  /** 선택 버튼 클릭 시 콜백 */
  onConfirm?: () => void;
  /** X 버튼 클릭 시 콜백 */
  onClose?: () => void;
}

//TODO: 나중엔 API 호출 or 전역에서 불러오는 방식으로 ㄱ
//TODO: 나머지도 여기서 불러오는 방식이 나을 듯
const expenseCategories: Category[] = [
  { id: '1', icon: 'shopping', label: '간식' },
  { id: '2', icon: 'coin', label: '자기계발비' },
  { id: '3', icon: 'percent', label: '감식' },
  { id: '4', icon: 'shopping', label: '카테고리명' },
  { id: '5', icon: 'shopping', label: '간식' },
  { id: '6', icon: 'coin', label: '자기계발비' },
  { id: '7', icon: 'percent', label: '감식' },
];

export const ExpenseFormBottomSheet = ({
  amount,
  onAmountChange,
  usage,
  onUsageChange,
  selectedDate = new Date(),
  onDateClick,
  selectedCategoryId,
  onCategorySelect,
  onMoreCategoryClick,
  onDelete,
  onConfirm,
  onClose,
}: ExpenseFormBottomSheetProps) => {
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
      <CategoryGrid
        categories={expenseCategories}
        selectedId={selectedCategoryId}
        onSelect={onCategorySelect}
        onMoreClick={onMoreCategoryClick}
      />

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
