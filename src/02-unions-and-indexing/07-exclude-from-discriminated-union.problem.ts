import { Equal, Expect } from "../helpers/type-utils";

export type Event =
  | {
      type: "click";
      event: MouseEvent;
    }
  | {
      type: "focus";
      event: FocusEvent;
    }
  | {
      type: "keydown";
      event: KeyboardEvent;
    };

// utility type
// reverse extract
// excluding a type of a union by certain condition
type NonKeyDownEvents = Exclude<Event, { type: "keydown" }>;

type tests = [
  Expect<
    Equal<
      NonKeyDownEvents,
      | { type: "click"; event: MouseEvent }
      | { type: "focus"; event: FocusEvent }
    >
  >
];
