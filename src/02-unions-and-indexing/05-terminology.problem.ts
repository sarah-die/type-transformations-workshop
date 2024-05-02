/**
 * It's important to understand the terminology around unions:
 *
 * One of the type declarations below is a union.
 * One of the type declarations below is a discriminated union.
 * One of the type declarations below is an enum.
 *
 * Which is which?
 */

/**
 * discriminated union
 * have a common key (a key that all entities have) or a common aspect to that object that is the discriminator
 * discriminator = Unterscheidungsmerkmal
 * usage: can represent different props in react
 * get access to props depending on a discriminator
 */
type A =
  | {
      type: "a";
      whatEver: string;
    }
  | {
      type: "b";
      whoEver: string;
    }
  | {
      type: "c";
      whereEver: string;
    };

const getUnion = (result: A) => {
  // not possible to access it here, because it does not exist on one of the other discriminators
  result.whatEver;
  if (result.type === "a") {
    // gives access to one of the objects
    result.whatEver;
  }
};

/**
 * union
 * a union does not carry properties along with it
 * usage: check if it´s a then do something
 */
type B = "a" | "b" | "c";

// enum
enum C {
  A = "a",
  B = "b",
  C = "c",
}

export {};
