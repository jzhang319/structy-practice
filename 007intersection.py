# brute force solution
def intersection(a, b):
  result = []

  for item in b:
    if item in a:
      result.append(item)

  return result

# more efficient
def intersection(a, b):
  set_a = set(a)
  return [ item for item in b if item in set_a ]
