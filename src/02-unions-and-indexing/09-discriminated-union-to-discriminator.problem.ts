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

/**
 * when you access a key on a union you access all of the possible permutations of that key
 * this only works when all entities of a union have the key that is being accessed
 *
 * indexed access can be used when the key belongs to each member of the union
 */
type EventType = Event["type"];

type tests = [Expect<Equal<EventType, "click" | "focus" | "keydown">>];
