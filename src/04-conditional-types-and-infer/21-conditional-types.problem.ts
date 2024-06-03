import { Equal, Expect } from "../helpers/type-utils";

// add a type argument T
// T turns this from a static value to a function
// "extends" checks if it matches a pattern
// TS 4.8 only the ternary syntax is possible
type YouSayGoodbyeAndISayHello<T> = T extends "hello" ? "goodbye" : "hello";

type tests = [
  Expect<Equal<YouSayGoodbyeAndISayHello<"hello">, "goodbye">>,
  Expect<Equal<YouSayGoodbyeAndISayHello<"goodbye">, "hello">>
];
