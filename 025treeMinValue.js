const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeMinValue = (root) => {
  // todo
  if (root === null) return null;
  const stack = [root];
  let min = root.val;
  while (stack.length > 0) {
    const current = stack.shift();
    if (current.val < min) min = current.val;
    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }
  return min
};

treeMinValue(a); // -> -2
