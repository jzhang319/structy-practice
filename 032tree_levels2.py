# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.left = None
#     self.right = None

def tree_levels(root):
  if root is None:
    return []

  levels = []

  stack = [(root, 0 )]

  while stack:
    node, levelnum = stack.pop()

    if len(levels) == levelnum:
      levels.append([node.val])
    else:
      levels[levelnum].append(node.val)

    if node.right is not None:
      stack.append((node.right, levelnum + 1))

    if node.left is not None:
      stack.append((node.left, levelnum + 1))

    return levels
