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

const treeSum = (root) => {
  // todo
  if (root === null) return 0;
  const stack = [root];
  let sum = 0;
  while (stack.length > 0) {
    const current = stack.shift();
    sum += current.val;
    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }
  return sum
};

treeSum(a); // -> 21
