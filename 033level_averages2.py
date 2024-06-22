# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.left = None
#     self.right = None

from statistics import mean

def level_averages(root):
  levels = []
  fill_level(root, levels, 0)
  avgs = []

  return [mean(level) for level in levels]

def fill_level(root, levels, level_num):
  if root is None:
    return

  if len(levels) == level_num:
    levels.append([root.val])
  else:
    levels[level_num].append(root.val)

  fill_level(root.left, levels, level_num + 1)
  fill_level(root.right, levels, level_num + 1)
