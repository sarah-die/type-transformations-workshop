import { Equal, Expect } from "../helpers/type-utils";

// as const = all elements are typed as their literal values
// fruits should not be string[]
const fruits = ["apple", "banana", "orange"] as const;

type FruitKeys = typeof fruits;

// indexed access type into the array of types
// note: indexed access can be used with array indexes
type AppleOrBanana = FruitKeys[0 | 1]; // "apple" | "banana"

// [number] will work for all elements of the array and returns them as a union
type Fruit = FruitKeys[number]; // "apple" | "banana" | "orange"

type tests = [
  Expect<Equal<AppleOrBanana, "apple" | "banana">>,
  Expect<Equal<Fruit, "apple" | "banana" | "orange">>
];
