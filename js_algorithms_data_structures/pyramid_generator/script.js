const character = "!";
const count = 10;
const rows = [];
let inverted = false;

function padRow(rowNumber, rowCount) {
  const spaces = " ".repeat(rowCount - rowNumber);
  const charRepeat = 2 * rowNumber - 1;

  return spaces + character.repeat(charRepeat) + spaces;
}

/* Add characters to rows with for loop
for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count))
}
*/

/* Add chars with while loop
while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count))
}
*/

/* Use for loop to print pyramid upsidedown
for (let i = count; i > 0; i--) {
  rows.push(padRow(i, count));
}
*/

// Use array method to invert pyramid
// Add if state to invert pyramid based on changing inverted var
for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

let result = ""

for (const row of rows) {
  result += "\n" + row
}

console.log(result)