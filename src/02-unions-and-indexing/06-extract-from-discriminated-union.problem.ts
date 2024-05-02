import { Equal, Expect } from "../helpers/type-utils";

export type Event =
  | {
      type: "click";
      event: MouseEvent;
    }
  | {
      type: "keydown";
      event: KeyboardEvent;
    };

// utility type
// constructs a type by extracting from Type
type ClickEvent = Extract<Event, { type: "click" }>;
type ClickEvent2 = Extract<Event, { event: MouseEvent }>;

// note: Extract returns all the objects that fits the checked as a union

type Fruit = "banana" | "apple" | "orange";
type BananaAndOrange = Extract<Fruit, "banana" | "orange">;

type tests = [Expect<Equal<ClickEvent, { type: "click"; event: MouseEvent }>>];
type tests2 = [
  Expect<Equal<ClickEvent2, { type: "click"; event: MouseEvent }>>
];
