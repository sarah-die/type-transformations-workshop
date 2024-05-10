import { Equal, Expect } from "../helpers/type-utils";

type Routes = "/users" | "/users/:id" | "/posts" | "/posts/:id";

// like regex = allows TS to dive deep into the strings to understand all different parts of them
type DynamicRoutes = Extract<Routes, `${string}/:${string}`>;

type tests = [Expect<Equal<DynamicRoutes, "/users/:id" | "/posts/:id">>];
