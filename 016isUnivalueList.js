const a = new Node(7);
const b = new Node(7);
const c = new Node(7);

a.next = b;
b.next = c;

// 7 -> 7 -> 7

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
// time: O(n) space: O(1)
const isUnivalueList = (head) => {
  // todo
  let current = head;
  let value = head.val;

  while (current !== null) {
    if (current.val !== value) {
      // console.log(current.val)
      // console.log(current.next)
      return false;
    } else {
      current = current.next;
    }
  }
  return true;
};

isUnivalueList(a); // true
