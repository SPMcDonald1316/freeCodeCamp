import secrets
import string

def generate_password(length):
  # Define the possible chars for password
  letters = string.ascii_letters
  digits = string.digits
  symbols = string.punctuation

  # Combine all characters
  all_chars = letters + digits + symbols