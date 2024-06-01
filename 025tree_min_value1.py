# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.left = None
#     self.right = None

def tree_min_value(root):

  stack = [root]

  min_val = float("inf")

  while stack:
    current = stack.pop()
    if current.val < min_val:
      min_val = current.val

    if current.right is not None:
      stack.append(current.right)

    if current.left is not None:
      stack.append(current.left)

  return min_val
 