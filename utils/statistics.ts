import { format, multiply, number, subtract } from "mathjs/number";

/**
 * 将数值转换为百分比字符串
 *
 * @param value 要转换的数值
 * @returns 百分比字符串，如果值为NaN则返回"-"
 */
export function toPercentageString(value: number) {
  if (Number.isNaN(value)) return "-";
  const percentageValue = format(multiply(value, 100), { precision: 4 });
  return `${percentageValue}%`;
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
