interface TUser {
  id: number;
  name: string;
}

interface Dept {
  id: number;
  dname: string;
  captain: string;
}

// 방법1)
interface Ud2 {
  [k: string]: number | string;
  id: number;
  addr: string;
}

// type KS = keyof User;
type X = "id" | "name" | "dname" | "captain";
type Y = keyof User | keyof Dept;

// // 방법2)
// interface Ud2<T> {
//   [k in Y]: T[k];
// }

type Ud = (User | Dept) & { addr: string }; // 정답!

// 다음 코드가 오류가 없으면 통과!
const ud2: Ud2 = { id: 1, name: "HH", addr: "Seoul" };
const ud3: Ud2 = { id: 1, dname: "HH", captain: "HH", addr: "Seoul" };
