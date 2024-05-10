import { Equal, Expect } from "../helpers/type-utils";

type Event = `log_in` | "log_out" | "sign_up";

// keys should be uppercase
// Uppercase Utility Type maps over each member of a union and transforms it
// Capitalize / Lowercase / Uncapitalize
type ObjectOfKeys = Record<Uppercase<Event>, string>;

type tests = [
  Expect<
    Equal<
      ObjectOfKeys,
      {
        LOG_IN: string;
        LOG_OUT: string;
        SIGN_UP: string;
      }
    >
  >
];
