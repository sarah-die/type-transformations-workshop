import { Equal, Expect } from "../helpers/type-utils";

// generics (here: type helpers)
// Allows to create functions that return other types
// function<arg of the function> = function return
type ReturnWhatIPassIn<T> = T;

type ReturnTest = ReturnWhatIPassIn<"test">;

type tests = [
  Expect<Equal<ReturnWhatIPassIn<1>, 1>>,
  Expect<Equal<ReturnWhatIPassIn<"1">, "1">>,
  Expect<Equal<ReturnWhatIPassIn<true>, true>>,
  Expect<Equal<ReturnWhatIPassIn<false>, false>>,
  Expect<Equal<ReturnWhatIPassIn<null>, null>>
];
