const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");
const h = new Node("h");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /       \
//   g         h

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeIncludes = (root, target) => {
  if (root === null) return false;
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.shift();
    if (current.val === target) return true;
    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }
  return false;
};

treeIncludes(a, "p"); // -> false
