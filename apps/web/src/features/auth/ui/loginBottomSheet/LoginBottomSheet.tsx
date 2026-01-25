import React from 'react';
import * as styles from './LoginBottomSheet.css';
import { Text } from '@/shared/ui';
import { BaseBottomSheetTemplate } from '@/shared/ui/bottomSheet/templates';

export const LoginBottomSheet = () => {
  return (
    <BaseBottomSheetTemplate>
      <BaseBottomSheetTemplate.Header type='close' />
      <Text variant='t4' className={styles.textStyle} as='div'>
        간편 로그인으로
        <br />
        가볍게 시작해도 괜찮아요.
      </Text>
      <div className={styles.btnWrapper}>
        <button className={styles.loginBtn({ social: 'kakako' })}>
          <Text variant='h2'>카카오로 시작하기</Text>
        </button>
        <button className={styles.loginBtn({ social: 'apple' })}>
          <Text variant='h2'>Apple로 시작하기</Text>
        </button>
      </div>
    </BaseBottomSheetTemplate>
  );
};
