// Might come in handy!
// https://millsp.github.io/ts-toolbelt/modules/string_split.html

import { S } from "ts-toolbelt";
import { Equal, Expect } from "../helpers/type-utils";

// split a string at the type level
type Path = "Users/John/Documents/notes.txt";

type SplitPath = S.Split<Path, "/">;

type tests = [
  Expect<Equal<SplitPath, ["Users", "John", "Documents", "notes.txt"]>>
];
