import { Equal, Expect } from "../helpers/type-utils";

// if T extends { data: unknown }, we know it has a data attribute so we can just access it
// using indexed access
type GetDataValue<T> = T extends { data: unknown } ? T["data"] : never;

// infer = ableiten
// whatever is passed as data infer its type
// TData is only created for the if-condition and can´t be accessed in the else-condition
// infer allows, inside the scope of a conditional check, to pattern match against the condition and to extract a new type variable
type GetDataValue2<T> = T extends { data: infer TData } ? TData : never;
// it is used to capture types dynamically within the extends clause of a conditional type

type tests = [
  Expect<Equal<GetDataValue<{ data: "hello" }>, "hello">>,
  Expect<Equal<GetDataValue<{ data: { name: "hello" } }>, { name: "hello" }>>,
  Expect<
    Equal<
      GetDataValue<{ data: { name: "hello"; age: 20 } }>,
      { name: "hello"; age: 20 }
    >
  >,
  // Expect that if you pass in string, it
  // should return never
  Expect<Equal<GetDataValue<string>, never>>
];

type tests2 = [
  Expect<Equal<GetDataValue2<{ data: "hello" }>, "hello">>,
  Expect<Equal<GetDataValue2<{ data: { name: "hello" } }>, { name: "hello" }>>,
  Expect<
    Equal<
      GetDataValue2<{ data: { name: "hello"; age: 20 } }>,
      { name: "hello"; age: 20 }
    >
  >,
  // Expect that if you pass in string, it
  // should return never
  Expect<Equal<GetDataValue2<string>, never>>
];

// The infer keyword compliments conditional types and cannot be used outside an extends clause.
// infer is used within conditional types to declare a type variable within our constraint to capture
// types dynamically within the extends clause of a conditional type.
