const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d


const linkedListValues = (head) => {
  // todo
  const result = [];
  let current = head;
  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }
  return result;
};

linkedListValues(a); // -> [ 'a', 'b', 'c', 'd' ]
