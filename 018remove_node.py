# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.next = None

def remove_node(head, target_val):
  current = head
  prev = None

  if current.val == target_val:
    return head.next

  while current is not None:
    if current.val == target_val:
      prev.next = current.next
      break

    prev = current
    current = current.next

  return head
