'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import * as styles from './BottomSheet.css';

export interface BottomSheetProps {
  /** BottomSheet 열림 상태 */
  isOpen: boolean;
  /** 닫기 핸들러 */
  onClose: () => void;
  /** 백드롭 투명 여부 */
  transparent?: boolean;
  /** 자식 요소 */
  children: React.ReactNode;
}

export const BottomSheet = ({
  isOpen,
  onClose,
  transparent = false,
  children,
}: BottomSheetProps): React.JSX.Element | null => {
  const [shouldRender, setShouldRender] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      document.body.style.overflow = 'hidden';

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimating(true);
        });
      });
    } else if (shouldRender) {
      setIsAnimating(false);

      const timeout = setTimeout(() => {
        setShouldRender(false);
        document.body.style.overflow = '';
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [isOpen, shouldRender]);

  if (!shouldRender) return null;

  const portalElement = document.getElementById('modal');
  if (!portalElement) return null;

  return createPortal(
    <div className={styles.container} onClick={onClose}>
      <div className={styles.backdrop({ transparent, visible: isAnimating })} />
      <div
        className={styles.sheet({ animating: isAnimating })}
        onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    portalElement
  );
};
