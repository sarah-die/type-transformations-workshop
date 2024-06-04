import { Equal, Expect } from "../helpers/type-utils";

const parser1 = {
  parse: () => 1,
};

const parser2 = () => "123";

const parser3 = {
  extract: () => true,
};

// my solution
type GetParserResult<T> = T extends () => infer TReturn
  ? TReturn
  : T extends { parse: () => infer TProps } | { extract: () => infer TProps }
  ? TProps
  : never;

// Matts solution: use an union type for all three
// if T extends any of these in the union type, take the results and return them
// good to avoid long ternaries
type GetParserResult1<T> = T extends
  | { parse: () => infer TResult }
  | (() => infer TResult)
  | { extract: () => infer TResult }
  ? TResult
  : never;

type tests = [
  Expect<Equal<GetParserResult<typeof parser1>, number>>,
  Expect<Equal<GetParserResult<typeof parser2>, string>>,
  Expect<Equal<GetParserResult<typeof parser3>, boolean>>
];
