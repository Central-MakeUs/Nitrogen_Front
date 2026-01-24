import BaseBottomSheetTemplate from './BaseBottomSheetTemplate';
import React from 'react';
import { Text } from '../../text';
import * as styles from './LoginBottomSheetTemplate.css';

export const LoginBottomSheetTemplate = () => {
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
