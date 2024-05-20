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

console.log(result)
