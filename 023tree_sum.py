# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.left = None
#     self.right = None

def tree_sum(root):
  if root is None:
    return 0

  values = 0
  stack = [root]

  while stack:
    current = stack.pop()
    values += current.val

    if current.right is not None:
      stack.append(current.right)
      
    if current.left is not None:
      stack.append(current.left)

  return values
