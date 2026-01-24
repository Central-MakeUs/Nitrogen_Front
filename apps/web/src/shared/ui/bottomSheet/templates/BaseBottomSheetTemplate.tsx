import React from 'react';
import {
  baseBottomSheetTemplate,
  BottomSheetHeaderBtn,
  bottomSheetHeaderWrapper,
  bottomSheetButtonSection,
} from './BaseBottomSheetTemplate.css';
import { Text } from '../../text';
import { vars } from '../../theme.css';
import { IcClear, IcPlusSimple } from 'public/icons';
import { Button } from '../../button';

interface BottomSheetButtonProps {
  variant?: 'default' | 'recommend';
  label: string;
  onClick?: () => void;
}
type headerType = 'add' | 'close';

const BaseBottomSheetTemplate = ({ children }: { children: React.ReactNode }) => {
  return <article className={baseBottomSheetTemplate}>{children}</article>;
};

const BottomSheetContent = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const BottomSheetHeader = ({ text, type }: { text: string; type: headerType }) => {
  return (
    <div className={bottomSheetHeaderWrapper}>
      <Text variant='h4' color={vars.color.text.primary}>
        {text}
      </Text>
      {type === 'close' ? (
        <IcClear color={vars.color.icon.subtle} />
      ) : (
        <div className={BottomSheetHeaderBtn}>
          <IcPlusSimple color={vars.color.icon.subtle} />
          <Text variant='h4' color={vars.color.text.tertiary}>
            추가
          </Text>
        </div>
      )}
    </div>
  );
};

const BottomSheetButtonSection = ({ children }: { children: React.ReactNode }) => {
  return <div className={bottomSheetButtonSection}>{children}</div>;
};

const BottomSheetButton = ({ label = '선택', onClick }: BottomSheetButtonProps) => {
  return (
    <Button variant='brand' onClick={onClick}>
      {label}
    </Button>
  );
};

BaseBottomSheetTemplate.Content = BottomSheetContent;
BaseBottomSheetTemplate.Header = BottomSheetHeader;
BaseBottomSheetTemplate.ButtonSection = BottomSheetButtonSection;
BaseBottomSheetTemplate.Button = BottomSheetButton;

export default BaseBottomSheetTemplate;
