const character = "#";
const count = 8;
const rows = [];

for (let i = 1; i <= count; i++) {
  rows.push(character.repeat(i))
}

let result = ""

for (const row of rows) {
  result += "\n" + row
}

function padRow(rowNumber, rowCount) {
  const spaces = " ".repeat(rowCount - rowNumber);
  const charRepeat = 2 * rowNumber - 1;

  return spaces + character.repeat(charRepeat) + spaces;
}
