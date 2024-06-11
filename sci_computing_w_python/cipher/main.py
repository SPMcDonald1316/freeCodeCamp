# Global Variables
text = 'Hello World'
alphabet = 'abcdefghijklmnopqrstuvwxyz'

print('Message to be encoded:', text)
print()

# Shift for caesar cipher
shift = 3

# Caesar Cipher
def caesar(message, offset):
  caesar_text = ''

  for char in message.lower():
    if char == ' ':
      caesar_text += char
    else:
      index = alphabet.find(char)
      new_index = (index + offset) % len(alphabet)
      caesar_text += alphabet[new_index]

  return caesar_text

print('Caesar encoding:', caesar(text, shift))
print()

# Key for vigenère cipher
custom_key = 'python'

# Vigenère Cipher
def vigenere(message, key):
  key_index = 0
  vigenere_text = ''

  for char in message.lower():
    # Append space to the message
    if char == ' ':
      vigenere_text += char
    else:
      # Find the right key character to encode
      key_char = key[key_index % len(key)]
      key_index += 1

      # Define the offset and the encrypted letter
      offset = alphabet.index(key_char)
      index = alphabet.find(char)
      new_index = (index + offset) % len(alphabet)
      vigenere_text += alphabet[new_index]
  
  return vigenere_text

encryption = vigenere(text, custom_key)
print('Vigenère encoding:', encryption)
print()