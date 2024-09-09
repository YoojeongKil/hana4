let xuser: { id: number; name: string };
xuser = { id: 1, name: "xx" }; // OK
// xuser = { id: 1 }; // Error (Property 'name' missing in type)
// xuser = { id: 1, name: 'xx', age: 30 };
xuser = { id: 1, name: "xx" };
const tmp = { id: 1, name: "xx", age: 30 };
xuser = tmp; // Error ({id, name, age} is not assignable to type {id,name} )

type Emp = { id: number; name: string };
const lee: Emp = { id: 1, name: "Lee" };
const kim = { id: 2, name: "Kim", addr: "Seoul" };

const arr0: Emp[] = [{ id: 1, name: "Hong" }];
const arr1: Emp[] = [{ id: 1, name: "Hong" }, kim];
const arr2: Emp[] = [{ id: 2, name: "Kim", addr: "Seoul" }, kim];
// const arr3: Emp[] = [{ id: 2, name: "Kim", addr: "Seoul" }, lee]; // Error

// const arr4: [User, Emp] = [{ id: 2, name: "Kim", addr: "Seoul" }, kim]; // Error

type Emp2 = { id: number; name: string; addr: string };
type Emp3 = { id: number; name: string; road: string };

const xemp: Emp | Emp2 | Emp3 = {
  id: 1,
  name: "xxx",
  addr: "Pusan",
  road: "Sumyun",
};
