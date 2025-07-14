import { divide, format, multiply, number, subtract } from "mathjs/number";

/**
 * 将数值转换为百分比字符串
 *
 * @param x 要转换的数值
 * @returns 百分比字符串，如果值为NaN则返回"-"
 */
export function toPercentageString(x: number): string;

/**
 * 将数值转换为百分比字符串
 *
 * @param a 分子
 * @param b 分母
 * @returns 百分比字符串，如果值为NaN则返回"-"
 */
export function toPercentageString(a: number, b: number): string;

export function toPercentageString(a: number, b?: number) {
  const percentageValue = typeof b === "undefined" ? toPercentageValue(a) : toPercentageValue(a, b);
  if (Number.isNaN(percentageValue)) return "-";
  const formattedPercentage = format(percentageValue, { precision: 4 });
  return `${formattedPercentage}%`;
}

export function toPercentageValue(x: number): number;
export function toPercentageValue(a: number, b: number): number;
export function toPercentageValue(a: number, b?: number): number {
  const value = typeof b === "undefined" ? a : divide(a, b);
  if (Number.isNaN(value)) return Number.NaN;
  return multiply(value, 100);
}

/**
 * 创建数值排序函数
 *
 * @param valueMapper 数值映射函数，如果为字符串，则使用对象属性值作为数值
 */
export function sorter<T>(valueMapper: (keyof T) | ((data: T) => number | string)) {
  if (typeof valueMapper === "function") {
    return (a: T, b: T) => subtract(number(valueMapper(a)), number(valueMapper(b)));
  }
  else {
    return (a: T, b: T) => subtract(number(a[valueMapper] as any), number(b[valueMapper] as any));
  }
}
