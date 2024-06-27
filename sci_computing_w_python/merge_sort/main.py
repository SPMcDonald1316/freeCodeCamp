def merge_sort(array):
  if len(array) <= 1:
    return

  mid_point = len(array) // 2
  left = array[:mid_point]
  right = array[mid_point:]

  merge_sort(left)
  merge_sort(right)

  left_index = 0
  right_index = 0
  sort_index = 0

  while left_index < len(left) and right_index < len(right):
    if left[left_index] < right[right_index]:
      array[sort_index] = left[left_index]
      left_index += 1
    else:
      array[sort_index] = right[right_index]
      right_index += 1

    sort_index += 1

  while left_index < len(left):
    array[sort_index] = left[left_index]
    left_index += 1
    sort_index += 1
  
  while right_index < len(right):
    array[sort_index] = right[right_index]
    right_index += 1
    sort_index += 1