import { Equal, Expect } from "../helpers/type-utils";

/**
 * Some docs that might help!
 * https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions
 */

// uppercase = BE / "" = FE
export const programModeEnumMap = {
  GROUP: "group",
  ANNOUNCEMENT: "announcement",
  ONE_ON_ONE: "1on1",
  SELF_DIRECTED: "selfDirected",
  PLANNED_ONE_ON_ONE: "planned1on1",
  PLANNED_SELF_DIRECTED: "plannedSelfDirected",
} as const;

// note: Object.freeze works only on the first level
// as const works on all levels
export const programModeEnumMap2 = Object.freeze({
  GROUP: "group",
  ANNOUNCEMENT: "announcement",
  ONE_ON_ONE: "1on1",
  SELF_DIRECTED: "selfDirected",
  PLANNED_ONE_ON_ONE: "planned1on1",
  PLANNED_SELF_DIRECTED: "plannedSelfDirected",
});

/**
 * const assertions
 * resolve values as constants and their literal (=buchstabengetreu) values
 * add read-only annotations
 *
 * reason why TS types this as string: they can be mutated programModeEnumMap.GROUP = "somethingElse"
 * reason why TS types it as it´s literal value: it´s constant and never gonna change
 */

type ProgramModeEnumMap = typeof programModeEnumMap;

// type them as their values not as string
export type GroupProgram = ProgramModeEnumMap["GROUP"];
export type AnnouncementProgram = ProgramModeEnumMap["ANNOUNCEMENT"];
export type OneOnOneProgram = ProgramModeEnumMap["ONE_ON_ONE"];
export type SelfDirectedProgram = ProgramModeEnumMap["SELF_DIRECTED"];
export type PlannedOneOnOneProgram = ProgramModeEnumMap["PLANNED_ONE_ON_ONE"];
export type PlannedSelfDirectedProgram =
  ProgramModeEnumMap["PLANNED_SELF_DIRECTED"];

/**
 * Arrays
 */
const arr = [1, 2, 3];
arr[0] = 5;

const arrAsConst = [1, 2, 3] as const;
// arrAsConst[0] = 5; error because it´s read-only

type tests = [
  Expect<Equal<GroupProgram, "group">>,
  Expect<Equal<AnnouncementProgram, "announcement">>,
  Expect<Equal<OneOnOneProgram, "1on1">>,
  Expect<Equal<SelfDirectedProgram, "selfDirected">>,
  Expect<Equal<PlannedOneOnOneProgram, "planned1on1">>,
  Expect<Equal<PlannedSelfDirectedProgram, "plannedSelfDirected">>
];
