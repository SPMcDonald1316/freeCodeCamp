NUMBER_OF_DISKS = 3

# Var and Dict for Iteration
# number_of_moves = 2**NUMBER_OF_DISKS - 1
# rods = {
#   'A': list(range(NUMBER_OF_DISKS, 0, -1)),
#   'B': [],
#   'C': []
# }

# Vars for Recursion
A = list(range(NUMBER_OF_DISKS, 0, -1))
B = []
C = []

# ITERATIVE SOLUTION
# def make_allowed_move(rod1, rod2):
#   forward = False
#   if not rods[rod2]:
#     forward = True
#   elif rods[rod1] and rods[rod1][-1] < rods[rod2][-1]:
#     forward = True
#   if forward:
#     print(f'Moving disk {rods[rod1][-1]} from {rod1} to {rod2}')
#     rods[rod2].append(rods[rod1].pop())
#   else:
#     print(f'Moving disk {rods[rod2][-1]} from {rod2} to {rod1}')
#     rods[rod1].append(rods[rod2].pop())
#   # display progress
#   print(rods)


# def move(n, source, auxiliary, target):
#   # display starting configuration
#   print(rods)
#   for i in range(number_of_moves):
#     remainder = (i + 1) % 3
#     if remainder == 1:
#       if n % 2 != 0:
#         print(f'Move {i + 1} allowed between {source} and {target}')
#         make_allowed_move(source, target)
#       else:
#         print(f'Move {i + 1} allowed between {source} and {auxiliary}')
#         make_allowed_move(source, auxiliary)
#     elif remainder == 2:
#       if n % 2 != 0:
#         print(f'Move {i + 1} allowed between {source} and {auxiliary}')
#         make_allowed_move(source, auxiliary)
#       else:
#         print(f'Move {i + 1} allowed between {source} and {target}')
#         make_allowed_move(source, target)
#     elif remainder == 0:
#       print(f'Move {i + 1} allowed between {auxiliary} and {target}')
#       make_allowed_move(auxiliary, target)

# RECURSIVE SOLUTION
def move(n, source, auxiliary, target):
  # Base Case
  if n <= 0:
    return
  
  # move n - 1 disks from source to auxiliary
  move(n - 1, source, target, auxiliary)

  # move nth disk from source to target
  target.append(source.pop())

  # display progess
  print(f'''
        A -> {A} 
        B -> {B}
        C -> {C}''')
  
  # move n - 1 disks from auxiliary to target
  move(n - 1, auxiliary, source, target)

# initiate call from source A to target C with aux B
move(NUMBER_OF_DISKS, A, B, C)