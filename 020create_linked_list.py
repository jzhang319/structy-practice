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


# Time: O(n^2) due to the slice operation
# Space: O(n)
# recursive solution
# def create_linked_list(values):
#   if len(values) == 0:
#     return None
#   head = Node(values[0])
#   head.next = create_linked_list(values[1:])
#   return head

# better recursive solution without slicing
# def create_linked_list(values, i = 0):
#   if i = len(values):
#     return None
#   head = Node(values[i])
#   head.next = create_linked_list(values, i + 1)
#   return head
