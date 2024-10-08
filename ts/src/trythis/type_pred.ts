const isStringNumber = (value: unknown): value is [string, number] =>
  Array.isArray(value) &&
  value.length === 2 &&
  typeof value[0] === "string" &&
  value[1] === "number";

const f1 = (value: number | string | boolean | [string, number]) => {
  if (isStringNumber(value)) {
    console.log(value[0].toUpperCase(), value[1].toFixed());
  }
};

interface Animal {}
interface Dog extends Animal {
  name: string;
}
interface Cat extends Animal {
  punch(): void;
}
class Retriever implements Dog {
  name = "xx";
}

function isDog(a: Animal): a is Dog {
  return "name" in a && typeof a.name === "string";
}

const constCart = {
  X: 1,
  Y: 2,
  Z: 3,
} as const;

type T3 = 1 | 2 | 3;
type T4 = (typeof constCart)[keyof typeof constCart];

try {
  throw new Error("some error!!!!"); // 가
  // throw 'some string error!!!';        // 나
  // throw ['some', 'array', 'error']; // 다
} catch (error) {
  console.log(hasMessageError(error) ? error.message : error); // (라)
}

function hasMessageError(error: unknown): error is Error {
  return (
    error instanceof Error ||
    (typeof error === "object" && error !== null && "message" in error)
  );
}
