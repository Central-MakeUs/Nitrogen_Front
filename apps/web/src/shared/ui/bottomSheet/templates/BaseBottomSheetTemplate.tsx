import React from 'react';
import {
  baseBottomSheetTemplate,
  BottomSheetHeaderBtn,
  bottomSheetHeaderWrapper,
  bottomSheetButtonSection,
  headerIcon,
} from './BaseBottomSheetTemplate.css';
import { Text } from '../../text';
import { vars } from '../../theme.css';
import { IcClear, IcPlusSimple } from 'public/icons';
import { Button } from '../../button';

interface BottomSheetButtonProps {
  label: string;
  onClick?: () => void;
}
type headerType = 'add' | 'close';
interface BottomSheetHeaderProps {
  text?: string;
  type?: headerType;
  onClickAddBtn?: () => void;
  onClose?: () => void;
}

const BaseBottomSheetTemplate = ({ children }: { children: React.ReactNode }) => {
  return <article className={baseBottomSheetTemplate}>{children}</article>;
};

const BottomSheetContent = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const BottomSheetHeader = ({
  text,
  type = 'close',
  onClickAddBtn,
  onClose,
}: BottomSheetHeaderProps) => {
  return (
    <div className={bottomSheetHeaderWrapper}>
      <Text variant='h4' color={vars.color.text.primary}>
        {text}
      </Text>
      {type === 'close' ? (
        <IcClear
          className={headerIcon}
          color={vars.color.icon.subtle}
          onClick={onClose}
          style={{ cursor: 'pointer' }}
        />
      ) : (
        <div className={BottomSheetHeaderBtn} onClick={onClickAddBtn}>
          <IcPlusSimple className={headerIcon} color={vars.color.icon.subtle} />
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
