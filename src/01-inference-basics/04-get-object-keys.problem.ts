import { Equal, Expect } from "../helpers/type-utils";

const testingFrameworks = {
  vitest: {
    label: "Vitest",
  },
  jest: {
    label: "Jest",
  },
  mocha: {
    label: "Mocha",
  },
};

// find an alternative to this:
// type TestingFramework = "vitest" | "jest" | "mocha";
// typeof: extracts the types
// keyof: extract key of each entry
// note: can only be used on types
type TestingFramework = keyof typeof testingFrameworks;

type tests = [Expect<Equal<TestingFramework, "vitest" | "jest" | "mocha">>];
