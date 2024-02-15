# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.left = None
#     self.right = None

# iterative solution
from collections import deque
# def tree_value_count(root, target):
#   if root is None:
#     return 0

#   queue = deque([root])
#   count = 0


#   while queue:
#     current = queue.popleft()

#     if current.val == target:
#       count += 1

#     if current.right is not None:
#       queue.append(current.right)

#     if current.left is not None:
#       queue.append(current.left)

#   return count

# recursive solution
def tree_value_count(root, target):
  if root is None:
    return 0

  match = 1 if root.val == target else 0
  return match + tree_value_count(root.left, target) + tree_value_count(root.right, target)

