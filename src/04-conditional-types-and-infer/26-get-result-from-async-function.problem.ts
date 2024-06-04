import { Equal, Expect } from "../helpers/type-utils";

const getServerSideProps = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json: { title: string } = await data.json();
  return {
    props: {
      json,
    },
  };
};

// conditional check + infer
// grab out the right thing (props) and return it
// otherwise return never

// my solution
type InferPropsFromServerSideFunction<T> = T extends () => infer R
  ? Awaited<R> extends { props: infer TProps2 }
    ? TProps2
    : never
  : never;

type TypeOfX = typeof getServerSideProps;
type ReturnTypeX = ReturnType<TypeOfX>;
type PromiseX = Awaited<ReturnTypeX>;
type Example = InferPropsFromServerSideFunction<typeof getServerSideProps>;

// Matts solution
// T should extend a function that returns a promise
// inside that promise should be an object
type InferPropsFromServerSideFunction1<T> = T extends () => Promise<{
  props: infer TProps;
}>
  ? TProps
  : never;

type tests = [
  Expect<
    Equal<
      InferPropsFromServerSideFunction<typeof getServerSideProps>,
      { json: { title: string } }
    >
  >
];

type tests1 = [
  Expect<
    Equal<
      InferPropsFromServerSideFunction1<typeof getServerSideProps>,
      { json: { title: string } }
    >
  >
];
