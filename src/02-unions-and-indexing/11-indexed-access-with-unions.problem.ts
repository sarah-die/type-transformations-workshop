import { Equal, Expect } from "../helpers/type-utils";

export const programModeEnumMap = {
  GROUP: "group",
  ANNOUNCEMENT: "announcement",
  ONE_ON_ONE: "1on1",
  SELF_DIRECTED: "selfDirected",
  PLANNED_ONE_ON_ONE: "planned1on1",
  PLANNED_SELF_DIRECTED: "plannedSelfDirected",
} as const;

type ProgramModeEnumMap = typeof programModeEnumMap;

// solution 1
export type IndividualProgram =
  | ProgramModeEnumMap["ONE_ON_ONE"]
  | ProgramModeEnumMap["PLANNED_ONE_ON_ONE"]
  | ProgramModeEnumMap["PLANNED_SELF_DIRECTED"]
  | ProgramModeEnumMap["SELF_DIRECTED"];

// note: indexed access can be passed a union than a union is returned
export type IndividualProgram2 = ProgramModeEnumMap[
  | "ONE_ON_ONE"
  | "PLANNED_ONE_ON_ONE"
  | "SELF_DIRECTED"
  | "PLANNED_SELF_DIRECTED"];

// solution 2
type Example = Exclude<
  keyof typeof programModeEnumMap,
  "GROUP" | "ANNOUNCEMENT"
>;

export type IndividualProgram3 = ProgramModeEnumMap[Example];

type tests = [
  Expect<
    Equal<
      IndividualProgram,
      "1on1" | "selfDirected" | "planned1on1" | "plannedSelfDirected"
    >
  >
];

type tests2 = [
  Expect<
    Equal<
      IndividualProgram2,
      "1on1" | "selfDirected" | "planned1on1" | "plannedSelfDirected"
    >
  >
];

type tests3 = [
  Expect<
    Equal<
      IndividualProgram3,
      "1on1" | "selfDirected" | "planned1on1" | "plannedSelfDirected"
    >
  >
];
