const a = new Node(5);
const b = new Node(5);
const c = new Node(7);
const d = new Node(7);
const e = new Node(7);
const f = new Node(6);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// 5 -> 5 -> 7 -> 7 -> 7 -> 6

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const longestStreak = (head) => {
  // todo
  if (head === null) return 0
  let current = head
  let value = head.val
  let maxNum = 0
  let i = 0

  while (current !== null) {
    if ( current.val === value){
      i += 1
      if (i > maxNum) maxNum = i
      // console.log(current.val, ' <-- current val top')
      // console.log(i, ' <-- i')
      // console.log(maxNum, ' <-- maxNum')
    } else {
      // console.log(current.val, ' <--- current val bot')
      value = current.val
      i = 1
    }
    current = current.next
  }
  return maxNum
};

longestStreak(a); // 3
