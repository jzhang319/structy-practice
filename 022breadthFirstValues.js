const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

// no recursion for breadth first traversals
const breadthFirstValues = (root) => {
  // todo
  if(root === null) return [];

  const queue = [root];
  const result = [];

  while(queue.length > 0){
    const current = queue.shift();
    result.push(current.val);
    if(current.left) queue.push(current.left);
    if(current.right) queue.push(current.right);
  }
  return result;
};

breadthFirstValues(a);
//    -> ['a', 'b', 'c', 'd', 'e', 'f']
