class Node:
  def __init__(self, val):
    self.val = val
    self.next = None

def is_univalue_list(head):
  current = head
  val = head.val

  while current is not None:
    if current.val == val:
      current = current.next
    else:
      return False

  return True
