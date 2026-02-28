/**
 * 将像素值转换为 rem 单位
 * @param px - 像素值
 * @returns rem 字符串
 */
export const pxToRem = (px: number): string => `${px / 16}rem`;
