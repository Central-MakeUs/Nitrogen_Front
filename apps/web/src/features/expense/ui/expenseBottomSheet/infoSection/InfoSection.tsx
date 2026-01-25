import { vars, Text, Badge } from '@/shared/ui';
import React from 'react';
import * as styles from './InfoSection.css';

export interface InfoBadge {
  id: string;
  label: string;
  icon?: React.ReactNode;
  isActive?: boolean;
}

export interface InfoSectionProps {
  /** 섹션 라벨 */
  label?: string;
  /** Badge 목록 */
  badges?: InfoBadge[];
}

export const InfoSection = ({ label = '소비 상황/만족도', badges }: InfoSectionProps) => {
  return (
    <div className={styles.wrapper}>
      <Text variant='b2' color={vars.color.text.secondary}>
        {label}
      </Text>
      {badges && (
        <div className={styles.badgeList}>
          {badges.map((badge) => (
            <Badge
              key={badge.id}
              label={badge.label}
              icon={badge.icon}
              backgroundColor={
                badge.isActive ? vars.color.bg.neutral.secondary : vars.color.bg.neutral.subtle
              }
            />
          ))}
        </div>
      )}
    </div>
  );
};
