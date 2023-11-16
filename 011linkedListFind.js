const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const linkedListFind = (head, target) => {
  // todo
  let current = head
  while (current !== null) {
    if (current.val === target) {
      return true
    } else {
      current = current.next
    }
  }
  return false
};





linkedListFind(a, "c"); // true
