/**
 * Date 객체를 "YYYY년 M월 D일" 형식의 문자열로 변환
 */
export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}년 ${month}월 ${day}일`;
};
