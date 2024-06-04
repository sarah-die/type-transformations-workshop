// Daniel Rosenwasser explains why regex types WEREN'T added to TypeScript

export {};

// expressions like "this takes a string 5 characters long" were wished for
// possible solution: a type that is a regular expression
// but to use capture syntax like in regex does not make sense
// contra: regex are highly engine dependent

// template literals
// support patterns
// and infer from parts of the pattern
// e.g. it starts with this string and ends with this string and grab what is in the middle

// idea: take template literal types and compose them with conditional types (which lets you use the infer syntax)
// conditional type and infer where concepts that already existed and only had to be composed to a new concept

// conditional types allow to capture types out of other types
// this concept allows to capture types out of string literal types
