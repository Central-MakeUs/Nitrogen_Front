import React, { ReactNode } from 'react';
import { Text } from '../text';
import * as styles from './Badge.css';
import { vars } from '../theme.css';

export interface BadgeProps {
  label: string;
  icon?: ReactNode;
  size?: 'md' | 'lg';
  backgroundColor?: string;
}
//TODO: [암시]디자인 변경후 다시 반영 예정!!! -> 아마 거의 수정
export const Badge = ({
  label,
  size = 'md',
  icon,
  backgroundColor = vars.color.bg.neutral.subtle,
}: BadgeProps) => {
  return (
    <div className={styles.badge} style={{ backgroundColor }}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <Text variant={size === 'md' ? 'b1' : 'h1'} color={vars.color.text.secondary}>
        {label}
      </Text>
    </div>
  );
};
