import React from 'react';
import { Text } from '../text';
import { inputFieldContainer } from './inputField.css';
import { vars } from '../theme.css';

interface InputFieldProps {
  label: string;
  children: React.ReactNode;
}

export const InputField = ({ label, children }: InputFieldProps) => {
  return (
    <div className={inputFieldContainer}>
      <Text variant='h2' color={vars.color.text.secondary}>
        {label}
      </Text>
      {children}
    </div>
  );
};
