def pair_sum(numbers, target_sum):
  previous_numbers = {}

  for index, num in enumerate(numbers):
    complement = target_sum - sum

    if complement in previous_numbers:
      return (previous_numbers[complement], index)
    previous_numbers[num] = index
    
