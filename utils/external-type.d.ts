declare module "mathjs/number" {
    function add(a: number, b: number): number;
    function subtract(a: number, b: number): number;
    function multiply(a: number, b: number): number;
    function divide(a: number, b: number): number;
  
    function number(v: string | number): number;
  
    function format(n: number, options: { precision: number }): string;
  }
  