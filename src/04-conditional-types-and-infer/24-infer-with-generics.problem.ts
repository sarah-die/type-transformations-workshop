import { Equal, Expect } from "../helpers/type-utils";

interface MyComplexInterface<Event, Context, Name, Point> {
  getEvent: () => Event;
  getContext: () => Context;
  getName: () => Name;
  getPoint: () => Point;
}

type Example = MyComplexInterface<
  "click",
  "window",
  "my-event",
  { x: 12; y: 14 }
>;

type GetPoint0<T> = T extends MyComplexInterface<any, any, any, any>
  ? ReturnType<T["getPoint"]>
  : never;

// use all the benefits of being able to extract out all the members of the type arguments of the interface
// without needing to dive deep into the element itself & understand its structure
// multiple slots can be inferred
// extract the type arguments to another type helper
type GetPoint<T> = T extends MyComplexInterface<any, any, any, infer TPoint>
  ? TPoint
  : never;

type tests0 = [Expect<Equal<GetPoint0<Example>, { x: 12; y: 14 }>>];
type tests = [Expect<Equal<GetPoint<Example>, { x: 12; y: 14 }>>];
