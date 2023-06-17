import { divide, format, multiply, number, subtract } from "mathjs/number";

export function percentage(a: number, b: number): string {
  const percentageValue = format(
    divide(
      multiply(a, 100),
      b,
    ),
    { precision: 4 },
  );
  return percentageValue;
}

export function toPercentageString(value: number) {
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
