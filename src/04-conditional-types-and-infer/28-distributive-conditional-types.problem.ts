import { Equal, Expect } from "../helpers/type-utils";

type Fruit = "apple" | "banana" | "orange";

// not working because it´s not used in a generic context
// so the entire type Fruit is compared with the entire extends term
// it contains to much so the result is never
type AppleOrBanana0 = Fruit extends "apple" | "banana"
  ? "apple" | "banana"
  : never;

//@ts-expect-error
type tests0 = [Expect<Equal<AppleOrBanana0, "apple" | "banana">>];

// first solution: without generic
// infer what is in the Fruit
// now TS will iterate over it, because it is in a generic context
// T is iterable
type AppleOrBanana = Fruit extends infer T
  ? T extends "apple" | "banana"
    ? T
    : never
  : never;

type tests = [Expect<Equal<AppleOrBanana, "apple" | "banana">>];

// second solution: with generic
// when using a generic the members of the union distribute across it
// T represents each individual member
// T "iterates" trough the members of the union and checks the condition for all of them
type GetAppleOrBanana2<T> = T extends "apple" | "banana" ? T : never;
type AppleOrBanana2 = GetAppleOrBanana2<Fruit>;

type tests2 = [Expect<Equal<AppleOrBanana2, "apple" | "banana">>];

// issue: distributive conditional types
// distributive = verteilend
// attributes are distributed into an union
