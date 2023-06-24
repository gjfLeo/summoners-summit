import { format, multiply, number, subtract } from "mathjs/number";

export function toPercentageString(value: number) {
  if (Number.isNaN(value)) return "-";
  const percentageValue = format(multiply(value, 100), { precision: 4 });
  return `${percentageValue}%`;
}

export function sorter<T>(valueExtractor: (keyof T) | ((data: T) => number | string)) {
  if (typeof valueExtractor === "function") {
    return (a: T, b: T) => subtract(number(valueExtractor(a)), number(valueExtractor(b)));
  }
  else {
    return (a: T, b: T) => subtract(number(a[valueExtractor] as any), number(b[valueExtractor] as any));
  }
}
