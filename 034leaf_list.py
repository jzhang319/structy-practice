# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.left = None
#     self.right = None

# a = Node("a")
# b = Node("b")
# c = Node("c")
# d = Node("d")
# e = Node("e")
# f = Node("f")

# a.left = b
# a.right = c
# b.left = d
# b.right = e
# c.right = f

def leaf_list(root):
  if root is None:
    return []

  stack = [ root ]
  result = []

  while stack:
    current = stack.pop()

    if current.left is None and current.right is None:
      result.append(current.val)

    if current.right is not None:
      stack.append(current.right)

    if current.left is not None:
      stack.append(current.left)


  return result

