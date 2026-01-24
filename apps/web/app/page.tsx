'use client';

import { Toggle } from '@/shared/ui/toggle';
import { BottomSheet } from '@/shared/ui/bottomSheet';
import BaseBottomSheetTemplate from '@/shared/ui/bottomSheet/templates/BaseBottomSheetTemplate';
import { Button } from '@/shared/ui/button';
import React, { useState } from 'react';

export default function Home(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ padding: '20px' }}>
      <h1>질소 가계부</h1>
      <Toggle />

      <div style={{ marginTop: '20px' }}>
        <Button variant='brand' onClick={() => setIsOpen(true)}>
          BottomSheet 열기
        </Button>
      </div>

      <BottomSheet
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        snapPoints={[0.5, 0]}
        initialSnap={0.5}>
        <BaseBottomSheetTemplate>
          <BaseBottomSheetTemplate.Header text='카테고리' type='close' />
          <BaseBottomSheetTemplate.Content>
            <div style={{ color: '#757A87', lineHeight: 1.6 }}>BottomSheet 테스트입니다.</div>
          </BaseBottomSheetTemplate.Content>
          <BaseBottomSheetTemplate.Button label='선택' onClick={() => setIsOpen(false)} />
        </BaseBottomSheetTemplate>
      </BottomSheet>
    </div>
  );
}
