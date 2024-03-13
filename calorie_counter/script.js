const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('bodget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;

const cleanInputString = str => {
  /* Loop to clean string input
  Inefficient for memory & runtime

  const strArray = str.split('');
  const clearStrArray = [];
  for (let i = 0; i < strArray.length; i++) {
    if(!['+', '-', ' '].includes(strArray[i])) {
      cleanStrArray.push(strArray[i]);
    }
  } */
  // More efficient regex version
  const regex = /[+-\s]/g;
  return str.replace(regex, '');
}