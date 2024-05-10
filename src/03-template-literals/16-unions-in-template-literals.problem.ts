import { Equal, Expect } from "../helpers/type-utils";

type BreadType = "rye" | "brown" | "white";
type Filling = "cheese" | "ham" | "salami";

// passing a union type into a template literal
// TS automatically expands it so that you get union type back out of it
type Sandwich = `${BreadType} sandwich with ${Filling}`;

type tests = [
  Expect<
    Equal<
      Sandwich,
      | "rye sandwich with cheese"
      | "rye sandwich with ham"
      | "rye sandwich with salami"
      | "brown sandwich with cheese"
      | "brown sandwich with ham"
      | "brown sandwich with salami"
      | "white sandwich with cheese"
      | "white sandwich with ham"
      | "white sandwich with salami"
    >
  >
];
