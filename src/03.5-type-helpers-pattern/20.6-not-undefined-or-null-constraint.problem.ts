// outcome: should be anything other then null and undefined
export type Maybe<T extends {}> = T | undefined | null;

// empty object in TS represent everything that is not null or undefined
// Reason: TS does structural comparisons when checking that things are assignable to each other
// an object with keys and types is assignable to an empty oject
// string, number & co: are just objects with various methods associated with it in TS
// TS: everything is an object except for null and undefined
// null/ undefined: has no methods/ no properties/ no props can be assigned

type tests = [
  // @ts-expect-error
  Maybe<null>,
  // @ts-expect-error
  Maybe<undefined>,

  Maybe<string>,
  Maybe<false>,
  Maybe<0>,
  Maybe<"">
];
