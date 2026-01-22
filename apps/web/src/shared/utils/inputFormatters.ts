/**
 * 숫자 문자열의 앞자리 0을 제거합니다.
 * @param value - 정규화할 값
 * @returns 앞자리 0이 제거된 문자열 (빈 문자열이면 '0' 반환)
 */
export const normalizeNumberValue = (value: string): string => {
  if (value === '') return value;
  return value.replace(/^0+/, '') || '0';
};
