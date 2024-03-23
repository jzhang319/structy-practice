def most_frequent_char(s):
    count = {}
    for char in s:
        if char not in count:
            count[char] = 0

        count[char] += 1

    max_char = None
    for char in s:
      if max_char is None or count[char] > count[max_char]:
        max_char = char

    return max_char
