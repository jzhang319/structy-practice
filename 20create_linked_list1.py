class Node:
  def __init__(self, val):
    self.val = val
    self.next = None

# Time: O(n)
# Space: O(n)
# iterative solution
def create_linked_list(values):
  dummy_head = Node(None)
  tail = dummy_head

  for val in values:
    tail.next = Node(val)
    tail = tail.next

  return dummy_head.next
