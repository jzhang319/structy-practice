# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.next = None

# iterative solution
def sum_list(head):
  values = 0
  current = head

  while current is not None:
    values += current.val
    current = current.next

  return values
