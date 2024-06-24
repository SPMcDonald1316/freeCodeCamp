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
    
    # Check constraints
    constraints = [
      (nums, r'\d'),
      (lowercase, r'[a-z]'),
      (uppercase, r'[A-Z]'),
      (special_chars, fr'[{symbols}]')
    ]

  return password

