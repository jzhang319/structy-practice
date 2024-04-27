
# iterative solution
def sum_lists(head):
  values = 0
  current = head

  while current is not None:
    values += current.val
    current = current.next

  return values
