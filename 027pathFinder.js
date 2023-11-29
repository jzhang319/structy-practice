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

const pathFinder = (root, target) => {
  // todo
  if (root === null) return null;
  if (root.val === target) return [root.val]

  const leftPath = pathFinder(root.left, target)
  if (leftPath !== null){
    return [root.val, ...leftPath] // <--------
  }

  const rightPath = pathFinder(root.right, target)
  if (rightPath !== null){
    return [root.val, ...rightPath] // <--------
  }

  return null
};

pathFinder(a, "c"); // -> ['a', 'c']


// when tree is extremely long, this has an O(n) runtime while the 1st solution
// has an O(n^2) runtime because of the spread operator

// const pathFinder = (root, target) => {
//   const result = pathFinderHelper(root, target);a
//   if (result === null) {
//     return null;
//   } else {
//     return result.reverse();
//   }
// };

// const pathFinderHelper = (root, target) => {
//   // todo
//   if (root === null) return null;
//   if (root.val === target) return [root.val];

//   const leftPath = pathFinderHelper(root.left, target);
//   if (leftPath !== null) {
//     leftPath.push(root.val);
//     return leftPath;
//   }

//   const rightPath = pathFinderHelper(root.right, target);
//   if (rightPath !== null) {
//     rightPath.push(root.val);
//     return rightPath;
//   }

//   return null;
// };
