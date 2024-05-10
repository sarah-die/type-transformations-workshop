import { Equal, Expect } from "../helpers/type-utils";

// argument does not have to be passed
// if it is not passed it defaults to the given value
// note: optional type params have to be the last ones
type CreateDataShape<TData, TError = undefined> = {
  data: TData;
  error: TError;
};

type MaybeError = Error | undefined;
type CreateDataShape2<TData, TError extends MaybeError = undefined> = {
  data: TData;
  error: TError;
};

type tests = [
  Expect<
    Equal<
      CreateDataShape<string>,
      {
        data: string;
        error: undefined;
      }
    >
  >,
  Expect<
    Equal<
      CreateDataShape<boolean, SyntaxError>,
      {
        data: boolean;
        error: SyntaxError;
      }
    >
  >
];
