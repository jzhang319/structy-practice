# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.next = None

def longest_streak(head):
  current = head
  max_count = 0
  count = 0
  prev = None

  while current is not None:
    if current.val == prev:
      count += 1
    else:
      prev = current.next
      count = 1

    prev = current.val
    if count > max_count:
      max_count = count

    current = current.next

  return max_count
