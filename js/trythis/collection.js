const assert = require("assert");

// function Stack() {
//   const arr = [];
//   return {
//     push(x) { arr.push() },
//     pop
//   }
// }

class Stack {
  #arr;
  // 1) new stack(1,2,3) ==> [1,2,3]
  // 2) new stack([1,2,3]) ==> [[1,2,3]]
  // 3) new Stack([[1,2,3]]) ==> [[[1,2,3]]]
  constructor(...args) {
    // this.arr = Array.isArray(args[0]) ? [...args] : args;
    this.#arr = [...args];
  }

  // 1) push(1) <= arguements.length === 1
  // 2) push(1,2)
  push(...args) {
    // cf. front-end
    // this.arr = [...this.arr, ...args];
    this.#arr.push(...args);
    return this.#arr;
  }

  pop() {
    return this.#arr.pop();
  }

  toArray() {
    return this.#arr;
  }
}

const stack = new Stack();
assert.deepStrictEqual(stack.toArray(), []);
stack.push(3); // 추가하기
assert.deepStrictEqual(stack.toArray(), [3]);
stack.pop();
assert.deepStrictEqual(stack.toArray(), []);

const stackT = new Stack(...[[1], [2]]);
assert.deepStrictEqual(stackT.toArray(), [[1], [2]]);

// const stack2 = new Stack(1, 2);
const stack2 = new Stack(...[1, 2]);
assert.deepStrictEqual(stack2.toArray(), [1, 2]);
stack2.push(2).push(3); // 추가하기
assert.deepStrictEqual(stack2.toArray(), [1, 2, 2, 3]);
assert.strictEqual(stack2.pop(), 3);
// assert.deepStrictEqual(stack2.toArray(), [1, 2]);
stack2.push(4, 5); // 추가하기
assert.deepStrictEqual(stack2.toArray(), [1, 2, 2, 4, 5]);

// Todo: check side-effect!!
stack2.arr = [5, 6, 7]; //error
assert.notDeepStrictEqual(stack2.toArray(), [5, 6, 7]);

//--------------------------
class Queue {
  #arr;

  constructor(...args) {
    // this.arr = Array.isArray(args[0]) ? [...args] : args;
    this.#arr = [...args];
  }

  enqueue(...args) {
    // this.#arr.push(...args);
    this.#arr.unshift(...args.reverse());
    return this.#arr;
  }

  dequeue() {
    return this.#arr.pop();
  }

  toArray() {
    return this.#arr;
  }
}
const queue = new Queue();
assert.deepStrictEqual(queue.toArray(), []);
queue.enqueue(3); // 추가하기
assert.deepStrictEqual(queue.toArray(), [3]);
queue.enqueue(2); // 추가하기
assert.deepStrictEqual(queue.toArray(), [2, 3]);
assert.strictEqual(queue.dequeue(), 3);
assert.deepStrictEqual(queue.toArray(), [2]);
queue.enqueue(5, 6); // 추가하기
assert.deepStrictEqual(queue.toArray(), [6, 5, 2]);
