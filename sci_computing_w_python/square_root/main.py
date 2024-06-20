def square_root_bisection(target, tolerance=1e-7, iterations=100):
  if target < 0:
    raise ValueError('Square root of negative number is not define in real numbers')
  
  if target == 1:
    root = 1
    print(f'The square root of {target} is 1')
  elif target == 0:
    root = 0
    print(f'The square root of {target} is 0')
  else:
    low = 0
    high = max(1, target)
    root = None
