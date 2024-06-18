# Loop Version
# def convert_to_snake_case(str):
#   converted_chars = []
#   for char in str:
#     if char.isupper():
#       converted_char = f'_{char.lower()}'
#       converted_chars.append(converted_char)
#     else:
#       converted_chars.append(char)

#   # Join converted chars into string     
#   snake_case_str = ''.join(converted_chars)
#   # Strip of possible leading underscore and return.
#   return snake_case_str.strip('_')

# List Comprehension Version
def convert_to_snake_case(str):
  snake_case_chars = ['_' + char.lower() if char.isupper() else char for char in str]

  return ''.join(snake_case_chars).strip('_')

def main():
  print(convert_to_snake_case('IAmAPascalCasedString'))
  print(convert_to_snake_case('iAmACamelCasedString'))

main()