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

    # for level in levels:
    #   avgs.append(mean(level))
    # return avgs

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





# average of each level
#                 3
#                / \
#               11  4
#              /  \  \
#             4   -2  1
#
#    ---->   [ 3, 7.5, 1 ]
#
#
#
