const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const howHigh = (node) => {
  // todo
  if (node === null) return -1;

  const leftTreeHeight = howHigh(node.left);
  const rightTreeHeight = howHigh(node.right);

  return 1 + Math.max(leftTreeHeight, rightTreeHeight);
};

howHigh(a); // -> 2
