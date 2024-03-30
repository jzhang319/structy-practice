def intersection(a, b):
  result = []

  for item in b:
    if item in a:
      result.append(item)

  return result
