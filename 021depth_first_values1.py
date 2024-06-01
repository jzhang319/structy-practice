class Node:
  def __init__(self, val):
    self.val = val
    self.next = None

# iterative solution
def depth_first_values(root):
  if root is None:
    return []

  values = []
  stack = [root]

  while stack:
    current = stack.pop()
    values.append(current.val)

    if current.right is not None:
      values.append(current.right)

    if current.left is not None:
      values.append(current.left)

  return values
