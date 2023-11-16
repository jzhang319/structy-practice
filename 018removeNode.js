const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// a -> b -> c -> d -> e -> f

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const removeNode = (head, targetVal) => {
  // todo
  let current = head
  let prev = head
  let moded = false

  if (head.val === targetVal){
    let newHead = head.next
    head = null
    return newHead
  }

  while (current !== null && moded === false) {
    // console.log(current.next)
    // console.log(targetVal)
    if (current.val === targetVal){

      prev.next = current.next
      moded = true

    } else {
      prev = current

    }
      current = current.next

  }
  return head
};

removeNode(a, "c");
// a -> b -> d -> e -> f
