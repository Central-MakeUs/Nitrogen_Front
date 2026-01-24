'use client';

import { motion, AnimatePresence, PanInfo, useAnimation, useDragControls } from 'framer-motion';
import { useEffect, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';

import * as styles from './BottomSheet.css';

export interface BottomSheetProps {
  /** BottomSheet 열림 상태 */
  isOpen: boolean;
  /** 닫기 핸들러 */
  onClose: () => void;
  /** 스냅 포인트 (화면 높이 비율, 0~1) */
  snapPoints?: number[];
  /** 초기 스냅 포인트 */
  initialSnap?: number;
  /** 백드롭 투명 여부 */
  transparent?: boolean;
  /** 자식 요소 */
  children: React.ReactNode;
}

export const BottomSheet = ({
  isOpen,
  onClose,
  snapPoints = [0.9, 0.5, 0],
  initialSnap = 0.5,
  transparent = false,
  children,
}: BottomSheetProps): React.JSX.Element | null => {
  const [mounted, setMounted] = useState(false);
  const [screenHeight, setScreenHeight] = useState(0);
  const controls = useAnimation();
  const dragControls = useDragControls();

  // 클라이언트 사이드에서만 마운트
  useEffect(() => {
    setMounted(true);
    setScreenHeight(window.innerHeight);

    const handleResize = () => setScreenHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 스냅 포인트 인덱스 찾기
  const getSnapIndex = useCallback(
    (snapValue: number) => {
      const index = snapPoints.indexOf(snapValue);
      return index !== -1 ? index : 1;
    },
    [snapPoints]
  );

  // variants 생성 (각 스냅 포인트에 대한 y 위치)
  const getVariants = useCallback(() => {
    if (!screenHeight) return {};

    return snapPoints.reduce(
      (acc, snapPoint, index) => {
        acc[index.toString()] = {
          y: screenHeight * (1 - snapPoint),
        };
        return acc;
      },
      {} as Record<string, { y: number }>
    );
  }, [snapPoints, screenHeight]);

  // BottomSheet 열릴 때 초기 스냅으로 애니메이션
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const initialIndex = getSnapIndex(initialSnap);
      controls.start(initialIndex.toString());
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, controls, initialSnap, getSnapIndex]);

  // 드래그 시작 핸들러
  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const target = event.target as Element;
    if (target.closest('[data-drag-handle]')) {
      dragControls.start(event);
    }
  };

  // 드래그 종료 핸들러
  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (!screenHeight) return;

    const velocity = info.velocity.y;
    const currentY = info.point.y;

    // 빠르게 아래로 스와이프하면 닫기
    if (velocity > 500) {
      const closeIndex = snapPoints.length - 1;
      controls.start(closeIndex.toString());
      setTimeout(onClose, 200);
      return;
    }

    // 빠르게 위로 스와이프하면 최대 높이로
    if (velocity < -500) {
      controls.start('0');
      return;
    }

    // 현재 위치에서 가장 가까운 스냅 포인트 찾기
    const currentSnapRatio = 1 - currentY / screenHeight;
    let closestIndex = 0;
    let minDistance = Math.abs((snapPoints[0] ?? 0) - currentSnapRatio);

    snapPoints.forEach((snap, index) => {
      const distance = Math.abs(snap - currentSnapRatio);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    // 마지막 스냅 포인트(닫기)에 가까우면 닫기
    if (closestIndex === snapPoints.length - 1) {
      controls.start(closestIndex.toString());
      setTimeout(onClose, 200);
    } else {
      controls.start(closestIndex.toString());
    }
  };

  // 백드롭 클릭 시 닫기
  const handleBackdropClick = () => {
    const closeIndex = snapPoints.length - 1;
    controls.start(closeIndex.toString());
    setTimeout(onClose, 200);
  };

  if (!mounted) return null;

  const variants = getVariants();
  const initialIndex = snapPoints.length - 1; // 화면 밖에서 시작

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className={styles.backdrop({ transparent })}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleBackdropClick}
          />

          {/* BottomSheet */}
          <motion.div
            className={styles.wrapper}
            drag='y'
            dragListener={false}
            dragControls={dragControls}
            dragConstraints={{ top: 0, bottom: screenHeight }}
            dragElastic={0.1}
            initial={initialIndex.toString()}
            animate={controls}
            exit={initialIndex.toString()}
            variants={variants}
            onDragEnd={handleDragEnd}
            onPointerDown={handlePointerDown}
            transition={{
              type: 'spring',
              damping: 30,
              stiffness: 300,
            }}>
            <>{children}</>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};
