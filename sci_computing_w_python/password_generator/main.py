import re
import secrets
import string

def generate_password(length=16, nums=1, special_chars=1, uppercase=1, lowercase=1):
  # Define the possible chars for password
  letters = string.ascii_letters
  digits = string.digits
  symbols = string.punctuation

  # Combine all characters
  all_chars = letters + digits + symbols

  #Generate password
  while True:
    password = ''
    for _ in range(length):
      password += secrets.choice(all_chars)
    
    constraints = [
      (nums, r'\d'),
      (lowercase, r'[a-z]'),
      (uppercase, r'[A-Z]'),
      (special_chars, fr'[{symbols}]')
    ]

    # Check constraints using loop
    # count = 0
    # for constraint, pattern in constraints:
    #   if constraint <= len(re.findall(pattern, password)):
    #     count += 1

    # if count == 4:
    #   break 

    # Check constraints using all function
    if all(constraint <= len(re.findall(pattern, password))
      for constraint, pattern in constraints):
      break

  return password


if __name__ == '__main__':
  new_password = generate_password()
  print('Generated password:', new_password)
