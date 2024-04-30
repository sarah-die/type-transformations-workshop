import { Equal, Expect } from "../helpers/type-utils";

// task: take makeQuery and get param types from it
const makeQuery = (
  url: string,
  opts?: {
    method?: string;
    headers?: {
      [key: string]: string;
    };
    body?: string;
  },
) => {};

// note: Parameters returns a tuple type
type MakeQueryParameters = Parameters<typeof makeQuery>;
// access specific param type
type MakeQueryParametersSecondArg = MakeQueryParameters[1];

type tests = [
  Expect<
    Equal<
      MakeQueryParameters,
      [
        url: string,
        opts?: {
          method?: string;
          headers?: {
            [key: string]: string;
          };
          body?: string;
        },
      ]
    >
  >,
];
