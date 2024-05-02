// Gabriel Vergnaud explains his idea of the union type multiverse

export {};

/**
 * what is the JS equivalent of a union type?
 * union types represent different possibilities your code might handle over time
 *
 * example: go to the office -> be on time or grab a coffee -> be late
 * TS: all of these possibilities exist simultaneously
 * like having a multiverse and everything that can happen happens
 * when defining a union type you create a multiverse
 * since everything can happen we have to evaluate all paths that are defined due to the union
 *
 *
 * TLDR:
 * union types represent the different possibilities in your code
 * the different possibilities the code cares about on the type level
 * at runtime the code can be run with lots of different values
 * all of those possible branches have to be defined
 * */
