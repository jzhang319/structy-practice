# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.next = None

def reverse_list(head):
  prev = None
  current = head

  while current is not None:
    next_node = current.next
    current.next = prev
    prev = current
    current = next_node


  return prev
