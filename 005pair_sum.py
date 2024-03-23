# brute force solution
# def pair_sum(numbers, target_sum):
#     for i in range(0, len(numbers)):
#         for j in range(i + 1, len(numbers)):
#             if numbers[i] + numbers[j] == target_sum:
#                 return (numbers[i], numbers[j])
#     return None



# optimized solution
def pair_sum(numbers, target_sum):
  previous_numbers = {}

  for index, num in enumerate(numbers):
    complement = target_sum - num

    if complement in previous_numbers:
      return (previous_numbers[complement], index)

    previous_numbers[num] = index
