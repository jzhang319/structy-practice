const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const insertNode = (head, value, index) => {
  // todo
};

insertNode(a, 'x', 2);
// a -> b -> x -> c -> d
