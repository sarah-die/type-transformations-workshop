// these two solutions allow the array to be empty
type NonEmptyArray1<T> = T[];
type NonEmptyArray2<T> = Array<T>;

// define specific length for array type
type ArrayWithThreeEntries<T> = [T, T, T];
const example: ArrayWithThreeEntries<number> = [1, 2, 3];
// @ts-expect-error
const example2: ArrayWithThreeEntries<number> = [1, 2, 3, 4];

// at least one element has to be passed in
type NonEmptyArray0<T> = [T, ...T[]];
type NonEmptyArray<T> = [T, ...Array<T>];

export const makeEnum = (values: NonEmptyArray<string>) => {};

makeEnum(["a"]);
makeEnum(["a", "b", "c"]);

// should not accept an array of length zero
// @ts-expect-error
makeEnum([]);
