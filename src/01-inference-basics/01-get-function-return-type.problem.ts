import { Equal, Expect } from "../helpers/type-utils";

const myFunc = () => {
  return "hello";
};

// typeof with funtions
type MyFunc = typeof myFunc;
// ReturnType = Utility type
type ReturnValue = ReturnType<MyFunc>

// one liner
type MyFuncReturn = ReturnType<typeof myFunc>;

type tests = [Expect<Equal<MyFuncReturn, string>>];
