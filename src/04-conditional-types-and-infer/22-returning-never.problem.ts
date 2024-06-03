import { Equal, Expect } from "../helpers/type-utils";

type YouSayGoodbyeAndISayHello<T> = T extends "hello"
  ? "goodbye"
  : T extends "goodbye"
  ? "hello"
  : never;

type YouSayGoodbyeAndISayHello2<T> = T extends "hello" | "goodbye"
  ? T extends "hello"
    ? "goodbye"
    : "hello"
  : never;

// never is a way to signal to your types that something should never happen
// never can be used to specify the "else"-logic
// when never is returned it will throw an error

type tests = [
  Expect<Equal<YouSayGoodbyeAndISayHello<"hello">, "goodbye">>,
  Expect<Equal<YouSayGoodbyeAndISayHello<"goodbye">, "hello">>,
  Expect<Equal<YouSayGoodbyeAndISayHello<"alright pal">, never>>,
  Expect<Equal<YouSayGoodbyeAndISayHello<1>, never>>
];

type tests2 = [
  Expect<Equal<YouSayGoodbyeAndISayHello2<"hello">, "goodbye">>,
  Expect<Equal<YouSayGoodbyeAndISayHello2<"goodbye">, "hello">>,
  Expect<Equal<YouSayGoodbyeAndISayHello2<"alright pal">, never>>,
  Expect<Equal<YouSayGoodbyeAndISayHello2<1>, never>>
];
