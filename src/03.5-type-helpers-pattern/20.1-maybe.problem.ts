import { Equal, Expect } from "../helpers/type-utils";

type Maybe<T> = T | null | undefined;
// note: two union members of the same type get squashed together

type tests = [
  Expect<Equal<Maybe<string>, string | null | undefined>>,
  Expect<Equal<Maybe<number>, number | null | undefined>>,
  Expect<Equal<Maybe<boolean>, boolean | null | undefined>>,
  Expect<Equal<Maybe<null>, null | undefined>>
];
