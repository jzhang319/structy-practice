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
  let current = head
  let i = 0
  let newNode = new Node(value)

  if (index === 0){
    newNode.next = head
    return newNode
  }

  // console.log(typeof(value))
  while (current !== null){

    if (index - 1 === i){
      newNode.next = current.next
      current.next = newNode
    }
    i += 1
    current = current.next

  }
  return head
};

insertNode(a, 'x', 2);
// a -> b -> x -> c -> d
