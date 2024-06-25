import re
import secrets
import string

def generate_password(length, nums, special_chars, uppercase, lowercase):
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
    count = 0
    for constraint, pattern in constraints:
      if constraint <= len(re.findall(pattern, password)):
        count += 1

    if count == 4:
      break 

  return password

