const a = new Node(5);
const b = new Node(11);
const c = new Node(54);
const d = new Node(20);
const e = new Node(15);
const f = new Node(1);
const g = new Node(3);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
e.left = f;
e.right = g;

//        5
//     /    \
//    11    54
//  /   \
// 20   15
//      / \
//     1   3

maxPathSum(a); // -> 59

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// sum of the path with the largest sum from root to leaf node
const maxPathSum = (root) => {
  // todo
  if (root === null) return -Infinity;
  if (root.left === null && root.right === null) return root.val;
  const maxChildSum = Math.max(maxPathSum(root.left),maxPathSum(root.right))
  return root.val + maxChildSum
};

maxPathSum(a); // -> 18
