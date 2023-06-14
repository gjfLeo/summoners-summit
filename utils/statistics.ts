import { divide, format, multiply } from "mathjs/number";

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
