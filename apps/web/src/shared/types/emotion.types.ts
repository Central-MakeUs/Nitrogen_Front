export type EmotionValue =
  | 'stress'
  | 'impulse'
  | 'survival'
  | 'habit'
  | 'self-reward'
  | 'investment';

export interface Emotion {
  label: string;
  value: EmotionValue;
  tags: readonly string[];
  description: string;
}
