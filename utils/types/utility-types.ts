/**
 * Brand
 * @desc Define nominal type of U based on type of T. Similar to Opaque types in Flow.
 * @example
 *   type USD = Brand<number, "USD">
 *   type EUR = Brand<number, "EUR">
 *
 *   const tax = 5 as USD;
 *   const usd = 10 as USD;
 *   const eur = 10 as EUR;
 *
 *   function gross(net: USD): USD {
 *     return (net + tax) as USD;
 *   }
 *
 *   // Expect: No compile error
 *   gross(usd);
 *   // Expect: Compile error (Type '"EUR"' is not assignable to type '"USD"'.)
 *   gross(eur);
 */
export type Brand<T, U> = T & { __brand: U };
