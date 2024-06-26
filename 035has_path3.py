from collections import deque

def has_path(graph, src, dst):
  queue = deque([src])

  while queue:
    current = queue.popleft()
    if current == dst:
      return True
    for neighbor in graph[current]:
      queue.append(neighbor)
  return False

# recursive version
def has_path(graph, src, dst):
  if src == dst:
    return True

  for neighbor in graph[src]:
    if has_path(graph, neighbor, dst) == True:
      return True

  return False
