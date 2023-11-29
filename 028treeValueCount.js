const a = new Node(12);
const b = new Node(6);
const c = new Node(6);
const d = new Node(4);
const e = new Node(6);
const f = new Node(12);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      12
//    /   \
//   6     6
//  / \     \
// 4   6     12

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeValueCount = (root, target) => {
  // todo
  if (root === null) return 0;
  let occur = 0
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.shift();
    if (current.val === target) occur++;

    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }
  return occur;
};

treeValueCount(a, 6); // -> 3
