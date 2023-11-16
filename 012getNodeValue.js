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

const getNodeValue = (head, index) => {
  // todo
  let i = 0
  let current = head
  while (current !== null) {
    if (i === index){
      return current.val
    } else {
      current = current.next
      i+=1
    }
  }
  return null
};


getNodeValue(a, 2); // 'c'
