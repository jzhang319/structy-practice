# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.left = None
#     self.right = None

def tree_value_count(root, target):
  if root is None:
    return 0

  queue = deque( [root] )

  count = 0

  while queue:
    current = queue.popleft()

    if current.val == target:
      count += 1

    if current.right is not None:
      queue.append(current.right)

    if current.left is not None:
      queue.append(current.left)

  return count
