import { Emotion } from '../types';

export const emotions: readonly Emotion[] = [
  {
    label: '스트레스',
    value: 'stress',
    tags: ['#스트레스 해소', '#기분전환'],
    description: '스트레스를 풀기 위해 한 소비입니다.\n잠깐의 해소감을 위해 이루어진 선택입니다.',
  },
  {
    label: '홀린듯이',
    value: 'impulse',
    tags: ['#충동 소비', '#무계획'],
    description:
      '계획 없이 충동적으로 시도한 소비입니다.\n그 순간의 분위기와 감정에 반응해 이루어진 선택입니다.',
  },
  {
    label: '살기 위해',
    value: 'survival',
    tags: ['#필수 소비', '#생존'],
    description: '생활에 꼭 필요한 소비입니다.\n없으면 안 되는 것들을 위한 선택입니다.',
  },
  {
    label: '습관처럼',
    value: 'habit',
    tags: ['#습관', '#반복'],
    description: '특별한 이유 없이 습관적으로 한 소비입니다.\n늘 하던 대로 이루어진 선택입니다.',
  },
  {
    label: '나를 위해',
    value: 'self-reward',
    tags: ['#자기보상', '#힐링'],
    description: '나 자신을 위한 보상 소비입니다.\n스스로에게 주는 선물 같은 선택입니다.',
  },
  {
    label: '투자',
    value: 'investment',
    tags: ['#자기계발', '#미래'],
    description: '미래를 위한 투자성 소비입니다.\n더 나은 내일을 위한 선택입니다.',
  },
] as const;
