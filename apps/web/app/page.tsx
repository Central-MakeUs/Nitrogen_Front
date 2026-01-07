'use client';

import { Button } from '@repo/ui/button';

export default function Home(): React.ReactNode {
  return (
    <div
      style={{
        padding: '2rem',
        display: 'flex',
        gap: '1rem',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}>
      <h1>Vanilla Extract Button Test</h1>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button variant='primary' onClick={() => alert('Primary clicked!')}>
          Primary Button
        </Button>
        <Button variant='secondary' onClick={() => alert('Secondary clicked!')}>
          Secondary Button
        </Button>
      </div>
    </div>
  );
}
